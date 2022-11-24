<script lang="ts">
  import { onDestroy } from "svelte";
  import { layoutContentScrollY } from "../stores/layout.store";

  // 1024 is the $breakpoint-large size.
  let innerWidth = 0;
  $: innerWidth,
    layoutContentScrollY.set(innerWidth < 1024 ? "auto" : "hidden");

  onDestroy(() => layoutContentScrollY.set("auto"));
</script>

<svelte:window bind:innerWidth />

<div class="island">
  <div class="scrollable-island">
    <slot />
  </div>
</div>

<style lang="scss">
  @use "../styles/mixins/media";

  .island {
    background: var(--focus-background);
    color: var(--focus-background-contrast);

    ::-webkit-scrollbar {
      background: var(--focus-background);
    }

    overflow: hidden;

    @include media.min-width(large) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      border-radius: var(--border-radius-2x);

      width: var(--island-max-width);
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
