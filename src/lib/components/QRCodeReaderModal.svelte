<script lang="ts">
  import QRCodeReader from "$lib/components/QRCodeReader.svelte";
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
