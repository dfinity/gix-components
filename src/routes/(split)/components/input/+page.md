<script lang="ts">
    import Input from "$lib/components/Input.svelte";
    import IconQRCodeScanner from "$lib/icons/IconQRCodeScanner.svelte";

    let amountWithDecimals: number | undefined = undefined;
</script>

# Input

The input component is a wrapper to the HTML input element with custom styling and additional functionality.

```javascript
<Input placeholder="An input" inputType="text" value="" />
<Input placeholder="Enter ICP amount" inputType="icp" value={12.09878976} />
<Input placeholder="Enter ETH" inputType="currency" decimals={18} bind:value={myAmount} />
```

## Properties

| Property          | Description                                                                                                                                           | Type                                      | Default     |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ----------- |
| `name`            | HTML input `name` field.                                                                                                                              | `string`                                  |             |
| `inputType`       | HTML input `type` field extended with a custom `icp` type.                                                                                            | `text` or `number` or `icp` or `currency` | `number`    |
| `required`        | HTML input `required` field.                                                                                                                          | `boolean`                                 | `true`      |
| `spellcheck`      | HTML input `spellcheck` field.                                                                                                                        | `boolean` or `undefined`                  | `undefined` |
| `step`            | HTML input `step` field.                                                                                                                              | `number` or `any` or `undefined`          | `undefined` |
| `disabled`        | HTML input `disabled` field.                                                                                                                          | `boolean`                                 | `false`     |
| `minLength`       | HTML input `minlength` field.                                                                                                                         | `number` or `undefined`                   | `undefined` |
| `max`             | HTML input `max` field.                                                                                                                               | `number` or `undefined`                   | `undefined` |
| `value`           | HTML input `value` field.                                                                                                                             | `string` or `number` or `undefined`       | `undefined` |
| `placeholder`     | HTML input `placeholder` field.                                                                                                                       | `string`                                  |             |
| `autocomplete`    | HTML input `autocomplete` field.                                                                                                                      | `off` or `on` or `undefined`              | `undefined` |
| `decimals`        | Can be used together with the `inputType` set as `currency` type to define a particular number of decimals supported by the input field.              | `number`                                  | `8`         |
| `showInfo`        | Display additional information related to the input. Should be used in addition to slots.                                                             | `boolean`                                 | `false`     |
| `testId`          | Add a `data-tid` attribute to the DOM, useful for test purpose.                                                                                       | `string` or `undefined`                   | `undefined` |
| `ignore1Password` | Tell 1Password it should ignore the field (Reference: 1Password [documentation](https://developer.1password.com/docs/web/compatible-website-design/)) | `boolean`                                 | `true`      |
| `inputElement`    | HTML input element                                                                                                                                    | `HTMLInputElement` or `undefined`         | `undefined` |

### Notes

If the `inputType` is set to `icp`, the `value` bind by the component is a `number`. On the contrary, if bind to `currenty`, the value is a `string`. This to avoid issue with scientific notation enforced by JavaScript. It is then up to you to parse the currency according your need, for example to `bigint` or `BigNumber`.

## Slots

| Slot name   | Description                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| `start`     | An addition before the label (e.g. an action related to the input). Need to be activated with the property `showInfo`. |
| `label`     | A label related to the input. Need to be activated with the property `showInfo`.                                       |
| `end`       | An addition after the label (e.g. an action related to the input). Need to be activated with the property `showInfo`.  |
| `inner-end` | An addition displayed within the input (e.g. an action related to the input).                                          |
| `bottom`    | An addition below the input field.                                                                                     |

Both slots are displayed `flex` with `space-between`.

## Showcase

<div class="card-grid">
    <Input placeholder="Input number" />

    <Input placeholder="Input text" inputType="text" value="" />

    <Input placeholder="Enter ICP" inputType="icp" value="" />

    <div>
        <Input testId="amount-decimals" placeholder="Enter ETH" inputType="currency" decimals={18} bind:value={amountWithDecimals} />
        <p>Amount: <output data-tid="amount-decimals-output">{amountWithDecimals ?? ""}</output></p>
    </div>

    <Input placeholder="Disabled" disabled value="This is a disabled value" inputType="text" />

    <Input placeholder="Input text" inputType="text" value="" showInfo>
        <svelte:fragment slot="label">A label</svelte:fragment>
        <span slot="end" class="label">More</span>
    </Input>

    <Input placeholder="Input text" inputType="text" value="">
        <IconQRCodeScanner slot="inner-end" />
    </Input>

    <Input placeholder="Input text" inputType="text" value="">
        <div slot="bottom">
           <p>A slot to show stuff below the input field</p>
        </div>
    </Input>

    <Input placeholder="Input text" inputType="text" value="">
        <IconQRCodeScanner slot="inner-end" />

        <div slot="bottom">
           <p>A slot to show stuff below the input field</p>
        </div>
    </Input>

</div>
