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

  /**
   * @deprecated according new design there should be no sticky footer
   */
  let showFooterAlert: boolean;
  $: showFooterAlert = $$slots.footer !== undefined && role === "alert";

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

      <div class="container">
        <div class="content" id="modalContent" class:alert={role === "alert"}>
          <slot />
        </div>
      </div>

      {#if showFooterAlert}
        <div class="footer toolbar">
          <slot name="footer" />
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

    background: var(--modal-background);
    color: var(--modal-background-contrast);

    overflow: hidden;

    box-sizing: border-box;

    box-shadow: var(--overlay-box-shadow);

    &.alert {
      width: var(--alert-width);
      max-width: var(--alert-max-width);

      max-height: var(--alert-max-height);

      border-radius: var(--alert-border-radius);

      .header {
        padding: var(--alert-padding-y) var(--alert-padding-x) var(--padding);
      }

      .container {
        margin: var(--padding-1_5x) var(--padding-2x) calc(var(--alert-padding-y) * 2 / 3);
      }

      .content {
        margin: 0 0 calc(var(--alert-padding-y) / 2);
        padding: calc(var(--alert-padding-y) / 2)
          calc(var(--alert-padding-x) / 2) 0;
      }

      .footer {
        padding: 0 var(--alert-padding-x) calc(var(--alert-padding-y) * 2 / 3);

        @include media.min-width(small) {
          justify-content: flex-end;
        }
      }
    }

    &.dialog {
      width: var(--dialog-width);
      max-width: var(--dialog-max-width);

      min-height: var(--dialog-min-height);
      height: var(--dialog-height);
      max-height: var(--dialog-max-height, 100%);

      @supports (-webkit-touch-callout: none) {
        max-height: -webkit-fill-available;

        @include media.min-width(medium) {
          max-height: var(--dialog-max-height, 100%);
        }
      }

      border-radius: var(--dialog-border-radius);

      .header {
        padding: var(--dialog-padding-y) var(--dialog-padding-x) var(--padding);
      }

      .container {
        margin: var(--padding-1_5x) var(--padding-2x) var(--dialog-padding-y);
      }

      .content {
        margin: 0;
        padding: var(--dialog-padding-y) var(--dialog-padding-x);
      }
    }
  }

  .header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    z-index: var(--z-index);

    position: relative;

    h2 {
      @include text.clamp(1);
      grid-column-start: 2;
      text-align: center;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;

      justify-self: flex-end;

      &:active,
      &:focus,
      &:hover {
        background: var(--background-shade);
        border-radius: var(--border-radius);
      }
    }
  }

  .content {
    overflow-y: auto;
    overflow-x: hidden;
  }

  .container {
    position: relative;

    display: flex;
    flex-direction: column;

    flex: 1;

    overflow: hidden;
    border-radius: 16px;

    background: var(--modal-content-background);
    color: var(--modal-content-background-contrast);
  }
</style>
