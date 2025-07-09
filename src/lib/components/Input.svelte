<script lang="ts">
  import { isNullish, nonNullish } from "@dfinity/utils";
  import { createEventDispatcher } from "svelte";
  import Decimal from "decimal.js";

  export let name: string;
  export let inputType: "icp" | "number" | "text" | "currency" = "number";
  export let required = true;
  export let spellcheck: boolean | undefined = undefined;
  export let step: number | "any" | undefined = undefined;
  export let disabled = false;
  export let minLength: number | undefined = undefined;
  export let max: number | undefined = undefined;
  export let value: string | number | undefined = undefined;
  export let placeholder: string;
  export let testId: string | undefined = undefined;
  export let decimals = 8;
  export let ignore1Password = true;
  export let inputElement: HTMLInputElement | undefined = undefined;
  export let autofocus = false;

  const dispatch = createEventDispatcher();

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
  export let autocomplete: "off" | "on" | undefined = undefined;

  // When forwarding slots, they always appear as true
  // This is a known issue in Svelte
  // https://github.com/sveltejs/svelte/issues/6059
  // To hack this, we pass a prop to avoid showing info element when not needed
  // Ideally, this would be calculated
  // showInfo = $$slots.label || $$slots.end
  export let showInfo = true;

  $: step = inputType === "number" ? (step ?? "any") : undefined;
  $: autocomplete =
    inputType !== "number" ? (autocomplete ?? "off") : undefined;

  // This component was developed for ICP and 8 decimals in mind. The "currency" input type was added afterwards therefore, for backwards compatibility reason, if the input type is set to icp, the number of decimals remains 8.
  let wrapDecimals = 8;
  $: wrapDecimals = inputType === "icp" ? 8 : decimals;

  let selectionStart: number | null = 0;
  let selectionEnd: number | null = 0;

  /**
   * Safely parses a value into a `Decimal` instance.
   *
   * This is used instead of JavaScript’s native `Number()` to avoid floating-point precision issues
   * when dealing with currency or high-precision inputs (e.g. more than 15–17 decimal places).
   *
   * The native `Number()` can produce inaccurate results for such inputs. For example:
   * `Number(0.999999999999999876n)` or `(+"0.999999999999999876")` prints `0.9999999999999999`.
   * `Number(0.999999999999999812n)` or `(+"0.999999999999999812")` prints `0.9999999999999998`.
   * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding
   *
   * To mitigate this, we use the `decimal.js` library, which provides arbitrary-precision decimals.
   *
   * However, `Decimal` throws an error for invalid inputs (e.g. empty string, non-numeric strings),
   * whereas `Number()` simply returns `NaN`. To handle this safely, this function wraps the constructor
   * in a try-catch block and returns `null` on failure — allowing consumers to fallback to other logic.
   *
   * @param value - The input to parse (typically a string, but could be unknown).
   * @returns A `Decimal` instance if the input is valid, otherwise `null`.
   */
  const safeDecimal = (value: unknown): Decimal | null => {
    try {
      return new Decimal(value as string);
    } catch {
      return null;
    }
  };

  const toStringWrapDecimals = (value: string): string => {
    const decimalValue = safeDecimal(value);

    // If the value is not a valid decimal, fallback to native `Number` formatting:
    // - The input has already failed parsing via `Decimal`, which means it's either not a number or a trivial case (like an empty string).
    // - In such edge cases, native `Number()` will return `NaN` or coerce the value into a number, and the formatting is capped via `maximumFractionDigits`,
    //   so any inaccuracies are irrelevant or already present in the input.
    // - The fallback ensures we don't throw or break the rendering pipeline for malformed inputs, maintaining graceful degradation.
    if (isNullish(decimalValue)) {
      return Number(value).toLocaleString("en", {
        useGrouping: false,
        maximumFractionDigits: wrapDecimals,
      });
    }

    return decimalValue.toDecimalPlaces(wrapDecimals).toFixed();
  };

  // replace exponent format (1e-4) w/ plain (0.0001)
  const exponentToPlainNumberString = (value: string): string =>
    // number to toLocaleString doesn't support decimals for values >= ~1e16
    value.includes("e") ? toStringWrapDecimals(value) : value;
  // To show undefined as "" (because of the type="text")
  const fixUndefinedValue = (value: string | number | undefined): string =>
    isNullish(value) ? "" : `${value}`;

  let currencyValue: string = exponentToPlainNumberString(
    fixUndefinedValue(value),
  );
  let lastValidCurrencyValue: string | number | undefined = value;
  let internalValueChange = true;

  let currency = false;
  $: currency = ["icp", "currency"].includes(inputType);

  $: value,
    (() => {
      if (!internalValueChange && currency) {
        if (typeof value === "number") {
          currencyValue = exponentToPlainNumberString(`${value}`);
        } else {
          currencyValue = fixUndefinedValue(value);
        }

        lastValidCurrencyValue = currencyValue;
      }

      internalValueChange = false;
    })();

  const restoreFromValidValue = (noValue = false) => {
    if (isNullish(inputElement) || !currency) {
      return;
    }

    if (noValue) {
      lastValidCurrencyValue = undefined;
    }

    internalValueChange = true;
    value = isNullish(lastValidCurrencyValue)
      ? undefined
      : typeof lastValidCurrencyValue === "number"
        ? lastValidCurrencyValue.toFixed(wrapDecimals)
        : inputType === "icp"
          ? +lastValidCurrencyValue
          : lastValidCurrencyValue;
    currencyValue = fixUndefinedValue(lastValidCurrencyValue);

    // force dom update (because no active triggers)
    inputElement.value = currencyValue;

    // restore cursor position
    inputElement.setSelectionRange(selectionStart, selectionEnd);
  };

  // The type declaration of the input event is neither defined in node types nor in svelte.
  // This extends the event with the currentTarget that is provided by the browser and that can be used to retrieve the input value.
  type InputEventHandler = Event & {
    currentTarget: EventTarget & HTMLInputElement;
  };

  const isDecimalsFormat = (text: string): boolean => {
    const regex = new RegExp(`^\\d*(\\.\\d{0,${wrapDecimals}})?$`);
    return regex.test(text);
  };

  const handleInput = ({ currentTarget }: InputEventHandler) => {
    if (currency) {
      const currentValue = exponentToPlainNumberString(currentTarget.value);

      // handle invalid input
      if (isDecimalsFormat(currentValue) === false) {
        // restore value (e.g. to fix invalid paste)
        restoreFromValidValue();
      } else if (currentValue.length === 0) {
        // reset to undefined ("" => undefined)
        restoreFromValidValue(true);
      } else {
        lastValidCurrencyValue = currentValue;
        currencyValue = fixUndefinedValue(currentValue);

        internalValueChange = true;
        // for inputType="icp" value is a number
        value =
          inputType === "icp"
            ? +currentValue
            : toStringWrapDecimals(currentValue);
      }
    } else {
      internalValueChange = true;
      value =
        inputType === "number" ? +currentTarget.value : currentTarget.value;
    }

    dispatch("nnsInput");
  };

  const handleKeyDown = () => {
    if (isNullish(inputElement)) {
      return;
    }

    // preserve selection
    ({ selectionStart, selectionEnd } = inputElement);
  };

  let displayInnerEnd: boolean;
  $: displayInnerEnd = nonNullish($$slots["inner-end"]);

  let displayBottom: boolean;
  $: displayBottom = nonNullish($$slots["bottom"]);
