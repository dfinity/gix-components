<script lang="ts">
  import IconExpandMore from "$lib/icons/IconExpandMore.svelte";

  // Do not allow to use objects as values.
  // Ex: in the query/update calls we do, when the object changes, the value is pointing to the old object.
  export let selectedValue: string | undefined = undefined;
  export let name: string;
  export let testId: string | undefined = undefined;
  export let disabled = false;
</script>

<div>
  <select {disabled} bind:value={selectedValue} {name} data-tid={testId}>
    <slot />
  </select>
  <span class="icon">
    <IconExpandMore />
  </span>
</div>

<style lang="scss">
  @use "../styles/mixins/form";

  div {
    @include form.input;

    position: relative;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);

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

      padding: var(--padding-2x);

      appearance: none;

      font-size: inherit;

      &:focus {
        outline: none;
      }
    }

    .icon {
      display: flex;
      height: 100%;
      align-items: center;

      pointer-events: none;

      position: absolute;
      right: var(--padding-2x);

      color: var(--disable-contrast);

      // Size to match the line-height when font-size is 16px
      :global(svg) {
        width: 20px;
        height: 20px;
      }
    }
  }
</style>
