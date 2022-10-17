<script lang="ts">
    import Tag from "$lib/components/Tag.svelte";
</script>

# Tag

Tags are inline block elements that usually appear near another element. They are used to inform users of the status of an object or of an action that’s been taken.

```html
<Tag>Demo</Tag>
```

## Properties

| Property  | Description                                         | Type                   | Default   |
| --------- | --------------------------------------------------- | ---------------------- | --------- |
| `color`   | A color for the tag.                                | `Color`                | `primary` |
| `tagName` | The type of the HTML element to render for the tag. | `span` or `h3` or `li` | `span``   |

## Showcase

<div class="card-grid">
    <Tag>Span</Tag>

    <Tag tagName="h3">H3</Tag>

    <ul><Tag tagName="li">li</Tag></ul>

    <Tag color="success">Success</Tag>

    <Tag color="warning">Warning</Tag>

    <Tag color="error">Error</Tag>

</div>
