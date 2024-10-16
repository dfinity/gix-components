<script lang="ts">
  import { toastsStore } from "$lib/stores/toasts.store";
  import Toast from "./Toast.svelte";
  import { layoutBottomOffset } from "$lib/stores/layout.store";
  import type { ToastMsg, ToastPosition } from "$lib/types/toast";

  export let position: ToastPosition = "bottom";
  export let maxVisible: number | undefined = undefined;

  let toasts: ToastMsg[] = [];
  $: toasts = $toastsStore
    .filter(({ position: pos }) => (pos ?? "bottom") === position)
    .slice(0, maxVisible);

  let hasErrors: boolean;
  $: hasErrors =
    toasts.find(({ level }) => ["error", "warn"].includes(level)) !== undefined;
</script>

{#if toasts.length > 0}
  <div
    data-tid="toasts-component"
    class={`wrapper ${position}`}
    class:error={hasErrors}
    style={`--layout-bottom-offset: ${$layoutBottomOffset}px`}
  >
    {#each toasts as msg (msg.id)}
      <Toast {msg} />
    {/each}
  </div>
{/if}

<style lang="scss">
  @use "../styles/mixins/media";

  .wrapper {
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);

    // If a bottom sheet is displayed the toasts should have a related offset
    bottom: calc(var(--layout-bottom-offset, 0) + var(--padding-2x));

    // A little narrowwer than the section to differentiate notifications from content
    width: calc(100% - var(--padding-8x) - var(--padding-0_5x));

    display: flex;
    flex-direction: column;
    gap: var(--padding);

    z-index: var(--toast-info-z-index);

    &.error {
      z-index: var(--toast-error-z-index);
    }

    @include media.min-width(medium) {
      // A little narrowwer than the section to differentiate notifications from content
      max-width: calc(var(--section-max-width) - var(--padding-2x));
    }
  }

  .top {
    top: calc(var(--header-height) + var(--padding-3x));
    bottom: unset;

    width: calc(100% - var(--padding-6x));

    @include media.min-width(medium) {
      right: var(--padding-2x);
      left: unset;
      transform: none;

      max-width: calc(calc(var(--section-max-width) / 1.5) - var(--padding-2x));
    }
  }
</style>
