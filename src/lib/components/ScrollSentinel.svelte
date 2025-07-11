<script lang="ts">
  import { isNullish } from "@dfinity/utils";
  import { layoutContentTopHidden } from "$lib/stores/layout.store";

  // The ScrollSentinel component should be placed right before the content
  // inside the scrollable container.

  interface Props {
    scrollContainer: HTMLElement;
  }

  let { scrollContainer }: Props = $props();

  // To observe when the top leaves the view
  let element = $state<HTMLElement | undefined>();

  const observer = new IntersectionObserver(
    ([entry]) => layoutContentTopHidden.set(!entry.isIntersecting),
    { root: scrollContainer, threshold: 0 },
  );

  // We disconnect previous observer before any update.
  $effect.pre(() => {
    observer.disconnect();
  });

  $effect(() => {
    if (isNullish(element)) {
      return;
    }

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
