<script lang="ts">
  import { isNullish, nonNullish } from "@dfinity/utils";
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import { isDesktop } from "$lib/utils/device.utils";
  import { nextElementId } from "$lib/utils/html.utils";

  const id = nextElementId("qrcode-reader-");

  const dispatch = createEventDispatcher();

  let videoElement: HTMLVideoElement | undefined;
  let canvasElement: HTMLCanvasElement | undefined;
  let stream: MediaStream | undefined;
  let scanInterval: ReturnType<typeof setInterval> | undefined;
  let isDestroyed = false;
  let isProcessingFrame = false;

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

      if (isDestroyed) {
        stopStream();

        return;
      }

      if (nonNullish(videoElement)) {
        videoElement.srcObject = stream;

        await videoElement.play();

        await startScanning();
      }
    } catch (err: unknown) {
      dispatch("nnsQRCodeError", err);
    }
  });

  const startScanning = async () => {
    try {
      const { readBarcodes } = await import("zxing-wasm/reader");

      if (isDestroyed) {
        return;
      }

      const scan = async () => {
        if (
          isProcessingFrame ||
          isDestroyed ||
          isNullish(videoElement) ||
          isNullish(canvasElement) ||
          videoElement.readyState < HTMLMediaElement.HAVE_CURRENT_DATA
        ) {
          return;
        }

        isProcessingFrame = true;

        try {
          const { videoWidth, videoHeight } = videoElement;

          if (videoWidth === 0 || videoHeight === 0) {
            return;
          }

          // Use full video resolution for maximum decoding accuracy on mobile
          canvasElement.width = videoWidth;
          canvasElement.height = videoHeight;

          const ctx = canvasElement.getContext("2d", {
            willReadFrequently: true,
          });

          if (isNullish(ctx)) {
            return;
          }

          ctx.drawImage(videoElement, 0, 0, videoWidth, videoHeight);

          const imageData = ctx.getImageData(0, 0, videoWidth, videoHeight);

          const results = await readBarcodes(imageData, {
            formats: ["QRCode"],
            tryHarder: true,
            tryInvert: true,
            maxNumberOfSymbols: 1,
          });

          const qrResult = results.find((r) => r.isValid);

          if (qrResult) {
            dispatch("nnsQRCode", qrResult.text);
          }
        } catch {
          // Decoding failed on this frame — expected when no QR code is visible
        } finally {
          isProcessingFrame = false;
        }
      };

      scanInterval = setInterval(scan, 100);
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

    if (nonNullish(scanInterval)) {
      clearInterval(scanInterval);

      scanInterval = undefined;
    }

    stopStream();
  });

  // We optimistically assume that if the QR code reader is used on desktop, it has most probably only a single "user" facing camera and that we can invert the displayed video
  const mirror = isDesktop();
</script>

<article {id} class="reader" class:mirror>
  <video bind:this={videoElement} autoplay muted playsinline></video>

  <canvas bind:this={canvasElement} class="decode-canvas"></canvas>

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

  .decode-canvas {
    display: none;
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
