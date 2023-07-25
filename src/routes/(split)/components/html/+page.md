<script lang="ts">
    import Html from "$lib/components/Html.svelte";
</script>

# Html

Html component sanitizes the provided text and renders HTML directly into a component using `{@html ...}` tag.

```javascript
<Html text="Valid HTML: <a target="_blank" href="/">A link</a>." />

<html text="Dangerous HTML: <img src=x onerror=alert('HTML')//>." />
```

## Properties

| Property | Description                          | Type     | Default |
| -------- | ------------------------------------ | -------- | ------- |
| `text`   | An html text that should be rendered | `string` |         |

## Showcase

<div class="card-grid">
    <div>
        <Html text='Valid HTML: <a target="_blank" href="/">A link</a>.' />
    </div>
    <div>
        <Html text='Dangerous HTML: <img src=x onerror=alert("HTML")//>.' />
    </div>
</div>
