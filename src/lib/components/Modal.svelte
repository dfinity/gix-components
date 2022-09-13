<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { createEventDispatcher } from "svelte";
  import { i18n } from "../stores/i18n";
  import IconClose from "$lib/icons/IconClose.svelte";
  import Backdrop from "$lib/components/Backdrop.svelte";

  export let visible = true;
  export let role: "dialog" | "alert" = "dialog";
  export let testId: string | undefined = undefined;
  export let disablePointerEvents = false;

  let showHeader: boolean;
  $: showHeader = $$slots.title !== undefined;

  const dispatch = createEventDispatcher();
  const close = () => dispatch("nnsClose");
</script>

{#if visible}
  <div
    class="modal"
    transition:fade
    {role}
    data-tid={testId}
    aria-labelledby={showHeader ? "modalTitle" : undefined}
    aria-describedby="modalContent"
    on:click|stopPropagation
    on:introend
  >
    <Backdrop {disablePointerEvents} on:nnsClose />
    <div
      transition:scale={{ delay: 25, duration: 150, easing: quintOut }}
      class={`wrapper ${role}`}
    >
      {#if showHeader}
        <div class="header">
          <h2 id="modalTitle"><slot name="title" /></h2>
          <button
            data-tid="close-modal"
            on:click|stopPropagation={close}
            aria-label={$i18n.core.close}
            disabled={disablePointerEvents}><IconClose size="32px" /></button
          >
        </div>
      {/if}

      <div class="content" id="modalContent" class:alert={role === "alert"}>
        <slot />
      </div>

      {#if $$slots.toolbar}
        <div class="toolbar">
          <slot name="toolbar" />
        </div>
      {/if}
    </div>
  </div>
{/if}

<style lang="scss">
  @use "../styles/mixins/interaction";
  @use "../styles/mixins/text";
  @use "../styles/mixins/display";
  @use "../styles/mixins/media";

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

    &.alert {
      width: var(--alert-width);
      max-width: var(--alert-max-width);

      max-height: var(--alert-max-height);

      border-radius: var(--alert-border-radius);

      .header {
        padding: var(--alert-padding-y) var(--alert-padding-x) var(--padding);
      }

      .content {
        margin: 0 0 var(--alert-padding-y);
        padding: var(--alert-padding-x) var(--alert-padding-x) 0;
      }

      .toolbar {
        padding: 0 var(--alert-padding-x) var(--alert-padding-y);
      }
    }

    &.dialog {
      width: var(--dialog-width);
      max-width: var(--dialog-max-width);

      height: var(--dialog-height);

      max-height: var(--dialog-max-height, 100%);

      @supports (-webkit-touch-callout: none) {
        max-height: -webkit-fill-available;
      }

      border-radius: var(--dialog-border-radius);

      .header {
        padding: var(--dialog-padding-y) var(--dialog-padding-x) var(--padding);
      }

      .content {
        margin: 0 0 var(--dialog-padding-y);
        padding: var(--dialog-padding-x) var(--dialog-padding-x) 0;
      }

      .toolbar {
        padding: 0 var(--dialog-padding-x) var(--dialog-padding-y);
      }
    }
  }

  .header {
    display: flex;
    justify-content: space-between;

    z-index: var(--z-index);

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

    overflow-y: auto;
    overflow-x: hidden;
  }

  .toolbar {
    display: flex;
    gap: var(--padding-2x);

    :global(button) {
      flex: 1;
    }

    @include media.min-width(small) {
      justify-content: flex-end;

      :global(button) {
        flex: none;
      }
    }
  }
</style>
