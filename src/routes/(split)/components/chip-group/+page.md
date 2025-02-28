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

    let nnsSelectDetail = undefined;
    const onNnsSelect = ({detail}) => nnsSelectDetail= detail;    
</script>

# ChipGroup

ChipGroup allows users to choose from multiple options. It’s possible to listen for the nnsSelect event (where the selected ID is provided in the event detail) or, alternatively, bind the chip property. The current implementation does not support multiple selections.

### ChipData interface

```typescript
export interface ChipData {
  label: string;
  id: string;
  selected: boolean;
}
```

### Sample

```javascript
<script>
  // Items of ChipData
  let chips = [
    {
      id: "jan",
      label: "January",
      selected: false
    },
    // ...
  ];
  let nnsSelectDetail;
  const onNnsSelect = ({detail}) => nnsSelectDetail= detail;
</script>

<ChipGroup bind:chips on:nnsSelect={onNnsSelect} />
```

## Properties

| Property | Description                | Type              | Default                |
| -------- | -------------------------- | ----------------- | ---------------------- |
| `chips`  | ChipData items to display. | `Array<ChipData>` |                        |
| `testId` | Optional data-tid value.   | `string`          | `chip-group-component` |

## Events

| Event       | Description                             | Detail      |
| ----------- | --------------------------------------- | ----------- |
| `nnsSelect` | Triggered when a user clicks on a Chip. | ChipData.id |

## Showcase

<Card>
<ChipGroup on:nnsSelect={onNnsSelect} bind:chips />
</Card>

<h4>nnsSelect event detail:</h4>
<pre>{nnsSelectDetail}</pre>

<h4>bind:chips</h4>
<pre>{JSON.stringify(chips, null, 2)}</pre>
