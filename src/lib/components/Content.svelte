<script lang="ts">
  import {
    layoutBottomOffset,
    layoutContentScrollY,
    layoutMenuOpen,
  } from "$lib/stores/layout.store";
  import { onDestroy } from "svelte";
  import ContentBackdrop from "$lib/components/ContentBackdrop.svelte";
  import Header from "$lib/components/Header.svelte";

  export let back = false;

  // Observed: nested component - bottom sheet - might not call destroy when navigating route and therefore offset might not be reseted which is not the case here
  onDestroy(() => ($layoutBottomOffset = 0));
</script>

<div
  class="content"
  style={`--layout-bottom-offset: calc(${$layoutBottomOffset}px - var(--content-margin)); --content-overflow-y: ${$layoutContentScrollY}`}
>
  <Header {back} on:nnsBack>
    <slot name="title" slot="title" />

    <slot name="toolbar-end" slot="toolbar-end" />
  </Header>

  <div class="scrollable-content" class:open={$layoutMenuOpen}>
    <ContentBackdrop />

    <slot />
  </div>
</div>

<style lang="scss">
  @use "../styles/mixins/media";
  @use "../styles/mixins/layout";

  .content {
    @include layout.content;
    @include layout.content-offset;
  }

  .scrollable-content {
    @include layout.scrollable-content;
  }
</style>
