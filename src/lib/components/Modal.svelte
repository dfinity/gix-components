<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { createEventDispatcher } from "svelte";
  import { i18n } from "../stores/i18n";
  import IconClose from "$lib/icons/IconClose.svelte";
  import Backdrop from "$lib/components/Backdrop.svelte";

  export let visible = true;
  export let size: "small" | "big" = "big";
  export let testId: string | undefined = undefined;
  export let disablePointerEvents = false;

  let showToolbar: boolean;
  $: showToolbar = $$slots.title !== undefined;

  const dispatch = createEventDispatcher();
  const close = () => dispatch("nnsClose");
</script>

{#if visible}
  <div
    class="modal"
    transition:fade
    role="dialog"
    data-tid={testId}
    aria-labelledby={showToolbar ? "modalTitle" : undefined}
    aria-describedby="modalContent"
    on:click|stopPropagation
    on:introend
  >
    <Backdrop {disablePointerEvents} on:nnsClose />
    <div
      transition:scale={{ delay: 25, duration: 150, easing: quintOut }}
      class={`wrapper ${size}`}
    >
      {#if showToolbar}
        <div class="toolbar">
          <h2 id="modalTitle"><slot name="title" /></h2>
          <button
            data-tid="close-modal"
            on:click|stopPropagation={close}
            aria-label={$i18n.core.close}
            disabled={disablePointerEvents}><IconClose size="32px" /></button
          >
        </div>
      {/if}

      <div class="content" id="modalContent" class:small={size === "small"}>
        <slot />
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  @use "../styles/mixins/interaction";
  @use "../styles/mixins/text";
  @use "../styles/mixins/display";

  .modal {
    position: fixed;
    @include display.inset;

    z-index: var(--modal-z-index);

    @include interaction.initial;
  }

  .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;

    background: var(--background);

    --select-color: var(--background-contrast);
    --select-border-radius: 0;

    overflow: hidden;

    box-sizing: border-box;

    &.small {
      width: var(--modal-small-width);
      max-width: var(--modal-small-max-width);

      max-height: var(--modal-small-max-height);

      border-radius: var(--modal-small-border-radius);
    }

    &.big {
      width: var(--modal-big-width);
      max-width: var(--modal-big-max-width);

      height: var(--modal-big-height);

      max-height: var(--modal-big-max-height, 100%);

      @supports (-webkit-touch-callout: none) {
        max-height: -webkit-fill-available;
      }

      border-radius: var(--modal-big-border-radius);
    }
  }

  .toolbar {
    display: flex;
    justify-content: space-between;

    z-index: var(--z-index);
    padding: var(--modal-padding-y) var(--modal-padding-x) var(--padding);

    position: relative;

    h2 {
      @include text.clamp(1);
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;

      &:active,
      &:focus,
      &:hover {
        background: var(--background-shade);
        border-radius: var(--border-radius);
      }
    }

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: var(--modal-padding-x);

      width: 78px;

      border-bottom: 1px solid var(--background-contrast);
    }
  }

  .content {
    position: relative;

    display: flex;
    flex-direction: column;

    flex: 1;

    padding: var(--modal-padding-y) var(--modal-padding-x);

    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
