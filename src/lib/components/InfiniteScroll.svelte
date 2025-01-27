<script lang="ts">
  import {
    afterUpdate,
    beforeUpdate,
    createEventDispatcher,
    onDestroy,
  } from "svelte";
  import { isNullish } from "@dfinity/utils";

  export let layout: "list" | "grid" = "list";
  export let disabled = false;
  export let testId: string | undefined = undefined;

  // IntersectionObserverInit is not recognized by the linter
  // eslint-disable-next-line no-undef
  export let options: IntersectionObserverInit = {
    rootMargin: "300px",
    threshold: 0,
  };

  let intersectionTarget: HTMLDivElement | undefined;

  const dispatch = createEventDispatcher();

  const onIntersection = (entries: IntersectionObserverEntry[]) => {
    const intersecting: IntersectionObserverEntry | undefined = entries.find(
      ({ isIntersecting }: IntersectionObserverEntry) => isIntersecting,
    );

    if (isNullish(intersecting)) {
      return;
    }

    dispatch("nnsIntersect");
  };

  const observer: IntersectionObserver = new IntersectionObserver(
    onIntersection,
    options,
  );

  // Svelte workaround: beforeUpdate is called twice when bindings are used -> https://github.com/sveltejs/svelte/issues/6016
  let skipContainerNextUpdate = false;

  // We disconnect previous observer before any update. We do want to trigger an intersection in case of layout shifting.
  beforeUpdate(() => {
    if (!skipContainerNextUpdate) {
      observer.disconnect();
    }

    skipContainerNextUpdate = isNullish(intersectionTarget);
  });

  afterUpdate(() => {
    // The DOM has been updated. We reset the observer to the current last HTML element of the infinite list.

    // If no element to observe
    if (isNullish(intersectionTarget)) {
      return;
    }

    // If the infinite scroll is disabled, no observation should happen
    if (disabled) {
      return;
    }

    observer.observe(intersectionTarget);
  });

  onDestroy(() => observer.disconnect());
</script>

<ul class:card-grid={layout === "grid"} data-tid={testId}>
  <slot />
</ul>

<div bind:this={intersectionTarget} class="intersection-observer-target"></div>

<style lang="scss">
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .intersection-observer-target {
    width: 0;
    height: 0;
    opacity: 0;
    visibility: hidden;
  }
</style>
