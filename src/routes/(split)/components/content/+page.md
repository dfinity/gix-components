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

| Property | Description                                                                                | Type                      | Default     |
| -------- | ------------------------------------------------------------------------------------------ | ------------------------- | ----------- |
| `onBack` | When provided, the `Back` button will be shown and it will call the function when clicked. | `function` or `undefined` | `undefined` |

## Snippets

| Snippet name    | Description                                               |
| --------------- | --------------------------------------------------------- |
| Default snippet | The content of the page.                                  |
| `title`         | The title of the page displayed centered in the toolbar.  |
| `toolbarEnd`    | An element that can be added to the `end` of the toolbar. |
