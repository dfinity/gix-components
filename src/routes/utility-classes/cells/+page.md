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

| Type                                   | CSS class              |
| -------------------------------------- | ---------------------- |
| header, title, first information, etc. | `content-cell-title`   |
| related content or details             | `content-cell-details` |

### Showcase

<div class="content-grid" style="margin-top: var(--padding-4x)">
    <div class="content-a">
        <h2 class="content-cell-title">Lorem ipsum</h2>

        <div class="content-cell-details">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor nisi ut mi porttitor facilisis. Fusce sodales, sapien et convallis volutpat.</p>
            <p>Velit lorem lacinia massa, sed dictum libero ex et lectus.</p>
        </div>
    </div>

    <div class="content-b">
        <h2 class="content-cell-title">Lorem ipsum</h2>

        <div class="content-cell-details">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor nisi ut mi porttitor facilisis. Fusce sodales, sapien et convallis volutpat.</p>
            <p>Velit lorem lacinia massa, sed dictum libero ex et lectus.</p>
        </div>
    </div>

</div>
