<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import {
    layoutContentScrollY,
    layoutContentTopHidden,
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

  let container: HTMLDivElement;
  // To observe when the top leaves the view
  let sentinel: HTMLDivElement;
  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => layoutContentTopHidden.set(!entry.isIntersecting),
      { root: container, threshold: 0 },
    );
    observer.observe(sentinel as HTMLDivElement);
    return () => observer.disconnect();
  });
</script>

<svelte:window bind:innerWidth />

<div class="island" data-tid={testId}>
  <div class="scrollable-island" bind:this={container}>
    <div bind:this={sentinel} class="sentinel"></div>
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
