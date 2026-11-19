<script lang="ts">
  import { isNullish, nonNullish } from "@dfinity/utils";
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import { isDesktop } from "$lib/utils/device.utils";
  import { nextElementId } from "$lib/utils/html.utils";

  const id = nextElementId("qrcode-reader-");

  const dispatch = createEventDispatcher();

  // Delay between two scan attempts. Each scan is scheduled only once the previous one settled.
  const SCAN_DELAY_MS = 100;

  let videoElement: HTMLVideoElement | undefined;
  let stream: MediaStream | undefined;
  let scanTimeout: NodeJS.Timeout | undefined;
  let isDestroyed = false;

  onMount(async () => {
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
        audio: false,
      });

      // Release the camera rather than leaving the stream running if the component was destroyed
      // while `getUserMedia` was pending, or if it has no video element to render the feed into.
      if (isDestroyed || isNullish(videoElement)) {
        stopStream();

        return;
      }

      videoElement.srcObject = stream;

      await videoElement.play();

      await startScanning();
    } catch (err: unknown) {
      dispatch("nnsQRCodeError", err);
    }
  });

  const startScanning = async () => {
    try {
      // Decoding runs in WebAssembly, which requires `wasm-unsafe-eval` in the host app `script-src`.
      // By default the `.wasm` binary is fetched from a jsDelivr CDN at runtime — see the component
      // documentation for how to allow that origin or serve the binary from the app instead.
      const { BarcodeDetector } = await import("barcode-detector/ponyfill");

      if (isDestroyed) {
        return;
      }

      const detector = new BarcodeDetector({
        formats: ["qr_code"],
      });

      const scan = async () => {
        if (isDestroyed) {
          return;
        }

        // Frames are skipped until the camera has decoded data to offer, but scanning is rescheduled
        // either way — a not-yet-ready video must not stop the loop for good.
        if (
          nonNullish(videoElement) &&
          videoElement.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA
        ) {
          try {
            const [qrResult] = await detector.detect(videoElement);

            if (nonNullish(qrResult)) {
              dispatch("nnsQRCode", qrResult.rawValue);
            }
          } catch {
            // Decoding failed on this frame — expected when no QR code is visible
          }
        }

        if (!isDestroyed) {
          scanTimeout = setTimeout(scan, SCAN_DELAY_MS);
        }
      };

      scanTimeout = setTimeout(scan, SCAN_DELAY_MS);
    } catch (err: unknown) {
      dispatch("nnsQRCodeError", err);
    }
  };

  const stopStream = () => {
    if (nonNullish(stream)) {
      stream.getTracks().forEach((track) => track.stop());

      stream = undefined;
    }
  };

  onDestroy(() => {
    isDestroyed = true;

    if (nonNullish(scanTimeout)) {
      clearTimeout(scanTimeout);

      scanTimeout = undefined;
    }

    stopStream();
  });

  // We optimistically assume that if the QR code reader is used on desktop, it has most probably only a single "user" facing camera and that we can invert the displayed video
  const mirror = isDesktop();
</script>

<article {id} class="reader" class:mirror>
  <video bind:this={videoElement} autoplay muted playsinline></video>

  <div class="scan-overlay">
    <div class="scan-region"></div>
  </div>
</article>

<style lang="scss">
  .reader {
    position: relative;
    width: 100%;
    height: 100%;

    border-radius: var(--border-radius);
    overflow: hidden;

    &.mirror {
      transform: scaleX(-1);
    }
  }

  video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .scan-overlay {
    position: absolute;
    inset: 0;
    container-type: size;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  .scan-region {
    width: min(90cqw, 90cqh);
    aspect-ratio: 1;
    box-shadow: 0 0 0 9999px white;
    border: 2px solid rgba(var(--primary-rgb), 0.4);
  }
</style>
