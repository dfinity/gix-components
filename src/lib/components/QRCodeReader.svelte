<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import type { InitQRCodeWorker } from "$lib/services/qrcode.services";
  import { initQRCodeWorker } from "$lib/services/qrcode.services";
  import type { PostMessageDataResponse } from "$lib/types/post-message";

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

    console.log(scanRegionSize.width, videoDisplaySize.width, videoSize.width);

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

    const size = Math.min(width, height) * (2 / 3);

    scanRegionSize = {
      width: size,
      height: size,
      x: Math.round((width - size) / 2),
      y: Math.round((height - size) / 2),
    };

    // If scanRegionSize is used as auto-subscriber, it does not fire according test. Therefore the imperative call.
    initScanRegionDisplaySize();
  };

  $: videoSize, initScanSize();

  const initStream = async () => {
    if (video === undefined) {
      return;
    }

    stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        width: { ideal: 1920 },
        height: { ideal: 1080 },
        facingMode: "environment",
      },
    });

    const [track] = stream.getVideoTracks();

    if (track === undefined) {
      return;
    }

    const settings = track.getSettings();

    videoSize = {
      width: settings.width as number,
      height: settings.height as number,
    };

    video.srcObject = stream;

    await video.play();

    scan();
  };

  let animationFrame: number | undefined;
  const scan = () => {
    animationFrame = requestAnimationFrame(streamFeed);
  };

  const decodeCallback = ({ value }: PostMessageDataResponse) =>
    console.log("QRCode value", value);

  const streamFeed = () => {
    if (
      video === undefined ||
      canvas === undefined ||
      videoSize === undefined ||
      scanRegionSize === undefined
    ) {
      return;
    }

    canvas.width = videoSize.width;
    canvas.height = videoSize.height;

    const context = canvas.getContext("2d", {
      alpha: false,
      willReadFrequently: true,
    });
    context.imageSmoothingEnabled = false;

    const { x, y, width, height } = scanRegionSize;

    context?.drawImage(
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
      image,
      width: canvas.width,
      height: canvas.height,
    });

    scan();
  };

  let video: HTMLVideoElement | undefined;
  let canvas: HTMLCanvasElement | undefined;

  onMount(async () => {
    worker = await initQRCodeWorker(decodeCallback);

    await initStream();
  });

  onDestroy(() => {
    if (animationFrame !== undefined) {
      cancelAnimationFrame(animationFrame);
    }

    if (video !== undefined) {
      video.pause();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore https://html.spec.whatwg.org/multipage/media.html#best-practices-for-authors-using-media-elements
      video.srcObject = null;
    }
  });
</script>

<svelte:window on:resize={initVideoDisplaySize} />

<article class="container">
  <video bind:this={video} muted={true} autoPlay={true} playsInline={true} />

  <canvas bind:this={canvas} />

  <div
    class="region"
    style={`--region-width: ${
      scanRegionDisplaySize?.width ?? 0
    }px; --region-height: ${scanRegionDisplaySize?.height ?? 0}px`}
  />
</article>

<style lang="scss">
  .container {
    position: relative;
    width: 100%;

    border-radius: var(--border-radius);
    overflow: hidden;
  }

  video,
  canvas {
    width: 100%;
    height: auto;
  }

  canvas {
    position: absolute;
    left: 0;
    top: 0;

    visibility: hidden;
    opacity: 0;
  }

  .region {
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    border: 8px solid var(--primary);
    border-radius: var(--border-radius);

    width: var(--region-width);
    height: var(--region-height);
  }
</style>
