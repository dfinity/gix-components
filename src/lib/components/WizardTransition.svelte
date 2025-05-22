<script lang="ts">
  import { fly } from "svelte/transition";

  // Instead of a number an object is used to make svelte notice any updates need rerender
  export let transition: { diff: number } = { diff: 0 };
  const DEFAULT_OFFSET = 200;
  const ANIMATION_DURATION = 200;
  let absolutOffset = DEFAULT_OFFSET;
  let slideOffset: number | undefined;

  $: slideOffset =
    transition.diff === 0
      ? 0
      : transition.diff > 0
        ? absolutOffset
        : -absolutOffset;
</script>

{#key transition}
  <div
    bind:clientWidth={absolutOffset}
    in:fly|global={{ x: slideOffset, duration: ANIMATION_DURATION }}
    class="transition"
  >
    <slot />
  </div>
{/key}

<style lang="scss">
  div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
