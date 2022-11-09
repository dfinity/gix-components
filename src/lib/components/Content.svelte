<script lang="ts">
  import { layoutBottomOffset } from "$lib/stores/layout.store";
  import Toolbar from "$lib/components/Toolbar.svelte";
  import MenuButton from "$lib/components/MenuButton.svelte";
  import Back from "$lib/components/Back.svelte";

  export let back = false;

  // Enhance UI contrast for readability
  export let contrast = false;
</script>

<div
  class="content"
  style={`--layout-bottom-offset: ${$layoutBottomOffset}px`}
  class:contrast
>
  <header>
    <Toolbar>
      <svelte:fragment slot="start">
        {#if back}
          <Back slot="back" on:nnsBack />
        {:else}
          <MenuButton />
        {/if}
      </svelte:fragment>

      <slot name="title" />

      <slot name="toolbar-end" slot="end" />
    </Toolbar>
  </header>

  <div class="scrollable-content">
    <slot />
  </div>
</div>

<style lang="scss">
  @use "../styles/mixins/media";
  @use "../styles/mixins/display";

  .content {
    position: relative;
    width: 100%;

    background: var(--content-background);
    color: var(--content-color);
    box-shadow: var(--content-box-shadow);

    &.contrast {
      background: var(--content-contrast-background);
      color: var(--content-contrast-color);
    }

    transition: background var(--animation-time-normal)
      cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    overflow: hidden;
    border-radius: var(--border-radius-2x);

    box-sizing: border-box;
    margin: var(--padding);
    padding-top: var(--split-pane-content-top-offset);

    // If a bottom sheet is displayed the content pane height should be updated accordingly
    // This to avoid the content to be presented behind the bottom sheet and
    // to display a scrollbar that ends before the bottom sheet.
    padding-bottom: var(--layout-bottom-offset, 0);

    // On small screen the menu pushes the content
    min-width: calc(100vw - var(--padding-2x));

    @include media.min-width(xlarge) {
      min-width: auto;
    }
  }

  .scrollable-content {
    height: 100%;

    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
