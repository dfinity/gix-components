<script lang="ts">
    import Dropdown from "$lib/components/Dropdown.svelte";
    import DropdownItem from "$lib/components/DropdownItem.svelte";
    import {IconUser} from "$lib/icons";
</script>

# Dropdown

Dropdown are form controls to select an option, or options, from a set of options. It renders a native `<select>` element. When a user taps the select, a native dialog appears with all of the options.

```html
<Dropdown name="demo" bind:selectedValue="{demoValue}">
  <DropdownItem value="1">Option 1</DropdownItem>
  <DropdownItem value="2">Option 2</DropdownItem>
  <DropdownItem value="3">Option 3</DropdownItem>
</Dropdown>
```

## Properties

| Property        | Description                                                                                            | Type                    | Default     |
| --------------- | ------------------------------------------------------------------------------------------------------ | ----------------------- | ----------- |
| `selectedValue` | Bind the select `value` attribute of the HTML input of type `select` that is rendered by the component | `string` or `undefined` | `undefined` |
| `name`          | The name attribute of the `select`.                                                                    | `string`                |             |
| `disabled`      | HTML input `disabled` field.                                                                           | `boolean`               | `false`     |
| `testId`        | Add a `data-tid` attribute to the DOM, useful for test purpose.                                        | `string` or `undefined` | `undefined` |

## Slots

| Slot name | Description                                                                                        |
| --------- | -------------------------------------------------------------------------------------------------- |
| `start`   | An element that can be displayed over the `select` on its left side. e.g. useful to display icons. |

If a slot `start` is provided but, its element is hided through CSS, the start padding can be adjusted with a CSS variable `--select-padding-start`.

## Showcase

<div class="card-grid">
    <Dropdown
    name="demo1"
    >
<DropdownItem value="1">Option 1</DropdownItem>
<DropdownItem value="2">Option 2</DropdownItem>
<DropdownItem value="3">Option 3</DropdownItem>
</Dropdown>

    <Dropdown
    name="demo2"
    >

<div slot="start" style="padding: 0 0 0 var(--padding)"><IconUser /></div>
<DropdownItem value="1">Option 1</DropdownItem>
<DropdownItem value="2">Option 2</DropdownItem>
<DropdownItem value="3">Option 3</DropdownItem>
</Dropdown>
</div>
