<script lang="ts">
  import IconClose from "$lib/icons/IconClose.svelte";
  import IconMenu from "$lib/icons/IconMenu.svelte";
  import { i18n } from "$lib/stores/i18n";
  import { layoutMenuOpen } from "$lib/stores/layout.store";
</script>

<button
  class="icon-only"
  aria-label={$layoutMenuOpen ? $i18n.core.close : $i18n.core.menu}
  data-tid="menu-toggle"
  onclick={() => layoutMenuOpen.set(!$layoutMenuOpen)}
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
