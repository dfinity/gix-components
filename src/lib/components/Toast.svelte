<script lang="ts">
  import { toastsStore } from "$lib/stores/toasts.store";
  import { fade, fly } from "svelte/transition";
  import { i18n } from "$lib/stores/i18n";
  import type {
    ToastLevel,
    ToastMsg,
    ToastPosition,
    ToastTheme,
  } from "$lib/types/toast";
  import { onDestroy, onMount, type Component } from "svelte";
  import Spinner from "./Spinner.svelte";
  import IconWarning from "$lib/icons/IconWarning.svelte";
  import IconClose from "$lib/icons/IconClose.svelte";
  import IconInfo from "$lib/icons/IconInfo.svelte";
  import IconCheckCircle from "$lib/icons/IconCheckCircle.svelte";
  import IconError from "$lib/icons/IconError.svelte";
  import { DEFAULT_ICON_SIZE } from "$lib/constants/constants";
  import { isNullish, nonNullish } from "@dfinity/utils";
  import Html from "./Html.svelte";

  export let msg: ToastMsg;

  const iconMapper = (level: ToastLevel): Component | undefined =>
    ({
      ["success"]: IconCheckCircle,
      ["warn"]: IconWarning,
      ["error"]: IconError,
      ["info"]: IconInfo,
      ["custom"]: undefined,
    })[level];

  const close = () => toastsStore.hide(msg.id);

  let text: string;
  let level: ToastLevel;
  let spinner: boolean | undefined;
  let title: string | undefined;
  let overflow: "scroll" | "truncate" | "clamp" | undefined;
  let position: ToastPosition | undefined;
  let icon: Component | undefined;
  let theme: ToastTheme | undefined;
  let renderAsHtml: boolean | undefined;

  $: ({
    text,
    level,
    spinner,
    title,
    overflow,
    position,
    icon,
    theme,
    renderAsHtml,
  } = msg);

  let scroll: boolean;
  $: scroll = overflow === undefined || overflow === "scroll";
  let truncate: boolean;
  $: truncate = overflow === "truncate";
  let clamp: boolean;
  $: clamp = overflow === "clamp";

  let timeoutId: NodeJS.Timeout | undefined = undefined;

  const autoHide = () => {
    const { duration } = msg;

    if (isNullish(duration)) {
      return;
    }

    timeoutId = setTimeout(close, duration);
  };

  const cleanUpAutoHide = () => {
    if (isNullish(timeoutId)) {
      return;
    }

    clearTimeout(timeoutId);
  };

  // To avoid having the scroll visible even when not needed.
  const minHeightMessage = `min-height: ${DEFAULT_ICON_SIZE}px;`;

  onMount(autoHide);
  onDestroy(cleanUpAutoHide);
</script>

<div
  data-tid="toast-component"
  role="dialog"
  class={`toast ${theme ?? "themed"}`}
  in:fly|global={{ y: (position === "top" ? -1 : 1) * 100, duration: 200 }}
  out:fade|global={{ delay: 100 }}
>
  <div class="icon {level}" aria-hidden="true">
    {#if spinner}
      <Spinner size="small" inline />
    {:else if nonNullish(icon)}
      <svelte:component this={icon} />
    {:else if iconMapper(level)}
      <svelte:component this={iconMapper(level)} size={DEFAULT_ICON_SIZE} />
    {/if}
  </div>

  <p
    data-tid="toast-message"
    class="msg"
    class:truncate
    class:clamp
    class:scroll
    style={minHeightMessage}
  >
    {#if nonNullish(title)}
      <span class="title">{title}</span>
    {/if}
    {#if renderAsHtml}
      <Html {text} />
    {:else}
      {text}
    {/if}
  </p>

  <button
    data-tid="close-button"
    class="close"
    on:click={close}
    aria-label={$i18n.core.close}><IconClose /></button
  >
</div>

<style lang="scss">
  @use "../styles/mixins/overlay";
  @use "../styles/mixins/fonts";
  @use "../styles/mixins/text";

  .toast {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--padding-1_5x);

    @include overlay.colors;

    border-radius: var(--border-radius);
    box-shadow: var(--strong-shadow, 8px 8px 16px 0 rgba(0, 0, 0, 0.25));

    padding: var(--padding-1_5x);
    box-sizing: border-box;

    &.inverted {
      @include overlay.toast-inverted;
    }

    .icon {
      line-height: 0;

      &.success {
        color: var(--positive-emphasis);
      }

      &.info {
        color: var(--primary);
      }

      &.warn {
        color: var(--warning-emphasis-shade);
      }

      &.error {
        color: var(--negative-emphasis);
      }
    }

    .msg {
      flex-grow: 1;

      margin: 0;
      word-break: break-word;

      &.scroll {
        overflow-y: auto;
        // >=3 lines x font-size x (line-height-normal=1.2 + extra-space=0.1 (needs for FF))
        max-height: calc(var(--font-size-standard) * 3 * 1.3);
        // Workaround to get rid of the redundant scrollbar (even when there is enough space).
        line-height: normal;
      }

      &.truncate {
        @include text.truncate;

        .title {
          @include text.truncate;
        }
      }

      &.clamp {
        @include text.clamp(3);

        .title {
          @include text.clamp(2);
        }
      }
    }

    .title {
      display: block;
      @include fonts.standard(true);
      // Workaround to get rid of the redundant scrollbar (even when there is enough space).
      line-height: normal;
    }

    button.close {
      padding: 0;
      line-height: 0;
      color: inherit;
    }
  }
</style>
