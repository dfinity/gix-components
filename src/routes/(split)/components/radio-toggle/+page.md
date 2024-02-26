<script lang="ts">
    import RadioToggle from "$lib/components/RadioToggle.svelte";
    import { toastsStore } from "$lib/stores/toasts.store";

    const toggle = ({ detail }: CustomEvent<boolean>) => toastsStore.show({
        text: `Toggle state "${detail}"`,
        level: "info",
        duration: 500,
    });
</script>

# RadioToggle

Collections of buttons describing a set of related options. Only one button in a given group (group is set by `name` attribute) can be selected at the same time.

```typescript
<script>
    function toggle({ detail }) {
      toastsStore.show({
        text: `Toggle state "${detail}"`,
        level: "info",
        duration: 1000,
      });
    }
</script>

<RadioToggle
    on:nnsChange={toggle}
    labels={["Actionable Proposals", "All Proposal"]}
    values={["actionable", "all"]}
    value="all"
/>
```

## Properties

| Property | Description                                                                                       | Type           | Default           |
|----------|---------------------------------------------------------------------------------------------------|----------------|-------------------|
| `name`   | Bind the `checked` attribute of the HTML input of type `checkbox` that is rendered by the component | `string`       | auto-generated id |
| `labels` | A list of labels that will be used for text rendering in provided order                           | `Array<string>`             |                   |
| `values` | A list of values for entries. Will be provided in `detail` property of `nnsChange` event          | `Array<string>` |                   |
| `value`  | A value from `values` list that will be used for initial selection                                | `string`       |                   |

## Events

| Event       | Description                                            | Detail                |
|-------------|--------------------------------------------------------|-----------------------|
| `nnsChange` | Triggered each time the user change a selected option. | `CustomEvent<string>` |

## Showcase

### Two options

<RadioToggle
    on:nnsChange={toggle}
    labels={["Actionable Proposals", "All Proposal"]}
    values={["actionable", "all"]}
    value="all"
/>

### Three options

<RadioToggle
    on:nnsChange={toggle}
    labels={["Actionable Proposals", "All Proposal", "More Proposal"]}
    values={["actionable", "all", "more"]}
    value="all"
/>

