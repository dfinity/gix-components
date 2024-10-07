<script lang="ts">
  import { layoutMenuOpen } from "$lib/stores/layout.store";
  import { handleKeyPress } from "$lib/utils/keyboard.utils";
  import IconBack from "$lib/icons/IconBack.svelte";
  import { menuCollapsed, menuStore } from "$lib/stores/menu.store";
  import { i18n } from "$lib/stores/i18n";
  import { themeStore } from "$lib/stores/theme.store";
  import { nonNullish } from "@dfinity/utils";
  import { fade } from "svelte/transition";

  export let sticky = true;

  const close = () => layoutMenuOpen.set(false);

  // there are two ways to close the menu
  // first using menuCollapsed which is the small button with arrow on right
  // second layoutMenuOpen which is the X button on top on small screens
  // most of the animation and transitions happen in menu.scss
</script>

<div role="menu" class:open={$layoutMenuOpen}>
  <div class="logo-nns logo">
    <slot name="logo" />
  </div>

  <div class="inner-wrapper">
    <div
      class="inner"
      class:sticky
      data-tid="menu-inner"
      role="button"
      tabindex="-1"
      class:menu-collapsed={$menuCollapsed}
      on:click={close}
      on:keypress={($event) => handleKeyPress({ $event, callback: close })}
    >
      <slot />
    </div>
  </div>

  {#if nonNullish($themeStore)}
    <div in:fade class="bottom-logo logo">
      <slot name="oneliner" />
    </div>
  {/if}

  <button
    class="menu-collapse icon-only"
    data-tid="menu-collapse"
    title={$menuCollapsed ? $i18n.core.expand : $i18n.core.collapse}
    on:click={menuStore.toggle}><IconBack /></button
  >
</div>

<style lang="scss">
  @use "../styles/mixins/interaction";
  @use "../styles/mixins/display";
  @use "../styles/mixins/media";

  div[role="menu"] {
    @include interaction.initial;

    padding-top: calc(var(--padding-4x) + var(--header-offset, 0px));

    position: relative;

    @include media.min-width(large) {
      padding-top: calc(var(--padding-3x) + var(--header-offset, 0px));
    }
  }

  .inner-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden;

    //space for scroll
    padding-left: var(--padding-2x);
    &.menu-collapsed {
      //small screen doesn't need a padding
      padding-left: 0;
    }
  }

  .inner {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: var(--padding-0_5x);

    // More space for menu selection touches the edge;
    // otherwise the first selected menu entry would be cut off in mobile view.
    padding-top: var(--menu-selection-outer-radius);

    max-width: 100vw;
    flex-grow: 1;

    overflow-y: auto;

    // On large screen the header is not sticky but within the content that's why we align the inner menu start
    box-sizing: border-box;

    // Hide scrollbar for IE, Edge, and Firefox
    -ms-overflow-style: none; // IE and Edge
    scrollbar-width: none; // Firefox
    // Hide scrollbar for webkit
    &::-webkit-scrollbar {
      display: none;
    }

    @include media.min-width(large) {
      padding-top: var(--padding-4x);
    }
  }

  .logo-nns {
    color: var(--menu-color);
    text-align: center;
  }

  .bottom-logo {
    padding: var(--padding-3x) 0;
    color: var(--menu-color);
    text-align: center;
  }
</style>
