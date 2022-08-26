<script lang="ts">
  import InfiniteScroll from "$lib/components/InfiniteScroll.svelte";

  export let elements: number[];
  export let disabled: boolean = false;
  export let spy: () => void;
</script>

<InfiniteScroll on:nnsIntersect={spy} {disabled}>
  {#each elements as element, i}
    <div>Test {i}</div>
  {/each}
</InfiniteScroll>
