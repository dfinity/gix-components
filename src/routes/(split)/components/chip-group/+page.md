<script lang="ts">
    import BottomSheet from "$lib/components/BottomSheet.svelte";
    import ChipGroup from "$lib/components/ChipGroup.svelte";
    import Card from "$lib/components/Card.svelte";
    import DocsLoremIpsum from "$docs/components/DocsLoremIpsum.svelte";

    const currentMonth = new Date().toLocaleString("en-US", { month: "short" }).toLowerCase();
    let chips = [
      { id: "jan", label: "January", selected: currentMonth === "jan" },
      { id: "feb", label: "February", selected: currentMonth === "feb" },
      { id: "mar", label: "March", selected: currentMonth === "mar" },
      { id: "apr", label: "April", selected: currentMonth === "apr" },
      { id: "may", label: "May", selected: currentMonth === "may" },
      { id: "jun", label: "June", selected: currentMonth === "jun" },
      { id: "jul", label: "July", selected: currentMonth === "jul" },
      { id: "aug", label: "August", selected: currentMonth === "aug" },
      { id: "sep", label: "September", selected: currentMonth === "sep" },
      { id: "oct", label: "October", selected: currentMonth === "oct" },
      { id: "nov", label: "November", selected: currentMonth === "nov" },
      { id: "dec", label: "December", selected: currentMonth === "dec" }
    ];

    let selectDetail = undefined;
    const onSelect = (detail) => selectDetail = detail;    
</script>

# ChipGroup

ChipGroup allows users to choose from multiple options. It’s possible to trigger the `onSelect` callback (where the selected ID is provided in the event detail) or, alternatively, bind the chip property. The current implementation does not support multiple selections.

### ChipGroupItem interface

```typescript
export interface ChipGroupItem {
  label: string;
  id: string;
  selected: boolean;
  onSelect?: (id: string) => void;
}
```

### Sample

```javascript
<script>
  // Items of ChipGroupItem
  let chips = [
    {
      id: "jan",
      label: "January",
      selected: false
    },
    // ...
  ];
  let selectDetail;
  const onSelect = (detail) => selectDetail= detail;
</script>

<ChipGroup bind:chips {onSelect} />
```

## Properties

| Property   | Description                             | Type                      | Default                |
| ---------- | --------------------------------------- | ------------------------- | ---------------------- |
| `chips`    | ChipGroupItem items to display.         | `Array<ChipGroupItem>`    |                        |
| `testId`   | Optional data-tid value.                | `string`                  | `chip-group-component` |
| `onSelect` | Triggered when a user clicks on a Chip. | `function` or `undefined` | `undefined`            |

## Showcase

<Card>
<ChipGroup {onSelect} bind:chips />
</Card>

<h4>Select detail:</h4>
<pre>{selectDetail}</pre>

<h4>bind:chips</h4>
<pre>{JSON.stringify(chips, null, 2)}</pre>
