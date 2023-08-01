<script lang="ts">
  import { i18n } from "$lib/stores/i18n";
  import IconMenu from "$lib/icons/IconMenu.svelte";
  import IconClose from "$lib/icons/IconClose.svelte";
  import { layoutMenuOpen } from "$lib/stores/layout.store";
</script>

<button
  data-tid="menu-toggle"
  class="icon-only"
  on:click={() => layoutMenuOpen.set(!$layoutMenuOpen)}
  aria-label={$layoutMenuOpen ? $i18n.core.close : $i18n.core.menu}
>
  {#if $layoutMenuOpen}
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
    // On large screen the menu is sticky therefore it cannot be opened or closed
    @include media.min-width(large) {
      display: none;
    }

    @include header.button(--primary-tint);
  }
</style>
