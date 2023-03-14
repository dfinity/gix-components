<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import type { InitQRCodeWorker } from "$lib/services/qrcode.services";
  import { initQRCodeWorker } from "$lib/services/qrcode.services";
  import type { PostMessageDataResponse } from "$lib/types/post-message";

  let worker: InitQRCodeWorker | undefined;

  let stream: MediaStream | undefined;
  let videoSize: { width: number; height: number } | undefined;

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
      videoSize === undefined
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
    // TODO
    context?.drawImage(
      video,
      0,
      0,
      canvas.width,
      canvas.height,
      0,
      0,
      canvas.width,
      canvas.height
    );

    const image = context.getImageData(0, 0, canvas!.width, canvas!.height);

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

<article class="container">
  <video
    class="video"
    bind:this={video}
    muted={true}
    autoPlay={true}
    playsInline={true}
  />

  <canvas bind:this={canvas} />
</article>

<style lang="scss">
  .container {
    position: relative;
    width: 100%;
  }

  .video {
    width: 100%;
    height: 100%;
  }
</style>
