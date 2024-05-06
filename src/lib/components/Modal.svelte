<script lang="ts">
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import { i18n } from "$lib/stores/i18n";
  import IconClose from "$lib/icons/IconClose.svelte";
  import Backdrop from "$lib/components/Backdrop.svelte";
  import { nonNullish } from "@dfinity/utils";
  import { nextElementId } from "$lib/utils/html.utils";

  export let visible = true;
  export let role: "dialog" | "alert" = "dialog";
  export let testId: string | undefined = undefined;
  export let disablePointerEvents = false;

  let showHeader: boolean;
  $: showHeader = nonNullish($$slots.title);

  /**
   * @deprecated according new design there should be no sticky footer
   */
  let showFooterAlert: boolean;
  $: showFooterAlert = nonNullish($$slots.footer) && role === "alert";

  const dispatch = createEventDispatcher();
  const close = () => dispatch("nnsClose");

  // A bit faster fade in that backdrop IN, a bit slower on OUT
  const FADE_IN_DURATION = 125 as const;
  const FADE_OUT_DURATION = 200 as const;

  const modalTitleId = nextElementId("modal-title-");
  const modalContentId = nextElementId("modal-content-");

  const handleKeyDown = ({key}) => {
    if (visible && !disablePointerEvents && key === "Escape") {
      close();
    }
  };
</script>

<svelte:window on:keydown={handleKeyDown} />

{#if visible}
  <div
    class="modal"
    transition:fade|global={{ duration: 25 }}
    on:introend
    {role}
    data-tid={testId}
    aria-labelledby={showHeader ? modalTitleId : undefined}
    aria-describedby={modalContentId}
    on:click|stopPropagation
  >
    <Backdrop {disablePointerEvents} on:nnsClose />
    <div
      in:fade|global={{ duration: FADE_IN_DURATION }}
      out:fade|global={{ duration: FADE_OUT_DURATION }}
      class={`wrapper ${role}`}
    >
      {#if showHeader}
        <div class="header">
          <h2 id={modalTitleId} data-tid="modal-title">
            <slot name="title" />
          </h2>
          {#if !disablePointerEvents}
            <button
              data-tid="close-modal"
              on:click|stopPropagation={close}
              aria-label={$i18n.core.close}><IconClose size="24px" /></button
            >
          {/if}
        </div>
      {/if}

      <div class="container-wrapper">
        <slot name="sub-title" />

        <div class="container">
          <div
            class="content"
            id={modalContentId}
            class:alert={role === "alert"}
          >
            <slot />
          </div>
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
  @use "../styles/mixins/overlay";

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

    @include overlay.colors;

    overflow: hidden;

    box-sizing: border-box;

    box-shadow: var(--overlay-box-shadow);

    .container-wrapper {
      margin: var(--padding-1_5x) var(--padding-2x) auto;

      display: flex;
      flex-direction: column;
      gap: var(--padding-1_5x);
      flex: 1;

      overflow: hidden;
    }

    &.alert {
      width: var(--alert-width);
      max-width: var(--alert-max-width);

      max-height: var(--alert-max-height);

      border-radius: var(--alert-border-radius);

      .header {
        padding: var(--alert-padding-y) var(--alert-padding-x) var(--padding);
      }

      .container-wrapper {
        margin-bottom: calc(var(--alert-padding-y) * 2 / 3);
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
        padding: var(--dialog-padding-y) var(--padding-3x) var(--padding);
      }

      .container-wrapper {
        margin-bottom: var(--dialog-padding-y);
      }

      .content {
        margin: 0;
        padding: var(--dialog-padding-y) var(--dialog-padding-x);
      }
    }
  }

  .header {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: var(--padding);

    z-index: var(--z-index);

    position: relative;

    h2 {
      @include text.truncate;
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
    overflow-y: var(--modal-content-overflow-y, auto);
    overflow-x: hidden;
  }

  .container {
    position: relative;

    display: flex;
    flex-direction: column;

    flex: 1;

    overflow: hidden;
    border-radius: 16px;

    background: var(--overlay-content-background);
    color: var(--overlay-content-background-contrast);
  }
</style>
