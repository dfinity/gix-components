<script lang="ts">
  import SplitPane from "$lib/components/SplitPane.svelte";
  import Menu from "$lib/components/Menu.svelte";
  import type { ComponentType } from "svelte";
  import StretchPane from "$lib/components/StretchPane.svelte";

  export let layout: "split" | "stretch" = "split";

  let component: ComponentType;
  $: component = layout === "stretch" ? StretchPane : SplitPane;
</script>

<svelte:component this={component}>
  <Menu slot="menu" sticky={layout === "split"}>
    <slot name="menu-items" />
  </Menu>

  <slot />
</svelte:component>
