<script lang="ts">
  import { nonNullish } from "@dfinity/utils";
  import { layoutBottomOffset } from "$lib/stores/layout.store";
  import { onDestroy } from "svelte";
	import { slide, type SlideParams, type TransitionConfig } from "svelte/transition";
  import { BREAKPOINT_LARGE } from "$lib/constants/constants";

  export let transition = false;

	let hasHeaderSlot: boolean;
	$: hasHeaderSlot = nonNullish($$slots['header']);
	let hasFooterSlot: boolean;
	$: hasFooterSlot = nonNullish($$slots['footer']);

  onDestroy(() => ($layoutBottomOffset = 0));

  // See also the CSS code of this component. On large screen the bottom sheet is not sticky.
  const updateBottomOffset = () => {
    if (nonNullish(innerWidth) && nonNullish(height)) {
      $layoutBottomOffset = innerWidth < BREAKPOINT_LARGE ? height : 0;
    }
  };

  let height: number | undefined = undefined;
  let innerWidth: number | undefined = undefined;
  $: height, innerWidth, updateBottomOffset();

	let transitionFn: (node: Element,
										 params?: SlideParams | undefined) => TransitionConfig;
	$: transitionFn = transition ? slide : () => ({});
</script>

<svelte:window bind:innerWidth />

<div
  transition:transitionFn|global={{ axis: 'y', duration: 300 }}
  role="dialog"
  data-tid="bottom-sheet"
  bind:clientHeight={height}
>
	{#if hasHeaderSlot}
		<span>
			<slot name="header" />
		</span>
	{/if}

  <span>
    <slot />
  </span>

	{#if hasFooterSlot}
		<span>
			<slot name="footer" />
		</span>
	{/if}
</div>

<style lang="scss">
  @use "../styles/mixins/media";

  div {
    span {
      display: flex;

      &:nth-child(2) {
        overflow-y: auto;
        flex-direction: inherit;
        padding-top: 0;
      }

      &:last-of-type {
        border-top: 1px solid var(--bottom-sheet-border-color);
      }
    }

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;

    max-height: 90dvh;
    overflow-y: auto;

    background: var(--card-background);
    box-shadow: var(--bottom-sheet-box-shadow);

    z-index: var(--bottom-sheet-z-index);

    padding-bottom: env(safe-area-inset-bottom);

    border-top-left-radius: var(--border-radius-2x);
    border-top-right-radius: var(--border-radius-2x);

    @include media.min-width(large) {
      position: relative;

      background: transparent;
      box-shadow: none;

      z-index: auto;

      padding-bottom: 0;

      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
</style>
