<script lang="ts">
  import { onDestroy, type Snippet } from "svelte";
  import ContentBackdrop from "$lib/components/ContentBackdrop.svelte";
  import Header from "$lib/components/Header.svelte";
  import ScrollSentinel from "$lib/components/ScrollSentinel.svelte";
  import {
    layoutBottomOffset,
    layoutContentScrollY,
    layoutMenuOpen,
  } from "$lib/stores/layout.store";
  import type { OnEventCallback } from "$lib/types/event-modifiers";

  interface Props {
    title?: Snippet;
    toolbarEnd?: Snippet;
    children: Snippet;
    onBack?: OnEventCallback;
  }

  let { title, toolbarEnd, children, onBack }: Props = $props();

  // Observed: nested component - bottom sheet - might not call destroy when navigating route and therefore offset might not be reseted which is not the case here
  onDestroy(() => ($layoutBottomOffset = 0));

  let scrollContainer = $state<HTMLDivElement | undefined>();
</script>

<div
  class="content"
  class:open={$layoutMenuOpen}
  style={`--layout-bottom-offset: calc(${$layoutBottomOffset}px - var(--content-margin)); --content-overflow-y: ${$layoutContentScrollY}`}
>
  <Header {title} {toolbarEnd} {onBack} />

  <div
    class="scrollable-content"
    class:open={$layoutMenuOpen}
    bind:this={scrollContainer}
  >
    <ContentBackdrop />
    <ScrollSentinel {scrollContainer} />
    {@render children()}
  </div>
</div>

<style lang="scss">
  @use "../styles/mixins/media";
  @use "../styles/mixins/layout";

  .content {
    @include layout.content;
    @include layout.content-offset;

    @include media.min-width(large) {
      box-shadow: var(--menu-selection-content-box-shadow);
      // Remove extra space because of menu selection touches the edge
      margin-left: 0;
    }

    // Mobile visual border to match the menu selection
    &.open {
      box-shadow: var(--menu-selection-content-box-shadow);
      // Remove extra space because of menu selection touches the edge (when open)
      margin-left: 0;
      border-top-left-radius: var(--border-radius-2x);
    }
  }

  .scrollable-content {
    @include layout.scrollable-content;
  }
</style>
