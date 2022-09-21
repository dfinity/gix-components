<script lang="ts">
  import { toastsStore } from "$lib/stores/toasts.store";
  import Toast from "./Toast.svelte";
  import { layoutBottomOffset } from "$lib/stores/layout.store";

  let hasErrors: boolean;
  $: hasErrors = $toastsStore?.find(({ level }) =>
    ["error", "warn"].includes(level)
  );
</script>

{#if $toastsStore.length > 0}
  <div
    class="wrapper"
    class:error={hasErrors}
    style={`--layout-bottom-offset: ${$layoutBottomOffset}px`}
  >
    {#each $toastsStore as msg (msg.id)}
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

    @include media.min-width(large) {
      // A little narrowwer than the section to differentiate notifications from content
      max-width: calc(var(--section-max-width) - var(--padding-2x));
    }
  }
</style>
