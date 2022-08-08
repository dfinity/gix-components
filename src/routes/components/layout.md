# Layout

Layout component is used to create the main layout of a dapp. It renders the `<Toolbar />`, a `<Menu />` (sticky on wide screen, overlay on mobile) and encapsulates the `<main />` content.

```javascript
<Layout>
  <h4 slot="title">My dapp page</h4>

  <svelte:fragment slot="menu-items">
    <MenuItem href="/" on:click>
      Home
    </MenuItem>
    <MenuItem href="/page" on:click>
      page
    </MenuItem>
  </svelte:fragment>

  <slot />
</Layout>
```

## Properties

| Property | Description                                                     | Type      | Default |
|----------|-----------------------------------------------------------------|-----------|---------|
| `back`   | Display an arrowed `back` button instead of the hamburger menu. | `boolean` | `false` |

## Slots

| Slot name    | Description                                                                                                       |
|--------------|-------------------------------------------------------------------------------------------------------------------|
| Defautl slot | The default main section content.                                                                                 |
| `title`      | The title of the page displayed centered in the toolbar.                                                          |
| `menu-items` | The items of the menu - i.e. the links of the menu.                                                               |
| `more`       | Addition options display on the right side of the toolbar.                                                        |
