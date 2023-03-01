<script lang="ts">
  import { toastsStore } from "$lib/stores/toasts.store";
  import { fade, fly } from "svelte/transition";
  import { i18n } from "$lib/stores/i18n";
  import type { ToastLevel, ToastMsg, ToastPosition } from "$lib/types/toast";
  import { onDestroy, onMount, SvelteComponent } from "svelte";
  import Spinner from "./Spinner.svelte";
  import IconWarning from "$lib/icons/IconWarning.svelte";
  import IconClose from "$lib/icons/IconClose.svelte";
  import IconInfo from "$lib/icons/IconInfo.svelte";
  import IconCheckCircle from "$lib/icons/IconCheckCircle.svelte";
  import IconError from "$lib/icons/IconError.svelte";
  import { DEFAULT_ICON_SIZE } from "$lib/constants/constants";

  export let msg: ToastMsg;

  const iconMapper = (level: ToastLevel): typeof SvelteComponent =>
    ({
      ["success"]: IconCheckCircle,
      ["warn"]: IconWarning,
      ["error"]: IconError,
      ["info"]: IconInfo,
    }[level]);

  const close = () => toastsStore.hide(msg.id);

  let text: string;
  let level: ToastLevel;
  let spinner: boolean | undefined;
  let title: string | undefined;
  let truncate: boolean | undefined;
  let position: ToastPosition | undefined;
  let icon: typeof SvelteComponent | undefined;

  $: ({ text, level, spinner, title, truncate, position, icon } = msg);

  let timeoutId: NodeJS.Timeout | undefined = undefined;

  const autoHide = () => {
    const { duration } = msg;

    if (duration === undefined) {
      return;
    }

    timeoutId = setTimeout(close, duration);
  };

  const cleanUpAutoHide = () => {
    if (timeoutId === undefined) {
      return;
    }

    clearTimeout(timeoutId);
  };

  onMount(autoHide);
  onDestroy(cleanUpAutoHide);
</script>

<div
  role="dialog"
  class="toast"
  in:fly={{ y: (position === "top" ? -1 : 1) * 100, duration: 200 }}
  out:fade={{ delay: 100 }}
>
  <div class="icon {level}" aria-hidden="true">
    {#if spinner}
      <Spinner size="small" inline />
    {:else if icon !== undefined}
      <svelte:component this={icon} />
    {:else}
      <svelte:component this={iconMapper(level)} size={DEFAULT_ICON_SIZE} />
    {/if}
  </div>

  <p class="msg" class:truncate={truncate === true}>
    {#if title !== undefined}
      <span class="title">{title}</span>
    {/if}
    {text}
  </p>

  <button class="close" on:click={close} aria-label={$i18n.core.close}
    ><IconClose /></button
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

      &:not(.truncate) {
        // (>=3 lines x 1rem) + top/bottom paddings
        max-height: calc(8.5 * var(--padding));
        overflow-y: auto;
      }

      &.truncate {
        @include text.truncate;

        .title {
          @include text.truncate;
        }
      }
    }

    .title {
      display: block;
      @include fonts.h4(true);
    }

    button.close {
      padding: 0;
      line-height: 0;
    }
  }
</style>
