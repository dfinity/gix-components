# System Theme Listener

A component that listens to changes in the users system/OS theme.

# Usage

```javascript
<SystemThemeListener />
```

> By default, the newly selected theme will be saved in themeStore (as long as a theme has not been explicitly selected / system setting is selected).
>
> You may also pass a custom event handler which overrides the default behavior

```javascript
<SystemThemeListener
  nnsOnChange={(prefersDarkMode) =>
    console.log(`User selected ${prefersDarkMode ? "dark" : "light"} mode`)
  }
/>
```

## Properties

| Property      | Description                                                          | Type                                 | Default |
| ------------- | -------------------------------------------------------------------- | ------------------------------------ | ------- |
| `nnsOnChange` | Override default behavior of saving the selected theme to themeStore | `(prefersDarkMode: boolean) => void` |         |
