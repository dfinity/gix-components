<script lang="ts">
    import Tag from "$lib/components/Tag.svelte";
</script>

# Tag

Tags are block elements that usually appear near another element. They are used to inform users of the status of an object or of an action that’s been taken.

```javascript
<Tag>Demo</Tag>
```

## Properties

| Property  | Description                                             | Type                                                | Default    |
| --------- | ------------------------------------------------------- | --------------------------------------------------- | ---------- |
| `tagName` | The type of the HTML element to render for the tag.     | `"span"` or `"h3"` or `"li"`                        | `"span"`   |
| `intent`  | The intent of the tag. It changes background and color. | `"info"` or `"warning"` or `"success"` or `"error"` | `"info"`   |
| `size`    | The size of the tag.                                    | `"small"` or `"medium"`                             | `"medium"` |
| `testId`  | Test id. Added as `"data-tid"` html attribute.          | string                                              | `"tag"`    |

## Showcase

<div class="grid" data-tid="showcase">
    <Tag>Span</Tag>

    <Tag tagName="h3">H3</Tag>

    <ul><Tag tagName="li">li</Tag></ul>

    <Tag intent="success">Success</Tag>

    <Tag intent="warning">Warning</Tag>

    <Tag intent="error">Error</Tag>

</div>

<style>
    .grid {
        display: flex;
        gap: var(--padding-2x);
        align-items: center;
        justify-content: space-between;
    }
</style>
