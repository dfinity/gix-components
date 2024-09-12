<script lang="ts">
    import Markdown from "$lib/components/Markdown.svelte";
    import template from '$docs/templates/proposal-template.md?raw';
    import Card from "$lib/components/Card.svelte";
</script>

# Markdown

Markdown component transforms the provided text into a sanitized HTML.

```javascript
<Markdown text="# Coolio" />
```

## Properties

| Property | Description                                             | Type     | Default |
| -------- | ------------------------------------------------------- | -------- | ------- |
| `text`   | A Markdown text that should be transformed and rendered | `string` |         |

## Showcase

<div data-tid="showcase">
    <Card><Markdown text={template} /></Card>
</div>
