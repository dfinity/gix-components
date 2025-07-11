<script lang="ts">
  import { nonNullish } from "@dfinity/utils";
  import type { Snippet } from "svelte";
  import Back from "$lib/components/Back.svelte";
  import MenuButton from "$lib/components/MenuButton.svelte";
  import Toolbar from "$lib/components/Toolbar.svelte";
  import { layoutContentTopHidden } from "$lib/stores/layout.store";
  import type { OnEventCallback } from "$lib/types/event-modifiers";

  interface Props {
    title?: Snippet;
    toolbarEnd?: Snippet;
    onBack?: OnEventCallback;
  }

  let { title, toolbarEnd, onBack }: Props = $props();
</script>

<header data-tid="header-component" class:hidden={$layoutContentTopHidden}>
  <Toolbar>
    <svelte:fragment slot="start">
      {#if nonNullish(onBack)}
        <Back {onBack} />
      {:else}
        <MenuButton />
      {/if}
    </svelte:fragment>

    {@render title?.()}

    <svelte:fragment slot="end">
      {@render toolbarEnd?.()}
    </svelte:fragment>
  </Toolbar>
</header>

<style lang="scss">
  @use "../styles/mixins/media";

  header {
    --toolbar-padding: 0;
    transition: all var(--animation-time-normal) ease-in-out;

    @include media.min-width(medium) {
      --toolbar-padding: 0 var(--padding-2x);
    }
    @include media.min-width(large) {
      --toolbar-padding: 0;
    }

    &.hidden {
      opacity: 0;
      transform: translateY(-100%);
      // Reset on tablet+
      @include media.min-width(medium) {
        opacity: 1;
        transform: none;
      }
    }
  }
</style>
