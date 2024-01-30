<!-- https://github.com/papyrs/papyrs/blob/main/src/lib/components/ui/Popover.svelte -->
<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { i18n } from "$lib/stores/i18n";
  import Backdrop from "./Backdrop.svelte";
  import IconClose from "$lib/icons/IconClose.svelte";

  export let anchor: HTMLElement | undefined = undefined;
  export let visible = false;
  export let direction: "ltr" | "rtl" = "ltr";
  export let closeButton = false;
  export let noMaxWidth = false;

  let bottom: number;
  let left: number;
  let right: number;
  const initPosition = () =>
    ({ bottom, left, right } = anchor
      ? anchor.getBoundingClientRect()
      : { bottom: 0, left: 0, right: 0 });
  $: anchor, visible, initPosition();
  const close = () => (visible = false);
</script>

<svelte:window on:resize={initPosition} />

{#if visible}
  <div
    role="menu"
    aria-orientation="vertical"
    transition:fade|global
    class="popover"
    class:noMaxWidth
    tabindex="-1"
    style="--popover-top: {`${bottom}px`}; --popover-left: {`${left}px`}; --popover-right: {`${
      window.innerWidth - right
    }px`}"
    on:click|stopPropagation
    on:keypress|stopPropagation
  >
    <Backdrop on:nnsClose={() => (visible = false)} />
    <div
      transition:scale|global={{ delay: 25, duration: 150, easing: quintOut }}
      class="wrapper"
      class:rtl={direction === "rtl"}
    >
      {#if closeButton}
        <button
          on:click|stopPropagation={close}
          aria-label={$i18n.core.close}
          class="close icon-only"><IconClose /></button
        >
      {/if}

      <slot />
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

    &.rtl {
      left: auto;
      right: var(--popover-right);
    }

    // size
    --size: min(calc(20 * var(--padding)), calc(100vw - var(--padding)));

    min-width: var(--size);
    max-width: var(--size);

    width: fit-content;
    height: auto;

    padding: var(--padding-2x);
    display: flex;
    flex-direction: column;

    background-color: var(--background);
    color: var(--background-contrast);

    border-radius: var(--border-radius);

    box-shadow: var(--overlay-box-shadow);

    &.noMaxWidth {
      // 100vw - right padding
      max-width: calc(100vw - var(--padding));
    }
  }

  .close {
    align-self: flex-end;
  }
</style>
