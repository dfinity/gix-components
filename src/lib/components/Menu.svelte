<script lang="ts">
  import { layoutMenuOpen } from "$lib/stores/layout.store";
  import { handleKeyPress } from "$lib/utils/keyboard.utils";
  import IconBack from "$lib/icons/IconBack.svelte";
  import { menuCollapsed, menuStore } from "$lib/stores/menu.store";
  import { i18n } from "$lib/stores/i18n";
  import { nonNullish } from "@dfinity/utils";
  import { fade } from "svelte/transition";
  import { themeStore } from "$lib/stores/theme.store";

  export let sticky = true;

  const close = () => layoutMenuOpen.set(false);
</script>

<div role="menu" class:open={$layoutMenuOpen}>
  <div
    class="logo-nns logo"
    class:open={$layoutMenuOpen}
    class:menu-open={!$menuCollapsed}
  >
    <slot name="logo" />
  </div>

  <div class="inner-wrapper">
    <div
      class="inner"
      class:sticky
      data-tid="menu-inner"
      class:open={$layoutMenuOpen}
      role="button"
      tabindex="-1"
      on:click={close}
      on:keypress={($event) => handleKeyPress({ $event, callback: close })}
    >
      <slot />
    </div>
  </div>

  {#if nonNullish($themeStore)}
    <div
      in:fade
      class="bottom-logo logo"
      class:open={$layoutMenuOpen}
      class:menu-open={!$menuCollapsed}
    >
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
    display: flex;
    flex-direction: column;
    height: 100%;

    @include interaction.initial;

    box-sizing: border-box;

    z-index: var(--menu-z-index);

    --menu-logo-height: 65px;
    --menu-stack: 1em;
    --inner-menu-padding-left: var(--padding);

    padding-top: var(--header-offset, 0px);

    position: relative;

    // Shift the menu on large screen e.g. if a banner is displayed
    @include media.min-width(large) {
      padding-top: calc(var(--padding-2x) + var(--header-offset, 0px));
      --inner-menu-padding-left: var(--padding-2x);
    }

    .inner-wrapper {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      overflow-y: auto;

      padding-bottom: var(--padding-3x);

      // Hide scrollbar for IE, Edge, and Firefox
      -ms-overflow-style: none; // IE and Edge
      scrollbar-width: none; // Firefox
      // Hide scrollbar for webkit
      &::-webkit-scrollbar {
        display: none;
      }

      @include media.min-width(large) {
        padding-bottom: var(--padding-3x);
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

      width: 0;
      max-width: 100vw;
      flex-grow: 1;

      margin-left: -100%;

      transition:
        margin-left var(--animation-time-normal)
          var(--menu-animation-timing-function),
        width var(--animation-time-normal) var(--menu-animation-timing-function);
      // On large screen the header is not sticky but within the content that's why we align the inner menu start
      box-sizing: border-box;

      &.sticky {
        // On large screen the menu can be always open
        @include media.min-width(large) {
          width: var(--menu-width);
          margin-left: var(--inner-menu-padding-left);
        }
      }

      // On smaller screen the menu is open on demand
      &.open {
        width: var(--menu-width);
        margin-left: var(--inner-menu-padding-left);
      }
    }

    .logo-nns {
      display: block;
      color: var(--menu-color);
      padding-top: var(--menu-stack);

      text-align: center;
      @include media.min-width(large) {
        padding-top: var(--padding);
      }
    }

    .bottom-logo {
      display: none;
      padding-bottom: var(--padding-3x);

      color: var(--menu-color);
      text-align: center;

      @media (min-height: 654px) {
        display: block;
      }
    }

    .logo {
      width: 0;
      transform: translateX(calc(var(--menu-expanded-width) * -1));

      transition:
        transform var(--animation-time-normal)
          var(--menu-animation-timing-function),
        width var(--animation-time-normal) var(--menu-animation-timing-function);

      // On smaller screen the menu is open on demand
      &.open {
        width: calc(
          var(--menu-expanded-width) + var(--inner-menu-padding-left)
        );
        transform: translateX(0);
      }

      &.menu-open {
        @include media.min-width(large) {
          width: calc(
            var(--menu-expanded-width) + var(--inner-menu-padding-left)
          );
          transform: translateX(0);
        }
      }
    }
  }
</style>
