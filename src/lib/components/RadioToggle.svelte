<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { nextElementId } from "../utils/html.utils";

  export let name = nextElementId("radio-toggle-group-");
  export let labels: string[];
  export let values: string[];
  export let value: string;

  const dispatch = createEventDispatcher();

  let selectedIndex: number;
  $: selectedIndex = values.indexOf(value);

  let count: number;
  $: count = labels.length;
  let options: {
    label: string;
    value: string;
    id: string;
  }[];
  $: options = Array.from(Array(count)).map((_, index) => ({
    label: labels[index],
    value: values[index],
    id: nextElementId("radio-toggle-"),
    checked: index === selectedIndex,
  }));

  const onChange = ({ currentTarget }) => {
    value = currentTarget.value;
    dispatch("nnsChange", value);
  };
</script>

<div
  class="radio-toggle"
  style={`--option-count: ${count}; --selected-index: ${selectedIndex};`}
>
  <div class="indicator" />
  {#each options as { label, value: optionValue, id, checked } (id)}
    <div class="option">
      <input
        type="radio"
        {name}
        {id}
        value={optionValue}
        {checked}
        on:input={onChange}
      />
      <label class="button" for={id}>{label}</label>
    </div>
  {/each}
</div>

<style lang="scss">
  @use "../styles/mixins/media";
  @use "../styles/mixins/button";
  @use "../styles/mixins/text";

  .radio-toggle {
    --option-gap: var(--padding-0_5x);
    --container-padding: var(--padding-0_5x);
    --indicator-width: calc(
      (100% - 2 * var(--container-padding)) / var(--option-count)
    );

    // to get optional width from parent
    --max-width: var(--max-radio-toggle-width, calc(var(--padding) * 48));

    display: flex;
    position: relative;
    gap: var(--option-gap);
    padding: var(--container-padding);
    width: 100%;

    @include media.min-width(medium) {
      max-width: var(--max-width);
    }

    border-radius: var(--border-radius);
    background: var(--input-background);

    .indicator {
      position: absolute;
      top: var(--container-padding);
      height: calc(100% - 2 * var(--container-padding));
      width: var(--indicator-width);
      left: calc(
        var(--container-padding) + var(--indicator-width) *
          var(--selected-index)
      );
      background-color: var(--button-primary);
      border-radius: var(--border-radius);

      // do not display indicator if no option is selected
      opacity: min(calc(var(--selected-index) + 1), 1);

      transition:
        left var(--animation-time-normal) ease-out,
        opacity var(--animation-time-normal);
    }
  }

  .option {
    flex: 1 1;
    overflow: hidden;
  }

  input {
    display: none;
  }

  label {
    @include button.base;
    // reset button height
    min-height: 0;
    background: transparent;
    cursor: pointer;

    display: block;
    text-align: center;
    @include text.truncate;
    color: var(--input-color);

    transition: color var(--animation-time-normal);
  }

  input:checked + label {
    color: var(--primary-contrast);
  }
</style>
