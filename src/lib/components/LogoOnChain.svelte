<script lang="ts">
  import { themeStore } from "$lib/stores/theme.store";
  import { Theme } from "$lib/types/theme";
  import logoOnChainLight from "$lib/assets/logo-onchain-light.svg";
  import logoOnChainDark from "$lib/assets/logo-onchain-dark.svg";

  let logoOnChain: string;
  $: logoOnChain =
    $themeStore === Theme.LIGHT ? logoOnChainLight : logoOnChainDark;
</script>

<img
  class="on-chain"
  src={logoOnChain}
  role="presentation"
  alt="100% on-chain Internet Computer logo"
  loading="lazy"
/>

<style lang="scss">
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
