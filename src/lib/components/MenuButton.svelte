<script lang="ts">
  import { i18n } from "$lib/stores/i18n";
  import IconMenu from "$lib/icons/IconMenu.svelte";

  export let open = false;
</script>

<button
  data-tid="menu"
  class="icon-only"
  on:click={() => (open = true)}
  aria-label={$i18n.core.menu}
>
  <IconMenu />
</button>

<style lang="scss">
  @use "../styles/mixins/effect";
  @use "../styles/mixins/header";
  @use "../styles/mixins/media";

  button.icon-only {
    @include media.min-width(xlarge) {
      display: none;
    }

    @include header.button(--primary-tint);

    padding: var(--padding-0_5x);
  }
</style>
