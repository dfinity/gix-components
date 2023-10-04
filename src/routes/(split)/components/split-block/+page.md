<script lang="ts">
    import SplitBlock from "$lib/components/SplitBlock.svelte";
</script>

# Split Content

This component displays two slots in a column on mobile devices and in a row on desktops, with a 1px separation line.

```javascript
<SplitBlock>
  <div slot="start">Content A</div>
  <div slot="end">Content B</div>
</SplitBlock>
```

## Properties

No properties

## Slots

| Slot name | Description               |
| --------- | ------------------------- |
| `start`   | First column on desktop.  |
| `end`     | Second column on desktop. |

## Showcase

> Colors added for demo purposes

<div class="container">
  <SplitBlock>
    <div slot="start" class="item" data-tid="start">Start slot content</div>
    <div slot="end" class="item" data-tid="end">End slot content</div>
  </SplitBlock>
</div>

<style lang="scss">
  .container {
    background: var(--card-background-contrast);
  }

  .item {
    background: var(--card-background);
  }
</style>
