<script lang="ts">
  /**
   * Inspired by:
   *
   * - Shoelace: https://github.com/shoelace-style/shoelace/blob/next/src/components/qr-code/qr-code.ts
   * - DeckDeckGo: https://github.com/deckgo/deckdeckgo/blob/main/webcomponents/elements/src/components/qrcode/qrcode/qrcode.tsx
   */
  import { afterUpdate } from "svelte";
  import QrCreator from "qr-creator";
  import { debounce } from "$lib/utils/debounce.utils";

  export let ariaLabel: string | undefined;
  export let value: string;

  // Valid CSS colors
  export let fillColor = "black";
  export let backgroundColor = "white";

  export let radius = 0;
  // https://www.qrcode.com/en/about/error_correction.html
  export let ecLevel: "L" | "M" | "Q" | "H" = "H";

  let label: string;
  $: label =
    ariaLabel !== undefined && ariaLabel.length > 0 ? ariaLabel : value;

  let container: HTMLDivElement | undefined;
  let size: { width: number } | undefined = undefined;

  // Add a small debounce in case the screen is resized
  const initSize = debounce(() => {
    if (container === undefined || container === null) {
      size = undefined;
      return;
    }

    const { width } = container.getBoundingClientRect();
    size = {
      width,
    };
  }, 25);

  let once = false;
  afterUpdate(() => {
    if (once) {
      return;
    }

    initSize();
    once = true;
  })

  const renderCanvas = () => {
    if (canvas === undefined || size === undefined) {
      return;
    }

    QrCreator.render(
      {
        text: value,
        radius,
        ecLevel,
        fill: fillColor,
        background: backgroundColor,
        // We draw the canvas larger and scale its container down to avoid blurring on high-density displays
        size: size.width * 2,
      },
      canvas
    );
  };

  let canvas: HTMLCanvasElement | undefined;
  $: value, canvas, (() => renderCanvas())();

  let showLogo: boolean;
  $: showLogo = $$slots.logo !== undefined;
</script>

<svelte:window on:resize={initSize} />

<div class="container" bind:this={container}>
  {#if size !== undefined}
    <canvas
      bind:this={canvas}
      role="img"
      aria-label={label}
      style={`width: ${size.width > 0 ? `${size.width}px` : "100%"}; height: ${
        size.width > 0 ? `${size.width}px` : "100%"
      }`}
    />
  {/if}

  {#if showLogo}
    <div class="logo">
      <slot name="logo" />
    </div>
  {/if}
</div>

<style lang="scss">
  .container {
    position: relative;
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
