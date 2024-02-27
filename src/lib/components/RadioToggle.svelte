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

<div class="radio-toggle" style={`--option-count: ${count};`}>
  {#each options as { label, value: optionValue, id, checked } (id)}
    <div class="option button">
      <input
        type="radio"
        name={name}
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
  @use "../styles/mixins/fonts";
  @use "../styles/mixins/text";

  .radio-toggle {
    --option-width: calc(var(--padding) * 18);
    --option-gap: var(--padding-0_5x);
    --container-padding: var(--padding-0_5x);

    display: flex;
    gap: var(--option-gap);
    padding: var(--container-padding);
    width: 100%;

    @include media.min-width(medium) {
      // maximum 392 px on tablet+
      max-width: calc(var(--padding) * 48);
    }

    border-radius: var(--border-radius);
    background: var(--input-background);
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

    display: block;
    text-align: center;
    @include text.truncate;
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
