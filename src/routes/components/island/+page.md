# Island

A component that renders an "Island" - a container that contains an inner scroll. Useful to make your data shine within the main content pane.

These lines are by the way displayed within such a component 🤪.

```javascript
<Content>
  <Title slot="title">My dapp page</Title>

  <Island>
      <h1>Hello World</h1>
  </Island>
</Content>
```

## Slots

| Slot name     | Description                |
| ------------- |----------------------------|
| Default slot  | The content of the island. |