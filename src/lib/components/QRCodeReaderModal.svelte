<script lang="ts">
  import QRCodeReader from "$lib/components/QRCodeReader.svelte";

  // TODO: to be used to render a QR code in a modal until the <Modal /> component supports a minimal height for the content and automatically pushes the toolbar actions to the bottom (to be cleared with designers)
</script>

<div class="container">
  <QRCodeReader on:nnsQRCode />
</div>

<style lang="scss">
  @use "../styles/mixins/media";

  .container {
    height: 54vh;

    @include media.min-width(medium) {
      height: calc(var(--dialog-min-height) - var(--dialog-header-height));
    }
  }
</style>
