<script lang="ts">
    import Input from "$lib/components/Input.svelte";
</script>

# Input

The input component is a wrapper to the HTML input element with custom styling and additional functionality.

```html
<input placeholder="An input" />
<input placeholder="An text" inputType="text" value="Hello World" />
```

## Properties

| Property       | Description                                                                               | Type                                | Default     |
| -------------- | ----------------------------------------------------------------------------------------- | ----------------------------------- | ----------- |
| `name`         | HTML input `name` field.                                                                  | `string`                            |             |
| `inputType`    | TML input `type` field.                                                                   | `text` or `number`                  | `number`    |
| `required`     | HTML input `required` field.                                                              | `boolean`                           | `true`      |
| `spellcheck`   | HTML input `spellcheck` field.                                                            | `boolean` or `undefined`            | `undefined` |
| `step`         | HTML input `step` field.                                                                  | `number` or `any` or `undefined`    | `undefined` |
| `disabled`     | HTML input `disabled` field.                                                              | `boolean`                           | `false`     |
| `minLength`    | HTML input `minlength` field.                                                             | `number` or `undefined`             | `undefined` |
| `max`          | HTML input `max` field.                                                                   | `number` or `undefined`             | `undefined` |
| `value`        | HTML input `value` field.                                                                 | `string` or `number` or `undefined` | `undefined` |
| `placeholder`  | HTML input `placeholder` field.                                                           | `string`                            |             |
| `autocomplete` | HTML input `autocomplete` field.                                                          | `off` or `on` or `undefined`        | `undefined` |
| `showInfo`     | Display additional information related to the input. Should be used in addition to slots. | `boolean`                           | `false`     |
| `testId`       | Add a `data-tid` attribute to the DOM, useful for test purpose.                           | `string` or `undefined`             | `undefined` |
| `inputElement` | A reference to rendered input element.                                                    | `HTMLInputElement` or `undefined`   |             |

## Slots

| Slot name    | Description                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------ |
| `label`      | A label related to the input. Need to be activated with the property `showInfo`.                       |
| `additional` | An addition such as an action related to the input. Need to be activated with the property `showInfo`. |

Both slots are displayed `flex` with `space-between`.

## Showcase

<div class="card-grid">
    <Input placeholder="Input number" />

    <Input placeholder="Input text" inputType="text" value="" />

    <Input placeholder="Disabled" disabled value="This is a disabled value" inputType="text" />

    <Input placeholder="Input text" inputType="text" value="" showInfo>
        <svelte:fragment slot="label">A label</svelte:fragment>
        <span slot="additional">More</span>
    </Input>

</div>
