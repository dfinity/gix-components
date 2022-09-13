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
          <h3 id="modalTitle"><slot name="title" /></h3>
          <button
            data-tid="close-modal"
            on:click|stopPropagation={close}
            aria-label={$i18n.core.close}
            disabled={disablePointerEvents}><IconClose /></button
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

    --modal-toolbar-height: 35px;

    background: var(--background);

    --select-color: var(--background-contrast);
    --select-border-radius: 0;

    overflow: hidden;

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
    padding: var(--padding) var(--padding-2x);

    display: grid;
    --toolbar-icon-width: calc((var(--padding) / 2) + var(--icon-width));
    grid-template-columns: var(--toolbar-icon-width) 1fr var(
        --toolbar-icon-width
      );

    z-index: var(--z-index);

    height: var(--modal-toolbar-height);

    h3 {
      @include text.clamp(1);

      font-weight: 400;
      margin-bottom: 0;
      line-height: 1.5;
      text-align: center;
      grid-column-start: 2;
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
  }

  .content {
    position: relative;

    display: flex;
    flex-direction: column;

    height: calc(100% - var(--modal-toolbar-height));
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
