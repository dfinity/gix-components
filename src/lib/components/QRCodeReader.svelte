<script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import type { Html5Qrcode } from "html5-qrcode";
  import { isAndroidTablet, isIPad, isMobile } from "$lib/utils/device.utils";

  const dispatch = createEventDispatcher();

  let html5QrCode: Html5Qrcode | undefined;

  onMount(async () => {
    const qrCodeSuccessCallback = (decodedText: string) =>
      dispatch("nnsQRCode", decodedText);

    // Source documentation: https://scanapp.org/blog/2022/01/09/setting-dynamic-qr-box-size-in-html5-qrcode.html
    const qrboxFunction = (
      viewfinderWidth: number,
      viewfinderHeight: number
    ) => {
      let minEdgePercentage = 0.7; // 70%
      let minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
      let qrboxSize = Math.floor(minEdgeSize * minEdgePercentage);
      return {
        width: qrboxSize,
        height: qrboxSize,
      };
    };

    const { Html5Qrcode } = await import("html5-qrcode");

    html5QrCode = new Html5Qrcode("reader");

    await html5QrCode
      .start(
        { facingMode: "environment" },
        {
          fps: 10, // Optional, frame per seconds for qr code scanning
          qrbox: qrboxFunction,
        },
        qrCodeSuccessCallback,
        (_errorMessage: string) => {
          // Do nothing. This error message is throw when the QR code cannot be read.
          // Examples of error:
          // QR code parse error, error = NotFoundException: No MultiFormat Readers were able to detect the code.
          // QR code parse error, error = No barcode or QR code detected.
          // QR code parse error, error = NotFoundException: No MultiFormat Readers were able to detect the code.
        }
      )
      .catch((err: unknown) => {
        dispatch("nnsQRCodeError", err);
      });
  });

  onDestroy(async () => {
    try {
      await html5QrCode?.stop();
    } catch (err: unknown) {
      console.error(err);
      dispatch(
        "nnsQRCodeError",
        new Error("There was an error while destroying the QR code reader.")
      );
    }
  });

  // We optimistically assume that if the QR code reader is used on desktop, it has most probably only a single "user" facing camera and that we can invert the displayed video
  let mirror = !isMobile() && !isIPad() && !isAndroidTablet();
</script>

<article class="reader" id="reader" class:mirror />

<style lang="scss">
  .reader {
    position: relative;
    width: 100%;
    height: auto;

    border-radius: var(--border-radius);
    overflow: hidden;

    &.mirror {
      transform: scaleX(-1);
    }

    :global(#qr-shaded-region) {
      border-color: rgba(var(--primary-rgb), 0.4) !important;
    }

    :global(#qr-shaded-region > div) {
      background: white !important;
    }
  }
</style>
