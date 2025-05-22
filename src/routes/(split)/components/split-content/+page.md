# Split Content

A component that renders a header, a column and your content.

> This is the layout used in this documentation to present the [Components](/components)

```javascript
<SplitContent>
  {#snippet start()}<div>My column details</div>{/snippet}

  {#snippet title()}<Title>My dapp page</Title>{/snippet}

    {#snippet end()}
      <main>
        <slot />
      </main>
    {/snippet}
</SplitContent>
```

## Properties

| Property              | Description                                                                                | Type                      | Default     |
| --------------------- | ------------------------------------------------------------------------------------------ | ------------------------- | ----------- |
| `onBack`              | When provided, the `Back` button will be shown and it will call the function when clicked. | `function` or `undefined` | `undefined` |
| `resetScrollPosition` | A function to reset the scrollable content scroll position.                                | `function`                | `function`  |

## Snippets

| Snippet name | Description                                                                |
| ------------ | -------------------------------------------------------------------------- |
| `start`      | A column displayed next to the menu.                                       |
| `end`        | The content of the page.                                                   |
| `title`      | The title of the page displayed centered in the toolbar of the `end` slot. |
| `toolbarEnd` | An element that can be added to the `end` of the toolbar.                  |
