<script lang="ts">
  import { onDestroy } from "svelte";
  import {
    layoutBottomOffset,
    layoutContentScrollY,
  } from "$lib/stores/layout.store";
  import Header from "$lib/components/Header.svelte";

  export let back = false;

  // Same as in <Content />
  onDestroy(() => ($layoutBottomOffset = 0));
</script>

<div
  class="content"
  style={`--layout-bottom-offset: ${$layoutBottomOffset}px; --content-overflow-y: ${$layoutContentScrollY}`}
>
  <div class="start">
    <slot name="header-start" />

    <div class="scrollable-content-start">
      <slot name="start" />
    </div>
  </div>

  <div class="end">
    <Header {back} on:nnsBack>
      <slot name="header-end-title" slot="title" />

      <slot name="header-end-toolbar-end" slot="toolbar-end" />
    </Header>

    <div class="scrollable-content-end">
      <slot name="end" />
    </div>
  </div>
</div>

<style lang="scss">
  @use "../styles/mixins/layout";

  .content {
    @include layout.content;

    display: flex;
    flex-flow: row nowrap;
  }

  .start,
  .end {
    @include layout.content-offset;

    position: relative;
  }

  .start {
    min-width: var(--content-start-width);
  }

  .end {
    width: 100%;
  }

  .scrollable-content-start,
  .scrollable-content-end {
    @include layout.scrollable-content;
  }
</style>
