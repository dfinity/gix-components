# Layout

`Layout` component is used to create the layout of a dapp. It encapsulates a split pane that renders a `<Menu />` (sticky on wide screen, reveal on mobile) and a slotted content which is commonly a component [Content](/components/content).

```javascript
<Layout>
  <svelte:fragment slot="menu-items">
    <MenuItem href="/" on:click>
      Home
    </MenuItem>
    <MenuItem href="/page" on:click>
      page
    </MenuItem>
  </svelte:fragment>

  <Content>
    <Title slot="title">My dapp page</Title>

    <main>
      <slot />
    </main>
  </Content>
</Layout>
```

## Slots

| Slot name    | Description                                         |
| ------------ | --------------------------------------------------- |
| Default slot | The content. See note about composition here under. |
| `menu-items` | The items of the menu - i.e. the links of the menu. |

### Composition

Although the default slot accepts any type of elements, to implement a responsive layout, it is recommended to use a `Content` component that will be styled by the library.

Likewise, if you wish to display some footer action, it is also recommended to use a `footer` element that is automatically absolutely positioned too.

Example 1:

```html
<!-- Your dapp _layout.svelte -->
<Layout>
  <content>
    <title slot="title">My dapp page</title>

    <slot />
  </content>
</Layout>

<!-- Your dapp index.svelte -->
<main>Hello</main>
<footer><button>Action</button></footer>
```

Example 2:

```html
<!-- Your dapp _layout.svelte -->
<Layout>
  <content>
    <title slot="title">My dapp page</title>

    <main>
      <slot />
    </main>

    <footer><slot name="footer" /></footer>
  </content>
</Layout>

<!-- Your dapp index.svelte -->
Hello
<button slot="footer">Action</button>
```
