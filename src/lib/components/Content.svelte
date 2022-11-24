<script lang="ts">
  import { layoutBottomOffset, layoutMenuOpen } from "$lib/stores/layout.store";
  import Toolbar from "$lib/components/Toolbar.svelte";
  import MenuButton from "$lib/components/MenuButton.svelte";
  import Back from "$lib/components/Back.svelte";
  import Backdrop from "$lib/components/Backdrop.svelte";
  import { onDestroy } from "svelte";

  export let back = false;

  // Enhance UI contrast for readability
  export let contrast = false;

  // Spread the content on the all page (full width and height) or within a "page"
  export let layout: 'stretch' | 'page' = 'stretch';

  // Observed: nested component - bottom sheet - might not call destroy when navigating route and therefore offset might not be reseted which is not the case here
  onDestroy(() => ($layoutBottomOffset = 0));
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

  <div class="scrollable-content" class:open={$layoutMenuOpen} class:no-overflow={layout === 'page'}>
    {#if $layoutMenuOpen}
      <Backdrop on:nnsClose={() => layoutMenuOpen.set(false)} />
    {/if}

    <div class:page={layout === 'page'}>
      <slot />
    </div>
  </div>
</div>

<style lang="scss">
  @use "../styles/mixins/media";
  @use "../styles/mixins/display";
  @use "../styles/mixins/interaction";

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
    padding-top: 0;

    // If a bottom sheet is displayed the content pane height should be updated accordingly
    // This to avoid the content to be presented behind the bottom sheet and
    // to display a scrollbar that ends before the bottom sheet.
    padding-bottom: var(--layout-bottom-offset, 0);

    // On small screen the menu pushes the content
    min-width: calc(100vw - var(--padding-2x));

    @include media.min-width(xlarge) {
      padding-top: var(--split-pane-content-top-offset);
      min-width: auto;
    }
  }

  .scrollable-content {
    height: 100%;

    overflow-x: hidden;
    overflow-y: auto;

    @include media.min-width(large) {
      &.no-overflow {
        overflow-y: hidden;
      }
    }
  }

  .scrollable-content {
    & > :global(div.backdrop) {
      z-index: var(--z-index);
    }
    .page {
      background: var(--focus-background);
      color: var(--focus-background-contrast);

      @include media.min-width(large) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        border-radius: var(--border-radius-2x);

        overflow-x: hidden;
        overflow-y: auto;

        width: 768px;
        height: calc(100% - var(--padding-8x));

        margin-top: var(--padding-2x);
      }
    }
  }

</style>
