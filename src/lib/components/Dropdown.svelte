<script lang="ts">
  import IconExpandMore from "$lib/icons/IconExpandMore.svelte";

  // Do not allow to use objects as values.
  // Ex: in the query/update calls we do, when the object changes, the value is pointing to the old object.
  export let selectedValue: string | undefined = undefined;
  export let name: string;
  export let testId: string | undefined = undefined;
  export let disabled = false;

  let showStart: boolean;
  $: showStart = $$slots.start !== undefined;
</script>

<div class="select">
  {#if showStart}
    <div class="start">
      <slot name="start" />
    </div>
  {/if}
  <select
    {disabled}
    bind:value={selectedValue}
    {name}
    data-tid={testId}
    class:offset={showStart}
  >
    <slot />
  </select>
  <span class="icon">
    <IconExpandMore />
  </span>
</div>

<style lang="scss">
  @use "../styles/mixins/form";
  @use "../styles/mixins/text";

  .select {
    @include form.input;

    position: relative;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: var(--border-radius);

    width: var(--dropdown-width, auto);

    // Click on <select> does not trigger "focus" on parent div.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within
    // Matches an element if the element or any of its descendants are focused.
    &:focus-within {
      @include form.input-focus;
    }

    overflow: hidden;

    select {
      width: 100%;
      background: transparent;
      border: none;

      --select-padding-inner-top-bottom: var(
        --select-padding-top-bottom,
        var(--padding-2x)
      );
      padding: var(--select-padding-inner-top-bottom) calc(5 * var(--padding))
        var(--select-padding-inner-top-bottom)
        var(--select-padding-inner-start, var(--padding-2x));

      &.offset {
        --select-padding-inner-start: var(
          --select-padding-start,
          calc(5 * var(--padding))
        );
      }

      appearance: none;

      font-size: inherit;
      font-weight: inherit;

      &:focus {
        outline: none;
      }

      @include text.truncate;
    }

    .icon {
      display: flex;
      height: 100%;
      align-items: center;

      pointer-events: none;

      margin-right: var(--padding-1_5x);

      color: var(--disable-contrast);

      position: absolute;
      right: 0;

      // Size to match the line-height when font-size is 16px
      :global(svg) {
        width: 20px;
        height: 20px;
      }
    }
  }

  .start {
    position: absolute;
    left: 0;

    pointer-events: none;
  }
</style>
