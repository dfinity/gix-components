<!-- https://github.com/papyrs/papyrs/blob/main/src/lib/components/ui/Popover.svelte -->
<script lang="ts">
  import { quintOut } from "svelte/easing";
  import { fade, scale } from "svelte/transition";
  import Backdrop from "./Backdrop.svelte";
  import IconClose from "$lib/icons/IconClose.svelte";
  import { i18n } from "$lib/stores/i18n";

  export let anchor: HTMLElement | undefined = undefined;
  export let visible = false;
  export let direction: "ltr" | "rtl" = "ltr";
  export let closeButton = false;
  export let invisibleBackdrop = false;
  export let testId = "gix-cmp-popover-component";

  let bottom: number;
  let left: number;
  let right: number;
  const initPosition = () =>
    ({ bottom, left, right } = anchor
      ? anchor.getBoundingClientRect()
      : { bottom: 0, left: 0, right: 0 });
  $: (anchor, visible, initPosition());
  const close = () => (visible = false);
</script>

<svelte:window on:resize={initPosition} />

{#if visible}
  <div
    style="--popover-top: {`${bottom}px`}; --popover-left: {`${left}px`}; --popover-right: {`${
      window.innerWidth - right
    }px`}"
    class="popover"
    aria-orientation="vertical"
    data-tid={testId}
    role="menu"
    tabindex="-1"
    on:click
    on:keypress
    transition:fade|global
  >
    <Backdrop
      invisible={invisibleBackdrop}
      on:nnsClose={() => (visible = false)}
    />
    <div
      class="wrapper"
      class:rtl={direction === "rtl"}
      class:with-border={invisibleBackdrop}
      transition:scale|global={{ delay: 25, duration: 150, easing: quintOut }}
    >
      {#if closeButton}
        <button
          class="close icon-only"
          aria-label={$i18n.core.close}
          on:click|stopPropagation={close}><IconClose /></button
        >
      {/if}

      <div class="popover-content" data-tid="popover-content">
        <slot />
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  @use "../styles/mixins/display";

  .popover {
    position: fixed;
    @include display.inset;

    z-index: var(--overlay-z-index);
  }

  .wrapper {
    cursor: initial;

    // position
    position: absolute;
    top: calc(var(--popover-top) + var(--padding));
    left: var(--popover-left);

    // size
    --size: min(calc(20 * var(--padding)), calc(100vw - var(--padding)));

    min-width: var(--size);
    // limited by `100vw - right padding`
    max-width: calc(100vw - var(--padding));

    max-height: calc(
      var(--full-vh, 100vh) - var(--popover-top) - calc(6 * var(--padding))
    );

    width: fit-content;
    height: auto;

    padding: var(--padding-2x);
    display: flex;
    flex-direction: column;

    background-color: var(--dropdown-background);
    color: var(--background-contrast);

    border-radius: var(--border-radius);

    @supports (height: 100dvh) {
      --full-vh: 100dvh;
    }

    &.rtl {
      left: auto;
      right: var(--popover-right);
    }

    &.with-border {
      border: var(--dropdown-border-size) solid var(--dropdown-border-color);
    }
  }

  .close {
    align-self: flex-end;
  }

  .popover-content {
    overflow-y: auto;
  }
</style>
