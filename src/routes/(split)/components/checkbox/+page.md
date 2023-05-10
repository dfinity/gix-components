<script lang="ts">
    import Checkbox from "$lib/components/Checkbox.svelte";

    let checkbox1 = false;
    let checkbox2 = true;
    let checkbox3 = false;
</script>

# Checkbox

Checkboxes allow the selection of multiple options from a set of options. They appear as checked (ticked) when activated. Clicking on a checkbox will trigger an event. They are bind with a checked property.

```html
<script lang="ts">
  let checked = false;
</script>

<Checkbox on:nnsChange={() => (checked = !checked)} />
```

## Properties

| Property         | Description                                          | Type                | Default  |
| ---------------- | ---------------------------------------------------- | ------------------- | -------- |
| `inputId`        | An id for the HTML element `input` that is rendered. | `string`            |          |
| `checked`        | The checkbox property of the checbox.                | `boolean`           |          |
| `preventDefault` | Prevent default action on click event.               | `boolean`           | `false`  |
| `disabled`       | Enable or disable the checkbox.                      | `disabled`          | `true`   |
| `text`           | Display the label as a block or line of text.        | `block` or `inline` | `inline` |

## Events

| Event       | Description                                       | Detail    |
| ----------- | ------------------------------------------------- | --------- |
| `nnsChange` | Triggered when the state of the checkbox changes. | No detail |

## Showcase

<div class="card-grid">
    <Checkbox checked={checkbox1} on:nnsChange={() => (checkbox1 = !checkbox1)}>An option</Checkbox>

    <div style="--checkbox-flex-direction: row-reverse">
        <Checkbox checked={checkbox2} on:nnsChange={() => (checkbox2 = !checkbox2)}>An option with row-reverse style</Checkbox>
    </div>

    <div style="--checkbox-flex-direction: row-reverse">
        <Checkbox
          checked={checkbox3}
          on:nnsChange={() => (checkbox3 = !checkbox3)}
          text="block"
        >An option with row-reverse style and enough text to cover
        multiple lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Checkbox>
    </div>
</div>
