# Theming

Two themes - `dark` and `light` - are provided, `dark` being the default theme.

A particular mode can be defined by setting a corresponding attribute `theme` on the root `html` element.

```html
<!doctype html> <html lang="en" theme="dark"></html>
```

## Usage

To init the theme as fast as possible, and therefore to avoid FOUC, we advise to add the following code snippet in your HTML pages.

```javascript
<!-- Init theme as fast as possible -->
<script>
  try {
    const isDarkPreferred = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const currentTheme =
      localStorage.nnsTheme === null ||
      localStorage.nnsTheme === undefined ||
      localStorage.nnsTheme === ""
        ? undefined
        : JSON.parse(localStorage.nnsTheme);

    document.documentElement.setAttribute(
      "theme",
      currentTheme ?? (isDarkPreferred ? "dark" : "light")
    );
  } catch (error) {
    console.error("Error initializing theme", error);
  }
</script>
```

## Component

An opinionated [Theme Toggle](/components/theme-toggle) component is provided to add a theme switcher to your dapp easily.
