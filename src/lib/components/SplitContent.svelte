<script lang="ts">
  import { onDestroy } from "svelte";
  import {
    layoutBottomOffset,
    layoutContentScrollY,
  } from "$lib/stores/layout.store";
  import Header from "$lib/components/Header.svelte";
  import ContentBackdrop from "$lib/components/ContentBackdrop.svelte";

  export let back = false;

  // Same as in <Content />
  onDestroy(() => ($layoutBottomOffset = 0));
</script>

<div
  class="content"
  style={`--layout-bottom-offset: ${$layoutBottomOffset}px; --content-overflow-y: ${$layoutContentScrollY}`}
>
  <div class="start">
    <ContentBackdrop />

    <div class="scrollable-content-start">
      <slot name="start" />
    </div>
  </div>

  <div class="end">
    <Header {back} on:nnsBack>
      <slot name="title" slot="title" />

      <slot name="toolbar-end" slot="toolbar-end" />
    </Header>

    <div class="scrollable-content-end">
      <ContentBackdrop />

      <slot name="end" />
    </div>
  </div>
</div>

<style lang="scss">
  @use "../styles/mixins/layout";
  @use "../styles/mixins/media";

  .content {
    @include layout.content;

    display: flex;
    flex-flow: column;

    @include media.min-width(large) {
      flex-flow: row nowrap;
    }
  }

  .start,
  .end {
    @include layout.content-offset;
    position: relative;
    box-sizing: border-box;
  }

  .start {
    min-height: var(--content-start-height);

    @include media.min-width(large) {
      display: block;
      min-width: var(--content-start-width);
    }
  }

  .end {
    width: 100%;
    height: calc(100% - var(--content-start-height));

    @include media.min-width(large) {
      height: 100%;
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
