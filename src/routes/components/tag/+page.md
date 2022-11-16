<script lang="ts">
    import Tag from "$lib/components/Tag.svelte";
</script>

# Tag

Tags are block elements that usually appear near another element. They are used to inform users of the status of an object or of an action that’s been taken.

```html
<Tag>Demo</Tag>
```

## Properties

| Property  | Description                                         | Type                   | Default |
| --------- | --------------------------------------------------- | ---------------------- | ------- |
| `tagName` | The type of the HTML element to render for the tag. | `span` or `h3` or `li` | `span`` |

## CSS variables

| Property      | Description          | Default         |
| ------------- | -------------------- | --------------- |
| `--tag-color` | A color for the tag. | `--value-color` |

## Showcase

<div class="card-grid">
    <Tag>Span</Tag>

    <Tag tagName="h3">H3</Tag>

    <ul><Tag tagName="li">li</Tag></ul>

    <div style="--tag-color: var(--positive-emphasis)"><Tag color="success">Success</Tag></div>

    <div style="--tag-color: var(--warning-emphasis)"><Tag color="warning">Warning</Tag></div>

    <div style="--tag-color: var(--negative-emphasis)"><Tag color="error">Error</Tag></div>

</div>
