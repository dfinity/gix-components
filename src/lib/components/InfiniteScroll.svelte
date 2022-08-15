<script lang="ts">
  import { afterUpdate, createEventDispatcher, onDestroy } from "svelte";
  import {
    INFINITE_SCROLL_OFFSET,
    DEFAULT_LIST_PAGINATION_LIMIT,
  } from "$lib/constants/constants";

  export let pageLimit: number = DEFAULT_LIST_PAGINATION_LIMIT;

  // IntersectionObserverInit is not recognized by the linter
  // eslint-disable-next-line no-undef
  export let options: IntersectionObserverInit = {
    rootMargin: "300px",
    threshold: 0,
  };

  let container: HTMLUListElement;

  const dispatch = createEventDispatcher();

  const onIntersection = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const intersecting: IntersectionObserverEntry | undefined = entries.find(
      ({ isIntersecting }: IntersectionObserverEntry) => isIntersecting
    );

    if (intersecting === undefined) {
      return;
    }

    // We can disconnect the observer. We have detected an intersection and consumer is going to fetch new elements.
    observer.disconnect();

    dispatch("nnsIntersect");
  };

  const observer: IntersectionObserver = new IntersectionObserver(
    onIntersection,
    options
  );

  afterUpdate(() => {
    // The DOM has been updated. We reset the observer to the current last HTML element of the infinite list.

    // We disconnect previous observer first. We do want to observe multiple elements.
    observer.disconnect();

    if (container.children.length === 0) {
      return;
    }

    const pageIndex: number = container.children.length / pageLimit - 1;
    // If the pageIndex is not an integer the all page was not fetched - e.g. 50 elements instead of 100 - therefore there is no more elements to fetch
    if (!Number.isInteger(pageIndex)) {
      return;
    }

    /**
     * The infinite scroll observe an element that finds place after x % of last page.
     *
     * For example given following list of elements:
     *
     * [0-100]
     * [101-200]
     *
     * If ratio is set to `0.2`, the observer observes 20% of the last page aka element at position 120.
     *
     * [0-100]
     * [101-200]
     * [201-300]
     *
     * Infinite scroll observe element 220.
     *
     * [0-100]
     * [101-200]
     * [201-300]
     * [301-345]
     *
     * Infinite scroll does not observe because all data are fetched.
     */
    const element: Element | undefined = Array.from(container.children)[
      pageIndex * pageLimit + Math.round(pageLimit * INFINITE_SCROLL_OFFSET)
    ];

    if (element === undefined) {
      return;
    }

    observer.observe(element);
  });

  onDestroy(() => observer.disconnect());
</script>

<ul bind:this={container}>
  <slot />
</ul>

<style lang="scss">
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
