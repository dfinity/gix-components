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
  src={logoOnChain}
  role="presentation"
  alt="100% on-chain Internet Computer logo"
  loading="lazy"
/>