</script>

<div class="input-block" class:disabled>
  {#if showInfo}
    <div class="info">
      <slot name="start" />
      <label class="label" for={name}><slot name="label" /></label>
      <slot name="end" />
    </div>
  {/if}
  <div class:with-bottom={displayBottom}>
    <div class="input-field">
      <!-- svelte-ignore a11y_autofocus -->
      <input
        bind:this={inputElement}
        data-tid={testId}
        type={currency ? "text" : inputType}
        {required}
        {spellcheck}
        {name}
        id={name}
        {step}
        {disabled}
        value={currency ? currencyValue : value}
        minlength={minLength}
        {placeholder}
        {max}
        {autocomplete}
        {autofocus}
        on:blur
        on:focus
        on:input={handleInput}
        on:keydown={handleKeyDown}
        class:inner-end={displayInnerEnd}
        data-1p-ignore={ignore1Password}
      />
      {#if displayInnerEnd}
        <div class="inner-end-slot">
          <slot name="inner-end" />
        </div>
      {/if}
    </div>

    {#if displayBottom}
      <div class="bottom-slot">
        <slot name="bottom" />
      </div>
    {/if}
  </div>
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

    color: var(--background-contrast);
    background: none;

    &.disabled {
      --disabled-color: rgba(var(--disable-contrast-rgb), 0.8);
      color: var(--disabled-color);

      input {
        border: var(--input-border-size) solid var(--disable);
        color: var(--disabled-color);
      }
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
    gap: var(--padding);

    .label {
      flex: 1 1 100%;
    }
  }

  input {
    width: 100%;

    font-size: inherit;

    padding: var(--padding-2x);
    box-sizing: border-box;

    border-radius: var(--border-radius);

    outline: none;
    appearance: none;

    @include form.input;
  }

  input[disabled] {
    cursor: text;
  }

  .input-field {
    position: relative;
  }

  .inner-end {
    padding-right: var(--input-padding-inner-end, 64px);
  }

  .inner-end-slot {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    padding: var(--padding) var(--padding-2x);
  }

  .with-bottom {
    background-color: var(--input-border-color);
    border-radius: var(--border-radius);

    input {
      padding-top: var(--padding-3x);
      padding-bottom: var(--padding-3x);
    }
  }
</style>
