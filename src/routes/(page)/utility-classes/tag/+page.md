<script lang="ts">
</script>

# Tag

Apply tag styles to any element. Used in the [Tag component](/components/tag).

## Usage

| Type       | CSS class    |
|------------|--------------|
| Size large | `tag--large` |

## Showcase

| Styles                                        | Disabled                                    |
|-----------------------------------------------|---------------------------------------------|
| `<div class="tag">Default</div>`              | <div class="tag">Default</div>              |
| `<div class="tag tag--large">Default</div>`   | <div class="tag tag--large">Large</div>     |
| `<div class="tag custom-color">Default</div>` | <div class="tag custom-color">Default</div> |

<style lang="scss">
  .custom-color {
      background-color: var(--warning-emphasis);
      color: var(--warning-emphasis-contrast);
  }
</style>
