<script lang="ts">
  import MenuBackground from "./MenuBackground.svelte";
  import {
    layoutMenuCollapsed,
    layoutMenuOpen,
  } from "$lib/stores/layout.store";
  import { handleKeyPress } from "$lib/utils/keyboard.utils";
  import IconEast from "$lib/icons/IconEast.svelte";

  export let sticky = true;

  const close = () => layoutMenuOpen.set(false);
</script>

<div role="menu" class:collapsed={!$layoutMenuOpen && $layoutMenuCollapsed}>
  <MenuBackground />

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

    <div class="expand">
      <button on:click={() => layoutMenuCollapsed.set(false)} class:visible={$layoutMenuCollapsed}
        ><IconEast /></button
      >
    </div>
  </div>

  <button
    class="bottom"
    on:click={() => layoutMenuCollapsed.set(true)}
    class:visible={!$layoutMenuCollapsed}><IconEast /></button
  >
</div>

<style lang="scss">
  @use "../styles/mixins/interaction";
  @use "../styles/mixins/display";
  @use "../styles/mixins/media";

  div[role="menu"] {
    @include interaction.initial;

    box-sizing: border-box;

    z-index: var(--menu-z-index);

    --menu-logo-height: 65px;

    padding-top: calc(
      var(--menu-logo-height) + var(--padding-4x) + var(--header-offset, 0px)
    );

    // Shift the menu on large screen e.g. if a banner is displayed
    @include media.min-width(large) {
      padding-top: calc(
        var(--menu-logo-height) + var(--padding-3x) + var(--header-offset, 0px)
      );
    }

    position: relative;

    --menu-width: var(--menu-expanded-width);

    &.collapsed {
      --menu-width: var(--menu-collapsed-width);

      .inner {
        overflow-x: hidden;
      }
    }
  }

  .inner {
    display: flex;
    flex-direction: column;

    width: 0;
    max-width: 100vw;
    height: 100%;

    overflow-y: auto;

    margin-left: -100%;

    &.sticky {
      // On large screen the menu can be always open
      @include media.min-width(large) {
        width: var(--menu-width);
        margin-left: 0;
      }
    }

    // On smaller screen the menu is open on demand
    &.open {
      width: var(--menu-width);
      margin-left: 0;
    }

    transition: margin-left var(--animation-time-normal)
        var(--menu-animation-timing-function),
      width var(--animation-time-normal) var(--menu-animation-timing-function);

    // On large screen the header is not sticky but within the content that's why we align the inner menu start
    box-sizing: border-box;

    @include media.min-width(large) {
      padding-top: var(--padding-4x);
    }
  }

  .bottom {
    position: absolute;
    right: 0;
    bottom: 64px;
    transform: rotate(-180deg);
  }

  button {
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--animation-time-long);

    padding: var(--padding-1_5x);

    @include media.min-width(large) {
      &.visible {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .expand {
    display: flex;
  }
</style>
