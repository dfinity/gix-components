<script lang="ts">
  import logoNNS from "$lib/assets/logo-nns.svg";
  import logoOnChainDark from "$lib/assets/logo-onchain-dark.svg";
  import logoOnChainLight from "$lib/assets/logo-onchain-light.svg";
  import backgroundDark from "$lib/assets/menu-bg-dark.png";
  import backgroundLight from "$lib/assets/menu-bg-light.png";
  import { themeStore } from "$lib/stores/theme.store";
  import { Theme } from "$lib/types/theme";
  import { layoutMenuOpen } from "$lib/stores/layout.store";
  import { nonNullish } from "@dfinity/utils";

  let logoOnChain: string;
  $: logoOnChain =
    $themeStore === Theme.LIGHT ? logoOnChainLight : logoOnChainDark;

  let background: string;
  $: background =
    $themeStore === Theme.LIGHT ? backgroundLight : backgroundDark;
</script>

<div class:open={$layoutMenuOpen}>
  <img
    class="logo-nns"
    src={logoNNS}
    role="presentation"
    alt="Network Nervous System logo"
    loading="lazy"
  />

  {#if nonNullish($themeStore)}
    <img
      class="on-chain"
      src={logoOnChain}
      role="presentation"
      alt="100% on-chain Internet Computer logo"
      loading="lazy"
    />

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

  div {
    position: absolute;
    @include display.inset;

    pointer-events: none;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    overflow: hidden;

    transform: translate(-100%, 0);

    // On xlarge screen the menu is always open
    @include media.min-width(xlarge) {
      transform: translate(0, 0);
    }

    // On smaller screen the menu is open on demand
    &.open {
      transform: translate(0, 0);
    }

    transition: transform var(--animation-time-normal) ease-out;
  }

  .logo-nns {
    height: var(--menu-logo-height);

    @include media.min-width(xlarge) {
      padding-top: var(--padding);
    }
  }

  .on-chain {
    // We do not want to display the logo "on chain" behind the menu items
    display: none;
    padding: 0 0 var(--padding-3x);

    z-index: var(--menu-z-index);

    @media (min-height: 654px) {
      display: block;
    }
  }

  .background {
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>
