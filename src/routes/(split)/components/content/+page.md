# Content

A component that renders a header and your content.

```javascript
<Content>
  {#snippet title()}<Title>My dapp page</Title>{/snippet}

  <main>
    <slot />
  </main>
</Content>
```

## Properties

| Property | Description                                                     | Type       | Default  |
| -------- | --------------------------------------------------------------- | ---------- | -------- |
| `back`   | Display an arrowed `back` button instead of the hamburger menu. | `boolean`  | `false`  |
| `onBack` | A function to call when the back button is clicked.             | `function` | () => {} |

## Snippets

| Snippet name    | Description                                               |
| --------------- | --------------------------------------------------------- |
| Default snippet | The content of the page.                                  |
| `title`         | The title of the page displayed centered in the toolbar.  |
| `toolbarEnd`    | An element that can be added to the `end` of the toolbar. |
