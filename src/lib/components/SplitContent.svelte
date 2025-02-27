<script lang="ts">
  import { onDestroy } from "svelte";
  import {
    layoutBottomOffset,
    layoutContentScrollY,
    layoutMenuOpen,
  } from "$lib/stores/layout.store";
  import Header from "$lib/components/Header.svelte";
  import ContentBackdrop from "$lib/components/ContentBackdrop.svelte";
  import ScrollSentinel from "$lib/components/ScrollSentinel.svelte";

  export let back = false;
  export const resetScrollPosition = () => {
    if (scrollableElement) {
      scrollableElement.scrollTop = 0;
    }
  };

  let scrollableElement: HTMLElement | undefined;

  // Same as in <Content />
  onDestroy(() => ($layoutBottomOffset = 0));
</script>

<div
  class="content"
  class:open={$layoutMenuOpen}
  style={`--layout-bottom-offset: ${$layoutBottomOffset}px; --content-overflow-y: ${$layoutContentScrollY}`}
>
  <div class="start">
    <div class="scrollable-content-start">
      <ContentBackdrop />
      <slot name="start" />
    </div>
  </div>

  <div class="end">
    <Header {back} on:nnsBack>
      <slot name="title" slot="title" />

      <slot name="toolbar-end" slot="toolbar-end" />
    </Header>

    <div class="scrollable-content-end" bind:this={scrollableElement}>
      <ContentBackdrop />

      <ScrollSentinel scrollContainer={scrollableElement} />
      <slot name="end" />
    </div>
  </div>
</div>

<style lang="scss">
  @use "../styles/mixins/layout";
  @use "../styles/mixins/media";

  .content {
    display: flex;
    flex-flow: column;

    @include layout.content;

    @include media.min-width(large) {
      flex-flow: row nowrap;
      // remove extra space because of menu selection touches the edge
      margin-left: 0;
    }

    // Mobile visual border to match the menu selection
    &.open {
      box-shadow: var(--menu-selection-content-box-shadow);
      // remove extra space because of menu selection touches the edge (when open)
      margin-left: 0;
      border-top-left-radius: var(--border-radius-2x);
    }
  }

  .start,
  .end {
    position: relative;
    box-sizing: border-box;
    @include layout.content-offset;
  }

  .start {
    min-height: var(--content-start-height);
    color: var(--content-start-color);

    @include media.min-width(large) {
      display: block;
      width: var(--content-start-width);
      background: var(--content-start-background);
    }
  }

  .end {
    width: 100%;
    height: calc(100% - var(--content-start-height));

    @include media.min-width(large) {
      height: 100%;
      width: calc(100% - var(--content-start-width));
    }
  }

  .scrollable-content-start,
  .scrollable-content-end {
    @include layout.scrollable-content;
  }

  .scrollable-content-start {
    overflow-y: hidden;

    @include media.min-width(large) {
      overflow-y: auto;
    }
  }
</style>
