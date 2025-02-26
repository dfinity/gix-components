# System Theme Listener

A component that listens to changes in the users system/OS theme.

# Usage

```javascript
<SystemThemeListener />
```

> By default, the newly selected theme will be saved in themeStore (as long as a theme has not been explicitly selected / system setting is selected).
>
> You may also pass a custom event handler to extend/add to this behavior:

```javascript
<SystemThemeListener
  on:nnsSystemThemeChange={(e: CustomEvent<MediaQueryListEvent>) =>
    console.log(`User selected ${e.detail.matches ? "dark" : "light"} mode`)
  }
/>
```

## Slots

| Slot name    | Description                                                                                                                                                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Default slot | Renders wrapped components<br/><br/>**Note:** Even though you can wrap other elements, the event listener that gets registered is global and not only applied to child elements, so it will always trigger as long as the SystemThemeListener component is mounted. |

## Events

| Event                  | Description                             | Detail                             |
| ---------------------- | --------------------------------------- | ---------------------------------- |
| `nnsSystemThemeChange` | Triggered when the system theme changes | `CustomEvent<MediaQueryListEvent>` |
