<script lang="ts">
    import DocsLoremIpsum from "$docs/components/DocsLoremIpsum.svelte";
</script>

# Cells

Some pre-defined utilities to set spaces for grid's cells.

```html
<div class="content-grid">
  <div class="content-a">
    <h2 class="content-cell-title">My Title</h2>

    <div class="content-cell-details">
      <p>Some content.</p>
      <p>And other information.</p>
    </div>
  </div>
</div>
```

## Usage

| Type                                                 | CSS class                      |
| ---------------------------------------------------- | ------------------------------ |
| header, title, first information, etc.               | `content-cell-title`           |
| related content or details                           | `content-cell-details`         |
| display as cell as an "Island"                       | `content-cell-island`          |
| display as cell as an "Island" using disabled colors | `content-cell-disabled-island` |

> Unlike the [Island](/components/island) component, displaying a cell as an "Island" has no effect on the scroll - i.e. it does not produce any inner scrolling and is only cosmetic.

### Showcase

<div class="content-grid" style="margin-top: var(--padding-4x)">
    <div class="content-a">
        <h2 class="content-cell-title">Lorem ipsum</h2>

        <div class="content-cell-details">
            <DocsLoremIpsum length={2} />
        </div>
    </div>

    <div class="content-b content-cell-island">
        <h2 class="content-cell-title">Lorem ipsum</h2>

        <div class="content-cell-details">
            <DocsLoremIpsum length={2} />
        </div>

        <div class="content-cell-disabled-island">
            <DocsLoremIpsum length={1} />
        </div>
    </div>

</div>
