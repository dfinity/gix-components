<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { nextElementId } from "../utils/html.utils";

  export let name = nextElementId("labeled-toggle-group-");
  export let labels: string[];
  export let values: string[];
  /// Initial selection
  export let value: string;

  const dispatch = createEventDispatcher();

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
    id: nextElementId("labeled-toggle-"),
    checked: values[index] === value,
  }));

  const onChange = ({ currentTarget, target }) => {
    console.log("currentTarget:", currentTarget.value, target, values);
    dispatch("nnsChange", currentTarget.value);
  };
</script>

<fieldset class="labeled-toggle" style={`--option-count: ${count};`}>
  {#each options as { label, value: optionValue, id, checked } (id)}
    <div class="option">
      <input
        type="radio"
        name={name}
        {id}
        value={optionValue}
        {checked}
        on:input={onChange}
      />
      <label for={id}>{label}</label>
    </div>
  {/each}
</fieldset>

<style lang="scss">
  @use "../styles/mixins/fonts";

  fieldset {
    --option-width: calc(var(--padding) * 18);
    --option-gap: var(--padding-0_5x);
    --container-padding: var(--padding-0_5x);

    display: flex;
    flex-wrap: wrap;
    gap: var(--option-gap);
    padding: var(--container-padding);

    max-width: calc(
      (var(--option-count) * var(--option-width)) +
        (var(--container-padding) + var(--container-padding)) +
        (var(--option-gap) * (var(--option-count) - 1))
    );

    border: none;
    border-radius: var(--border-radius);
    background: var(--input-background);
  }

  .option {
    flex: 1 1 0;
    min-width: var(--option-width);
  }

  input {
    display: none;
  }

  label {
    display: block;
    padding: var(--padding-0_5x) var(--padding-1_5x);
    border-radius: var(--border-radius);

    text-align: center;
    @include fonts.small;

    cursor: pointer;
    background-color: var(--input-background);
    color: var(--input-color);

    transition:
      color var(--animation-time-normal),
      background-color var(--animation-time-normal);
  }

  input:checked + label {
    background-color: var(--button-primary);
    color: var(--primary-contrast);
  }
</style>
