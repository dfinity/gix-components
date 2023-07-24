<script lang="ts">
    import ExternalLink from "$lib/components/ExternalLink.svelte";
</script>

# External Link

A component that renders an external link with the appropriate `rel` attribute option and an icon.

```javascript
<ExternalLink href="https://internetcomputer.org">
  internetcomputer.org
</ExternalLink>
```

## Properties

| Property | Description                             | Type     | Default |
| -------- | --------------------------------------- | -------- | ------- |
| `href`   | The link target.                        | `string` |         |
| `alt`    | An accessible description for the link. | `string` | `""`    |

## Slots

| Slot name    | Description                                        |
| ------------ | -------------------------------------------------- |
| Default slot | The content that will be rendered within the link. |

## Showcase

<div style="padding: var(--padding-2x) 0" data-tid="showcase">
<ExternalLink href="https://internetcomputer.org">internetcomputer.org</ExternalLink>
</div>
