<script lang="ts">
    import RadioToggle from "$lib/components/RadioToggle.svelte";
    import { toastsStore } from "$lib/stores/toasts.store";

    const toggle = ({ detail }: CustomEvent<boolean>) => toastsStore.show({
        text: `Toggle state "${detail}"`,
        level: "info",
        duration: 500,
    });

    let selectedValue = "all";
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

    let selectedValue = "all";
</script>

// Listen `on:nnsChange` event to get the selection
<RadioToggle
    on:nnsChange={toggle}
    labels={["Actionable Proposals", "All Proposal"]}
    values={["actionable", "all"]}
    value="all"
/>

// Binding `value` property
<RadioToggle
    bind:value={selectedValue}
    labels={["Actionable Proposals", "All Proposal"]}
    values={["actionable", "all"]}
/>
```

## Properties

| Property                   | Description                                                                                         | Type            | Default           |
| -------------------------- | --------------------------------------------------------------------------------------------------- | --------------- | ----------------- |
| `name`                     | Bind the `checked` attribute of the HTML input of type `checkbox` that is rendered by the component | `string`        | auto-generated id |
| `labels`                   | A list of labels that will be used for text rendering in provided order                             | `Array<string>` |                   |
| `values`                   | A list of values for entries. Will be provided in `detail` property of `nnsChange` event            | `Array<string>` |                   |
| `value`                    | A value from `values` list that will be used to provide selected value                              | `string`        |                   |
| `--max-radio-toggle-width` | A css variable that can be provided from a parent to set the custom maximum width on tablet +       | `css variable`  |                   |

## Events

| Event       | Description                                            | Detail                |
| ----------- | ------------------------------------------------------ | --------------------- |
| `nnsChange` | Triggered each time the user change a selected option. | `CustomEvent<string>` |

## Showcase

### Two options ({selectedValue} selected)

<RadioToggle
on:nnsChange={toggle}
bind:value={selectedValue}
labels={["Actionable Proposals", "All Proposal"]}
values={["actionable", "all"]}
/>

### Three options, custom max width on desktop (`--max-radio-toggle-width: 280px;`)

<div style="--max-radio-toggle-width: 280px;">
    <RadioToggle
        on:nnsChange={toggle}
        labels={["Yes", "No", "Maybe"]}
        values={["yes", "no", "maybe"]}
    />
</div>

<!-- placeholder for the showcase) -->
<div style="height: 160px;"></div>
