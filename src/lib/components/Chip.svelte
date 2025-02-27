<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let label: string;
  export let id: string;
  export let selected: boolean;

  $: console.log(selected);

  const dispatch = createEventDispatcher();
</script>

<button
  class="chip"
  data-tid="chip-component"
  class:selected
  on:click={() => dispatch("nnsClick", id)}>{label}</button
>

<style lang="scss">
  @use "../styles/mixins/effect";
  @use "../styles/mixins/fonts";
  @use "../styles/mixins/button";

  .chip {
    @include button.base;
    @include button.secondary;

    // @include effect.ripple-effect(--card-background);

    // Override default button styles
    min-height: 0;
    // Decrease padding to match default chip size
    padding: calc(var(--padding) - var(--button-border-size))
      calc(var(--padding-1_5x) - var(--button-border-size));
    border-radius: var(--border-radius-5x);
    @include fonts.small(true);

    &.selected {
      @include button.primary;
      padding: var(--padding) var(--padding-1_5x);
    }
  }
</style>
