<script lang="ts">
  import { layoutContentTopHidden } from "$lib/stores/layout.store";
  import { onMount, tick } from "svelte";
  import { isNullish, nonNullish } from "@dfinity/utils";

  // The ScrollSentinel component should be placed right before the content
  // inside the scrollable container.

  interface Props {
    scrollContainer: HTMLElement;
  }

  let { scrollContainer }: Props = $props();

  // To observe when the top leaves the view
  let element = $state<HTMLElement | undefined>();

  onMount(() => {
    let observer: IntersectionObserver | undefined = undefined;

    const setObserver = async () => {
      await tick(); // wait for DOM + bind:this to complete

      if (isNullish(element)) {
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => layoutContentTopHidden.set(!entry.isIntersecting),
        { root: scrollContainer, threshold: 0 },
      );

      observer.observe(element);
    };

    setObserver();

    return () => observer?.disconnect();
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
