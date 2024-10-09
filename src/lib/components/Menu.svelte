<script lang="ts">
  //import MenuBackground from "./MenuBackground.svelte";
  import { layoutMenuOpen } from "$lib/stores/layout.store";
  import { handleKeyPress } from "$lib/utils/keyboard.utils";
  import IconBack from "$lib/icons/IconBack.svelte";
  import { menuCollapsed, menuStore } from "$lib/stores/menu.store";
  import { i18n } from "$lib/stores/i18n";

  export let sticky = true;

  const close = () => layoutMenuOpen.set(false);
</script>

<div role="menu" class:open={$layoutMenuOpen}>
  <!--MenuBackground>
    <slot name="logo" slot="logo" />
    <slot name="oneliner" slot="oneliner" />
  </MenuBackground-->

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
    <div class="top-logo">
      {#if !$menuCollapsed}
        <slot name="logo" />
      {/if}
    </div>

    <div class="inner2">
      <slot />
    </div>

    <div class="bottom-logo-gap"></div>

    <div class="bottom-logo">
      {#if !$menuCollapsed}
        <slot name="oneliner" />
      {/if}
    </div>
  </div>

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

    box-sizing: border-box;

    z-index: var(--menu-z-index);

    --menu-logo-height: 65px;
    --menu-stack: 1em;
    --top-logo-height: calc(
      var(--menu-logo-height) + var(--padding-4x) + var(--header-offset, 0px)
    );

    //padding-top: var(--top-logo-height);

    position: relative;

    // Shift the menu on large screen e.g. if a banner is displayed
    @include media.min-width(large) {
      --top-logo-height: calc(
        var(--menu-logo-height) + var(--padding-3x) + var(--header-offset, 0px) - var(
            --menu-selection-outer-radius
          )
      );
      padding-left: var(--padding-2x);
      // remove extra space because of menu selection touches the edge
      padding-right: 0;
    }
  }

  .inner {
    display: flex;
    flex-direction: column;

    .top-logo {
      flex-shrink: 0;
      color: var(--menu-color);
      box-sizing: border-box;
      height: var(--top-logo-height);
      margin-left: calc(-1 * var(--padding));
      padding-top: var(--menu-stack);

      @include media.min-width(large) {
        margin-left: 0;
        margin-right: 0;
        padding-top: var(--padding);
        margin-left: calc(-1 * var(--padding-2x));
      }
    }

    .inner2 {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      gap: var(--padding-0_5x);

      // More space for menu selection touches the edge;
      // otherwise the first selected menu entry would be cut off in mobile view.
      padding-top: var(--menu-selection-outer-radius);
    }

    .bottom-logo-gap {
      flex-grow: 1;
    }

    .bottom-logo {
      flex-shrink: 0;
      color: var(--menu-color);
      align-self: center;
      margin-left: calc(-1 * var(--padding));
      padding-top: var(--padding-2x);
      padding-bottom: var(--padding-3x);

      @include media.min-width(large) {
        margin-left: calc(-1 * var(--padding-2x));
      }
    }

    width: 0;
    max-width: 100vw;
    height: 100%;

    overflow-y: auto;
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
        margin-left: 0;
      }
    }

    // On smaller screen the menu is open on demand
    &.open {
      width: var(--menu-width);
      margin-left: var(--padding);
    }

    @include media.min-width(large) {
      padding-top: calc(var(--padding-4x) - var(--menu-selection-outer-radius));
    }
  }
</style>
