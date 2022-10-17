<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let inputId: string;
  export let checked: boolean;
  export let preventDefault = false;
  export let disabled = false;
  export let text: "block" | "inline" = "inline";

  const dispatch = createEventDispatcher();

  /**
   * Emit an event when the checkbox or container is clicked. The state should be updated by consumer.
   */
  const onClick = ($event: MouseEvent | TouchEvent) => {
    if (preventDefault) {
      $event.preventDefault();
    }
    dispatch("nnsChange");
  };
</script>

<div
  on:click|preventDefault={onClick}
  class="checkbox"
  class:disabled
  role="button"
>
  <label for={inputId} class={text}><slot /></label>
  <input
    data-tid="checkbox"
    type="checkbox"
    id={inputId}
    {disabled}
    {checked}
    on:click|stopPropagation={onClick}
  />
</div>

<style lang="scss">
  @use "../styles/mixins/text";
  @use "../styles/mixins/interaction";
  @use "../styles/mixins/form";

  .checkbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: var(--checkbox-flex-direction);
    gap: var(--padding-2x);

    padding: var(--checkbox-padding, var(--padding-2x));

    color: var(--checkbox-color);

    @include interaction.tappable;

    font-size: var(--checkbox-font-size, inherit);

    &:hover {
      background: var(--background-shade);
    }

    border-radius: var(--checkbox-border-radius, var(--border-radius));

    --checkbox-input-size: 20px;
    --checkbox-background-hover: var(--background-shade);

    &.disabled {
      pointer-events: none;
    }
  }

  label {
    user-select: none;
    cursor: pointer;

    flex: 1;
    order: var(--checkbox-label-order);

    color: var(--value-color);

    &.inline {
      @include text.truncate;
    }
  }

  /** https://moderncss.dev/pure-css-custom-styled-radio-buttons/ **/
  /** accent-color not supported yet on Safari 😩 **/

  input[type="checkbox"] {
    @include form.input;
    appearance: none;
    margin: 0;

    width: var(--checkbox-input-size);
    height: var(--checkbox-input-size);

    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius-0_5x);

    cursor: pointer;

    position: relative;

    &:checked {
      box-shadow: var(--input-box-shadow);
    }

    &[disabled],
    &[disabled]:hover {
      background: var(--disable);
      cursor: default;

      &:checked:after {
        border-color: var(--disable-contrast);
      }
    }

    &:focus {
      outline: 2px solid var(--primary);
      outline-offset: 2px;
    }

    &:checked:after {
      left: 5px;
      top: 1px;
      width: 6px;
      height: 10px;
      border: solid var(--background-contrast);
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      display: block;
      content: "";
      position: absolute;
    }
  }
</style>
