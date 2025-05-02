<script lang="ts">
  import { nonNullish } from "@dfinity/utils";
  import { layoutBottomOffset } from "$lib/stores/layout.store";
  import { onDestroy } from "svelte";
	import {slide} from "svelte/transition"
  import { BREAKPOINT_LARGE } from "$lib/constants/constants";

	export let transition = false;

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
</script>

<svelte:window bind:innerWidth />

<div
  transition:slide|global={{ axis: 'y', duration: transition ? 300 : 0 }}
  role="dialog"
  data-tid="bottom-sheet"
  bind:clientHeight={height}
>
	<span>
		<slot name="header" />
	</span>

	<span>
		<slot />
	</span>

  <span>
		<slot name="footer" />
	</span>
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

    max-height: 90vh;
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
