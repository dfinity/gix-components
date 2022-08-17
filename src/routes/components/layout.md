# Layout

Layout component is used to create the layout of a dapp. It renders the `<Toolbar />`, a `<Menu />` (sticky on wide screen, overlay on mobile) and a slotted content.

```javascript
<Layout>
  <Title slot="title">My dapp page</Title>

  <svelte:fragment slot="menu-items">
    <MenuItem href="/" on:click>
      Home
    </MenuItem>
    <MenuItem href="/page" on:click>
      page
    </MenuItem>
  </svelte:fragment>

  <main>
    <slot />
  </main>
</Layout>
```

## Properties

| Property | Description                                                                | Type      | Default |
| -------- | -------------------------------------------------------------------------- | --------- | ------- |
| `back`   | Display an arrowed `back` button instead of the hamburger menu.            | `boolean` | `false` |

## Slots

| Slot name     | Description                                               |
| ------------- | --------------------------------------------------------- |
| Default slot  | The content. See note about composition here under.       |
| `title`       | The title of the page displayed centered in the toolbar.  |
| `menu-items`  | The items of the menu - i.e. the links of the menu.       |
| `toolbar-end` | An element that can be added to the `end` of the toolbar. |

### Composition

Although the default slot accepts any type of elements, to implement a responsive layout, it is recommended to use a `main` element that will be styled by the library.

Likewise, if you wish to display some footer action, it is also recommended to use a `footer` element that is automatically absolutely positioned too.

Example 1:

```html
<!-- Your dapp _layout.svelte -->
<Layout>
  <title slot="title">My dapp page</title>

  <slot />
</Layout>

<!-- Your dapp index.svelte -->
<main>Hello</main>
<footer><button>Action</button></footer>
```

Example 2:

```html
<!-- Your dapp _layout.svelte -->
<Layout>
  <title slot="title">My dapp page</title>

  <main>
    <slot />
  </main>

  <footer><slot name="footer" /></footer>
</Layout>

<!-- Your dapp index.svelte -->
Hello
<button slot="footer">Action</button>
```
