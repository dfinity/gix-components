<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let label: string;
  export let id: string;
  export let selected: boolean;

  const dispatch = createEventDispatcher();
</script>

<button
  class="chip"
  data-tid="chip-component"
  class:selected
  role="radio"
  aria-checked={selected}
  on:click={() => dispatch("nnsClick", id)}>{label}</button
>

<style lang="scss">
  @use "../styles/mixins/effect";
  @use "../styles/mixins/fonts";
  @use "../styles/mixins/button";

  .chip {
    @include button.base(false);
    @include fonts.small(true);

    // Override default button styles
    padding: var(--padding) var(--padding-1_5x);
    min-height: 0;
    border: solid var(--button-border-size) var(--primary);
    background: transparent;
    color: var(--button-secondary-color);
    border-radius: var(--border-radius-5x);

    transition: all var(--animation-time-short) ease-in;

    &:hover,
    &:focus {
      background: var(--button-card-focus-background);
    }

    &.selected {
      background: var(--primary);
      color: var(--primary-contrast);
      pointer-events: none;

      &:hover,
      &:focus {
        background: var(--primary);
      }
    }
  }
</style>
