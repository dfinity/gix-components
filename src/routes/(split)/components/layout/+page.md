# Layout

`Layout` component is used to create the layout of a dapp. It encapsulates a `split` or `stretch` pane that renders a `<Menu />` and a slotted content.

When the `split` layout is selected (default option), the menu becomes sticky on wide screen and a slotted content is commonly used as inner component ([Content](/components/content)).

On the contrary, with a `stretch`, the inner part uses the entire space regardless of the screen size.

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

## Properties

| Property | Description                          | Type                 | Default |
| -------- | ------------------------------------ | -------------------- | ------- |
| `layout` | Renders a "split" or "stretch" pane. | `split` or `stretch` | `split` |

## Slots

| Slot name    | Description                                         |
| ------------ | --------------------------------------------------- |
| Default slot | The content. See note about composition here under. |
| `menu-items` | The items of the menu - i.e. the links of the menu. |

### Composition

Although the default slot accepts any type of elements, to implement a responsive layout, it is recommended to use a `Content` component that will be styled by the library.

Likewise, if you wish to display some footer action, it is also recommended to use a `footer` element that is automatically absolutely positioned too.

Example 1:

```javascript
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

```javascript
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
