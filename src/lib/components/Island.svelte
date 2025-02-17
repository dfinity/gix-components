<script lang="ts">
  import { onDestroy } from "svelte";
  import {
    layoutContentScrollTop,
    layoutContentScrollY,
  } from "$lib/stores/layout.store";
  import { BREAKPOINT_LARGE } from "$lib/constants/constants";

  export let testId: string | undefined = undefined;

  let innerWidth = 0;
  $: innerWidth,
    layoutContentScrollY.set(innerWidth < BREAKPOINT_LARGE ? "auto" : "hidden");

  onDestroy(() => layoutContentScrollY.set("auto"));

  const handleScroll = (event: Event) => {
    const target = event.target as HTMLElement;
    layoutContentScrollTop.updateScrollTop(target.scrollTop);
  };
</script>

<svelte:window bind:innerWidth />

<div class="island" data-tid={testId}>
  <div class="scrollable-island" on:scroll={handleScroll}>
    <slot />
  </div>
</div>

<style lang="scss">
  @use "../styles/mixins/media";
  @use "../styles/mixins/content";

  .island {
    @include content.island;

    height: 100%;

    overflow: hidden;

    ::-webkit-scrollbar {
      @include content.island;
    }

    @include media.min-width(large) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      border-radius: var(--border-radius-2x);

      width: var(--island-width);
      max-width: var(--island-max-width);
      height: calc(100% - var(--header-height) - var(--padding-2x));

      margin-top: var(--padding-2x);
    }
  }

  .scrollable-island {
    height: 100%;

    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
