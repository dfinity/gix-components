<script lang="ts">
  import { i18n } from "$lib/stores/i18n";
  import IconMenu from "$lib/icons/IconMenu.svelte";
  import IconClose from "$lib/icons/IconClose.svelte";

  export let open = false;
</script>

<button
  data-tid="menu-toggle"
  class="icon-only"
  on:click={() => (open = !open)}
  aria-label={open ? $i18n.core.close : $i18n.core.menu}
>
  {#if open}
    <IconClose />
  {:else}
    <IconMenu />
  {/if}
</button>

<style lang="scss">
  @use "../styles/mixins/effect";
  @use "../styles/mixins/header";
  @use "../styles/mixins/media";

  button.icon-only {
    // On large screen the menu is sticky therefore if cannot be opened or closed
    @include media.min-width(xlarge) {
      display: none;
    }

    @include header.button(--primary-tint);
  }
</style>
