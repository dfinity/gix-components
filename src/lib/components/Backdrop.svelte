<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import { i18n } from "$lib/stores/i18n";
  import { handleKeyPress } from "$lib/utils/keyboard.utils";

  export let disablePointerEvents = false;
  export let invisible = false;

  const dispatch = createEventDispatcher();
  const close = () => dispatch("nnsClose");

  const FADE_IN_DURATION = 75 as const;
  const FADE_OUT_DURATION = 250 as const;
</script>

<div
  role="button"
  tabindex="-1"
  aria-label={$i18n.core.close}
  in:fade|global={{ duration: FADE_IN_DURATION }}
  out:fade|global={{ duration: FADE_OUT_DURATION }}
  class="backdrop"
  class:visible={!invisible}
  on:click|stopPropagation={close}
  on:keypress={($event) => handleKeyPress({ $event, callback: close })}
  class:disablePointerEvents
  data-tid="backdrop"
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
