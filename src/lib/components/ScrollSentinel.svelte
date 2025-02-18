<script lang="ts">
  import { layoutContentTopHidden } from "$lib/stores/layout.store";
  import { onMount } from "svelte";

  // The ScrollSentinel component should be placed right before the content
  // inside the scrollable container.
  export let scrollContainer: HTMLElement;

  // To observe when the top leaves the view
  let element: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => layoutContentTopHidden.set(!entry.isIntersecting),
      { root: scrollContainer, threshold: 0 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  });
</script>

<div data-tid="sentinel" class="sentinel" bind:this={element}></div>

<style lang="scss">
  .sentinel {
    width: 0;
    height: 0;
    opacity: 0;
    visibility: hidden;
  }
</style>
