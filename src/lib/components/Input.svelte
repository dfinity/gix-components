<script lang="ts">
  export let name: string;
  export let inputType: "number" | "text" = "number";
  export let required = true;
  export let spellcheck: boolean | undefined = undefined;
  export let step: number | "any" | undefined = undefined;
  export let disabled = false;
  export let minLength: number | undefined = undefined;
  export let max: number | undefined = undefined;
  export let value: string | number | undefined = undefined;
  export let placeholder: string;
  export let testId: string | undefined = undefined;

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
  export let autocomplete: "off" | "on" | undefined = undefined;

  // When forwarding slots, they always appear as true
  // This is a known issue in Svelte
  // https://github.com/sveltejs/svelte/issues/6059
  // To hack this, we pass a prop to avoid showing info element when not needed
  // Ideally, this would be calculated
  // showInfo = $$slots.label || $$slots.additional
  export let showInfo = true;

  $: step = inputType === "number" ? step ?? "any" : undefined;
  $: autocomplete = inputType !== "number" ? autocomplete ?? "off" : undefined;
</script>

<div class="input-block" class:disabled>
  {#if showInfo}
    <div class="info">
      <label class="label" for={name}><slot name="label" /></label>
      <slot name="additional" />
    </div>
  {/if}
  <input
    data-tid={testId}
    type={inputType}
    {required}
    {spellcheck}
    {name}
    id={name}
    {step}
    {disabled}
    {value}
    {minLength}
    {placeholder}
    {max}
    {autocomplete}
    on:blur
    on:focus
    on:input
    on:keydown
  />
</div>

<style lang="scss">
  @use "../styles/mixins/form";

  .input-block {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: var(--padding);

    width: var(--input-width);

    --disabled-color: var(--disable-contrast);

    &.disabled {
      color: var(--disabled-color);

      input {
        border: 1px solid var(--disabled-color);
      }
    }

    color: var(--background-contrast);
    background: none;
  }

  .info {
    display: flex;
    justify-content: space-between;
  }

  input {
    @include form.input;
    width: 100%;

    font-size: inherit;

    padding: var(--padding-2x);
    box-sizing: border-box;

    box-shadow: var(--current-box-inset-shadow);

    border-radius: var(--element-border-radius);

    outline: none;
  }

  input:focus {
    border: 1px solid var(--primary);
  }

  input[disabled] {
    cursor: text;
  }
</style>
