<script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import type { InitQRCodeWorker } from "$lib/services/qrcode.services";
  import { initQRCodeWorker } from "$lib/services/qrcode.services";
  import type { PostMessageDataResponse } from "$lib/types/post-message";
  import { isIOS, isPortrait } from "$lib/utils/device.utils";

  /**
   * Abstract:
   *
   * 1. Get video stream
   * 2. Init video stream size, video cropped region and their display size for the UI
   * 3. On every 60 FPS acquire a frame of the video - an image - and send it to a web worker
   * 4. Read QR value in worker and if resolved pass it back
   * 5. Dispatch resolved QR value
   */

  let worker: InitQRCodeWorker | undefined;
  let stream: MediaStream | undefined;

  type Size = { width: number; height: number };

  let videoDisplaySize: Size | undefined;
  let scanRegionDisplaySize: Size | undefined;

  let videoSize: Size | undefined;
  let scanRegionSize: (Size & { x: number; y: number }) | undefined;

  const initVideoDisplaySize = () => {
    if (video === undefined || video === null) {
      videoDisplaySize = undefined;
      return;
    }

    const { width, height } = video.getBoundingClientRect();

    videoDisplaySize = {
      width,
      height,
    };
  };

  $: video, initVideoDisplaySize();

  const initScanRegionDisplaySize = () => {
    if (
      videoDisplaySize === undefined ||
      videoSize === undefined ||
      scanRegionSize === undefined
    ) {
      scanRegionDisplaySize = undefined;
      return;
    }

    scanRegionDisplaySize = {
      width: (scanRegionSize.width * videoDisplaySize.width) / videoSize.width,
      height:
        (scanRegionSize.height * videoDisplaySize.height) / videoSize.height,
    };
  };

  $: videoDisplaySize, videoSize, initScanRegionDisplaySize();

  const initScanSize = () => {
    if (videoSize === undefined) {
      scanRegionSize = undefined;
      return;
    }

    const { width, height } = videoSize;

    // The source being ideally 1920x1080px it results in a square of 720px if multiplied by 2/3 which fits well the use case according tests.
    const size = Math.min(width, height) * (2 / 3);

    scanRegionSize = {
      width: size,
      height: size,
      x: Math.round((width - size) / 2),
      y: Math.round((height - size) / 2),
    };

    // When scanRegionSize was used as auto-subscriber, it did not fired `initScanRegionDisplaySize`. Therefore, the imperative call here.
    initScanRegionDisplaySize();
  };

  const dispatch = createEventDispatcher();

  const initStream = async () => {
    if (video === undefined || video === null) {
      return;
    }

    // Workaround: according test, iPhone used in portrait mode returns a video size in landscape but, effectively used portrait.
    // e.g. returns settings 1920x1080 while it actually is 1080x1920
    const invert = isPortrait() && isIOS();

    // We try to get ideally a HD (1920x1080) stream that also uses ideally the environment camera (not front facing).
    stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        width: { ideal: invert ? 1080 : 1920 },
        height: { ideal: invert ? 1920 : 1080 },
        facingMode: "environment",
      },
    });

    // Use getVideoTracks().getSettings() to retrieve the effective size of the stream provided by the device.
    const [track] = stream.getVideoTracks();

    if (track === undefined) {
      dispatch(
        "nnsQRCodeError",
        new Error("The video stream contains no video tracks.")
      );
      return;
    }

    const settings = track.getSettings();

    videoSize = {
      width: invert ? (settings.height as number) : (settings.width as number),
      height: invert ? (settings.width as number) : (settings.height as number),
    };

    video.srcObject = stream;

    await video.play();

    scan();
  };

  let animationFrame: number | undefined;
  const scan = () => (animationFrame = requestAnimationFrame(streamFeed));

  const decodeCallback = ({ value }: PostMessageDataResponse) =>
    dispatch("nnsQRCode", value);

  let context: CanvasRenderingContext2D | null | undefined;

  const initCanvas = () => {
    if (videoSize === undefined || canvas === undefined) {
      return;
    }

    canvas.width = videoSize.width;
    canvas.height = videoSize.height;

    context = canvas.getContext("2d", {
      alpha: false,
      willReadFrequently: true,
    });

    if (context === null) {
      return;
    }

    context.imageSmoothingEnabled = false;

    initScanSize();
  };

  $: videoSize, initCanvas();

  const streamFeed = () => {
    if (
      video === undefined ||
      video === null ||
      canvas === undefined ||
      context === undefined ||
      context === null ||
      scanRegionSize === undefined
    ) {
      return;
    }

    const { x, y, width, height } = scanRegionSize;

    context.drawImage(
      video,
      x,
      y,
      width,
      height,
      0,
      0,
      canvas.width,
      canvas.height
    );

    const image = context.getImageData(0, 0, canvas.width, canvas.height);

    worker?.decodeQRCode({
      data: {
        image,
        width: canvas.width,
        height: canvas.height,
      },
      options: { transfer: [image.data.buffer] },
    });

    scan();
  };

  let video: HTMLVideoElement | undefined | null;
  let canvas: HTMLCanvasElement | undefined;

  onMount(async () => {
    try {
      worker = await initQRCodeWorker(decodeCallback);

      await initStream();
    } catch (err: unknown) {
      dispatch("nnsQRCodeError", err);
    }
  });

  const stopVideoStream = (stream: MediaStream | undefined) => {
    if (stream === undefined) {
      return;
    }

    for (const track of stream.getTracks()) {
      track.stop(); //  note that this will also automatically turn the flashlight off
      stream.removeTrack(track);
    }
  };

  const destroyVideo = () => {
    if (video === undefined || video === null) {
      return;
    }

    stopVideoStream(stream);

    video.pause();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore https://html.spec.whatwg.org/multipage/media.html#best-practices-for-authors-using-media-elements
    video.srcObject = null;
  };

  onDestroy(() => {
    worker?.closeQRCode();

    if (animationFrame !== undefined) {
      cancelAnimationFrame(animationFrame);
    }

    destroyVideo();
  });
</script>

<svelte:window on:resize={initVideoDisplaySize} />

<article class="container">
  <video bind:this={video} muted={true} autoPlay={true} playsInline={true} />

  <canvas bind:this={canvas} />

  {#if scanRegionDisplaySize !== undefined && scanRegionDisplaySize.width > 0 && scanRegionDisplaySize.height > 0}
    <div
      class="region"
      style={`--region-width: ${
        scanRegionDisplaySize?.width ?? 0
      }px; --region-height: ${scanRegionDisplaySize?.height ?? 0}px`}
    />
  {/if}
</article>

<style lang="scss">
  .container {
    position: relative;
    width: 100%;
    height: 100%;

    border-radius: var(--border-radius);
    overflow: hidden;
  }

  video,
  canvas {
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    width: auto;
    height: 100%;
  }

  canvas {
    visibility: hidden;
    opacity: 0;
  }

  .region {
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    border: var(--padding) solid var(--primary);
    box-shadow: 0 0 0 9999px rgba(var(--primary-rgb), 0.4);
    border-radius: var(--border-radius);

    width: var(--region-width);
    height: var(--region-height);
    max-width: 100%;

    box-sizing: border-box;
  }
</style>
