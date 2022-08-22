# Grid

The grid is based on a standard 12 columns-sizing approach. It spread the content on a single column on mobile devices, two on medium size devices and three on large.

Such layout is commonly use in the `main` content to spread cards.

```html
<div class="list-grid">
  <Card>
    <h2 class="title" slot="start">Title A.</h2>
  </Card>

  <Card>
    <h2 class="title" slot="start">Title B.</h2>
  </Card>
</div>
```

## Usage

Unlike components, the grid can be applied to any HTML elements through the use of a `global` style class `grid`.
