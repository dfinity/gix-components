<script lang="ts">
  import QRCodeReader from "$lib/components/QRCodeReader.svelte";

  let container: HTMLDivElement | undefined;
  let parentSize: { width: number; height: number } | undefined;

  const initParentSize = () => {
    if (container === undefined) {
      return;
    }

    // TODO: resolve workaround with CSS
    const { width, height } =
      container.parentElement.parentElement.getBoundingClientRect();
    parentSize = {
      width,
      height,
    };

    container.parentElement.style.padding = "0";
  };

  $: container, initParentSize();
</script>

<svelte:window on:resize={initParentSize} />

<div
  class="container"
  bind:this={container}
  style={`--container-width: ${parentSize?.width ?? 0}px; --container-height: ${
    parentSize?.height ?? 0
  }px`}
>
  {#if parentSize !== undefined}
    <QRCodeReader on:nnsQRCode />
  {/if}
</div>

<style lang="scss">
  .container {
    height: var(--container-height);
    width: var(--container-width);
  }
</style>
