<script lang="ts">
    import Tag from "$lib/components/Tag.svelte";
    import IconLockClosed from "$lib/icons/IconLockClosed.svelte";
</script>

# Tag

Tags are block elements that usually appear near another element. They are used to inform users of the status of an object or of an action that’s been taken.

```javascript
<Tag>Demo</Tag>
```

## Properties

| Property  | Description                                             | Type                                                | Default    |
| --------- | ------------------------------------------------------- | --------------------------------------------------- | ---------- |
| `tagName` | The type of the HTML element to render for the tag.     | `"span"` or `"li"`                                  | `"span"`   |
| `intent`  | The intent of the tag. It changes background and color. | `"info"` or `"warning"` or `"success"` or `"error"` | `"info"`   |
| `size`    | The size of the tag.                                    | `"medium"` or `"large"`                             | `"medium"` |
| `testId`  | Test id. Added as `"data-tid"` html attribute.          | string                                              | `"tag"`    |

## Showcase

<div class="grid" data-tid="showcase">
    <Tag>Span</Tag>

    <Tag intent="success">Success</Tag>

    <Tag intent="warning">Warning</Tag>

    <Tag intent="error">Error</Tag>

    <Tag><IconLockClosed size="14px" /><span>With icon</span></Tag>

</div>
<div class="grid">

    <Tag size="large">Large size</Tag>

    <Tag size="large" intent="success">Big Success</Tag>

    <Tag size="large"><IconLockClosed /><span>Large with icon</span></Tag>

</div>

### A List of Tags

<ul class="tags-list">
    <Tag tagName="li">li 1</Tag>
    <Tag tagName="li">li 2</Tag>
    <Tag tagName="li">li 3</Tag>
</ul>

<style>
    .grid {
        display: flex;
        gap: var(--padding-3x);
        align-items: center;
        flex-wrap: wrap;

        margin-top: var(--padding-2x);
    }

    .tags-list {
        display: flex;
        flex-direction: column;
        gap: var(--padding);
    }
</style>
