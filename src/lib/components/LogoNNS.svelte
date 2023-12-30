<script lang="ts">
  import logoNNS from "$lib/assets/logo-nns.svg";
</script>

<img
  class="logo-nns"
  src={logoNNS}
  role="presentation"
  alt="Network Nervous System logo"
  loading="lazy"
/>

<style lang="scss">
  @use "../styles/mixins/media";

  .logo-nns {
    height: var(--menu-logo-height);

    @include media.min-width(large) {
      padding-top: var(--padding);
    }
  }
</style>
