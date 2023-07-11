<script lang="ts">
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import { i18n } from "$lib/stores/i18n";
  import { handleKeyPress } from "$lib/utils/keyboard.utils";
  import { isTest } from "$lib/utils/env.utils";

  export let disablePointerEvents = false;

  const dispatch = createEventDispatcher();
  const close = () => dispatch("nnsClose");

  const FADE_IN_DURATION = 75 as const;
  const FADE_OUT_DURATION = 250 as const;
</script>

<div
  role="button"
  tabindex="-1"
  aria-label={$i18n.core.close}
  class="backdrop"
  on:click|stopPropagation={close}
  on:keypress={($event) => handleKeyPress({ $event, callback: close })}
  class:disablePointerEvents
  data-tid="backdrop"
/>

<style lang="scss">
  @use "../styles/mixins/interaction";
  @use "../styles/mixins/display";

  .backdrop {
    position: absolute;
    @include display.inset;

    background: var(--backdrop);
    color: var(--backdrop-contrast);

    backdrop-filter: var(--backdrop-filter);

    z-index: var(--backdrop-z-index);

    @include interaction.tappable;

    &.disablePointerEvents {
      @include interaction.none;
    }
  }
</style>
