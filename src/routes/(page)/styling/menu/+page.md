# Theming

On large+ screen, the menu can either be displayed as "collapsed" or "expanded". Default being "expanded".

A particular mode can be defined by setting a corresponding attribute `menu` on the root `html` element.

```html
<!doctype html>
<html lang="en" menu="expanded"></html>
```

## Usage

To init the menu as fast as possible, and therefore to avoid FOUC, we advise to add the following code snippet in your HTML pages.

```javascript
<!-- Init menu as fast as possible as well -->
<script>
    try {
        const currentMenu = !localStorage.nnsMenu
            ? undefined
            : JSON.parse(localStorage.nnsMenu);

        document.documentElement.setAttribute(
        "menu",
        currentMenu ?? "expanded",
        );
    } catch (error) {
        console.error("Error initializing menu", error);
    }
</script>
```
