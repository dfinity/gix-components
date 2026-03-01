<script lang="ts">
  import { fade } from "svelte/transition";
  import { i18n } from "$lib/stores/i18n";
  import { stopPropagation } from "$lib/utils/event-modifiers.utils";
  import { handleKeyPress } from "$lib/utils/keyboard.utils";

  interface Props {
    disablePointerEvents?: boolean;
    invisible?: boolean;
    onClose?: () => void;
  }

  let {
    disablePointerEvents = false,
    invisible = false,
    onClose,
  }: Props = $props();

  const close = () => onClose?.();

  const FADE_IN_DURATION = 75 as const;
  const FADE_OUT_DURATION = 250 as const;
</script>

<div
  class="backdrop"
  class:disablePointerEvents
  class:visible={!invisible}
  aria-label={$i18n.core.close}
  data-tid="backdrop"
  onclick={stopPropagation(close)}
  onkeypress={($event) => handleKeyPress({ $event, callback: close })}
  role="button"
  tabindex="-1"
  in:fade|global={{ duration: FADE_IN_DURATION }}
  out:fade|global={{ duration: FADE_OUT_DURATION }}
></div>

<style lang="scss">
  @use "../styles/mixins/interaction";
  @use "../styles/mixins/display";

  .backdrop {
    position: absolute;
    @include display.inset;

    color: var(--backdrop-contrast);

    z-index: var(--backdrop-z-index);

    @include interaction.tappable;

    &.visible {
      background: var(--backdrop);
      backdrop-filter: var(--backdrop-filter);
    }

    &.disablePointerEvents {
      @include interaction.none;
    }
  }
</style>
