# Content

A component that renders a header and your content.

```javascript
<Content>
  <Title slot="title">My dapp page</Title>

  <main>
    <slot />
  </main>
</Content>
```

## Properties

| Property   | Description                                                                                     | Type      | Default |
| ---------- | ----------------------------------------------------------------------------------------------- | --------- | ------- |
| `back`     | Display an arrowed `back` button instead of the hamburger menu.                                 | `boolean` | `false` |
| `contrast` | Some pages need more contrast for readability reason. This can be enhanced using this property. | `boolean` | `false` |

## Slots

| Slot name     | Description                                               |
| ------------- | --------------------------------------------------------- |
| Default slot  | The content of the page.                                  |
| `title`       | The title of the page displayed centered in the toolbar.  |
| `toolbar-end` | An element that can be added to the `end` of the toolbar. |
