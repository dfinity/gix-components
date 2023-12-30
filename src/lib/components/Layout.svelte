<script lang="ts">
  import SplitPane from "$lib/components/SplitPane.svelte";
  import Menu from "$lib/components/Menu.svelte";
  import type { ComponentType } from "svelte";
  import StretchPane from "$lib/components/StretchPane.svelte";
  import LogoNNS from "$lib/components/LogoNNS.svelte";
  import LogoOnChain from "$lib/components/LogoOnChain.svelte";

  export let layout: "split" | "stretch" = "split";

  let component: ComponentType;
  $: component = layout === "stretch" ? StretchPane : SplitPane;

  $: console.log($$slots["menu-logo"]);
</script>

<svelte:component this={component}>
  <Menu slot="menu" sticky={layout === "split"}>
    <slot name="menu-logo" slot="logo">
      <LogoNNS />
    </slot>
    <slot name="menu-oneliner" slot="oneliner">
      <LogoOnChain />
    </slot>
    <slot name="menu-items" />
  </Menu>

  <slot />
</svelte:component>
