<script lang="ts">
  import { themeStore } from "$lib/stores/theme.store";
  import { layoutMenuOpen } from "$lib/stores/layout.store";
  import { nonNullish } from "@dfinity/utils";
  import { fade } from "svelte/transition";
</script>

<div class:open={$layoutMenuOpen} class="menu-background">
  <div class="logo-nns">
    <slot name="logo" />
  </div>

  {#if nonNullish($themeStore)}
    <div in:fade class="bottom-logo">
      <slot name="oneliner" />
    </div>
  {/if}
</div>

<style lang="scss">
  @use "../styles/mixins/media";
  @use "../styles/mixins/display";

  .menu-background {
    position: absolute;
    @include display.inset;

    pointer-events: none;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    overflow: hidden;

    transform: translate(-100%, 0);

    transition: transform var(--animation-time-normal) ease-out;

    // On large screen the menu is always open
    @include media.min-width(large) {
      transform: translate(0, 0);
    }

    // On smaller screen the menu is open on demand
    &.open {
      transform: translate(0, 0);
    }
  }

  .logo-nns {
    color: var(--menu-color);
    margin-top: var(--menu-stack);
    width: 100%;
    @include media.min-width(large) {
      padding-top: var(--padding);
    }
  }

  .bottom-logo {
    // We do not want to display the logo "on chain" behind the menu items
    display: none;
    margin-bottom: var(--padding-3x);

    color: var(--menu-color);
    z-index: var(--menu-z-index);
    text-align: center;

    // 654px is an empirical value
    @media (min-height: 654px) {
      display: flex;
    }
  }
</style>
