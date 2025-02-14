<script lang="ts">
  import Toolbar from "$lib/components/Toolbar.svelte";
  import MenuButton from "$lib/components/MenuButton.svelte";
  import Back from "$lib/components/Back.svelte";
  import { layoutContentScrollDirection } from "$lib/stores/layout.store";

  export let back = false;

  let isScrollingDown = false;
  $: isScrollingDown = $layoutContentScrollDirection === "down";
</script>

<header data-tid="header-component" class:scrolling-down={isScrollingDown}>
  <Toolbar>
    <svelte:fragment slot="start">
      {#if back}
        <Back on:nnsBack />
      {:else}
        <MenuButton />
      {/if}
    </svelte:fragment>

    <slot name="title" />

    <slot name="toolbar-end" slot="end" />
  </Toolbar>
</header>

<style lang="scss">
  @use "../styles/mixins/media";

  header {
    --toolbar-padding: 0;
    @include media.min-width(medium) {
      --toolbar-padding: 0 var(--padding-2x);
    }
    @include media.min-width(large) {
      --toolbar-padding: 0;
    }

    &.scrolling-down {
      opacity: 0;
      transform: translateY(-100%);
      // Reset on tablet+
      @include media.min-width(medium) {
        opacity: 1;
        transform: none;
      }
    }
    transition: all var(--animation-time-normal) ease-in-out;
  }
</style>
