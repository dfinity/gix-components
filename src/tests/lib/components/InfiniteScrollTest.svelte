<script lang="ts">
  import InfiniteScroll from "$lib/components/InfiniteScroll.svelte";

  export let elements: number[];
  export let disabled = false;
  export let spy: () => void;
</script>

<InfiniteScroll onIntersect={spy} {disabled}>
  {#each elements as _element, i}
    <div>Test {i}</div>
  {/each}
</InfiniteScroll>
