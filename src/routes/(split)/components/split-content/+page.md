# Split Content

A component that renders a header, a column and your content.

> This is the layout used in this documentation to present the [Components](/components)

```javascript
<SplitContent>
  <div slot="start">My column details</div>

  <Title slot="title">My dapp page</Title>

  <main slot="end">
    <slot />
  </main>
</SplitContent>
```

## Properties

| Property | Description                                                     | Type      | Default |
| -------- | --------------------------------------------------------------- | --------- | ------- |
| `back`   | Display an arrowed `back` button instead of the hamburger menu. | `boolean` | `false` |

## Slots

| Slot name     | Description                                                                |
| ------------- | -------------------------------------------------------------------------- |
| `start`       | A column displayed next to the menu.                                       |
| `end`         | The content of the page.                                                   |
| `title`       | The title of the page displayed centered in the toolbar of the `end` slot. |
| `toolbar-end` | An element that can be added to the `end` of the toolbar.                  |
