<script lang="ts">
  import QRCodeReader from "$lib/components/QRCodeReader.svelte";
</script>

<div class="container">
  <QRCodeReader on:nnsQRCode />
</div>

<style lang="scss">
  @use "../styles/mixins/media";

  .container {
    height: calc(
      var(--dialog-height) - var(--padding-1_5x) - var(--padding-2x) -
        var(--dialog-padding-y) - var(--dialog-header-height) -
        var(--dialog-padding-y) - var(--dialog-padding-x)
    );

    @include media.min-width(medium) {
      height: calc(var(--dialog-min-height) - var(--dialog-header-height));
    }
  }
</style>
