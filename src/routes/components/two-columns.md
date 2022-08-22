# Two Columns

A container that split its content into two columns on wider devices and on a single one on smaller devices.

```html
<TwoColumns>
    <div slot="start">
        Some content
    </div>
    <div slot="end">
        Some more details and actions
    </div>
</TwoColumns>
```

## Slots

| Slot name | Description                                                                                                |
|-----------|------------------------------------------------------------------------------------------------------------|
| `start`   | The first column or content. Currently left column on wider devices and first content on smaller devices.  |
| `end`     | The second column or content. Currently right column on wider devices and last content on smaller devices. |
