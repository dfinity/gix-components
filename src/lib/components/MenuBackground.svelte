<script lang="ts">
  import backgroundDark from "$lib/assets/menu-bg-dark.png";
  import backgroundLight from "$lib/assets/menu-bg-light.png";
  import { themeStore } from "$lib/stores/theme.store";
  import { Theme } from "$lib/types/theme";
  import { layoutMenuOpen } from "$lib/stores/layout.store";
  import { nonNullish } from "@dfinity/utils";
  import { fade } from "svelte/transition";

  let background: string;
  $: background =
    $themeStore === Theme.LIGHT ? backgroundLight : backgroundDark;
</script>

<div class:open={$layoutMenuOpen} class="menu-background">
  <div class="logo">
    <slot name="logo" />
  </div>

  {#if nonNullish($themeStore)}
    <div in:fade class="on-chain">
      <slot name="oneliner" />
    </div>

    <img
      data-tid="menu-background"
      class="background"
      src={background}
      role="presentation"
      alt=""
      loading="lazy"
    />
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

    // On large screen the menu is always open
    @include media.min-width(large) {
      transform: translate(0, 0);
    }

    // On smaller screen the menu is open on demand
    &.open {
      transform: translate(0, 0);
    }

    transition: transform var(--animation-time-normal) ease-out;
  }

  .background {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .logo {
    @include media.min-width(large) {
      padding-top: var(--padding);
    }
  }

  .on-chain {
    // We do not want to display the logo "on chain" behind the menu items
    display: none;
    padding: 0 0 var(--padding-3x);

    z-index: var(--menu-z-index);

    // 654px is an empirical value
    @media (min-height: 654px) {
      display: block;
    }
  }
</style>
