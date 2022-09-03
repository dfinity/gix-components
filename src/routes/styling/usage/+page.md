# Usage

Within a `script` tag in your layout or app, import the `global.scss` of the library to setup the global style.

> The style provided by the kit is not pre-compiled - i.e. is not provided as `CSS` files but as `SCSS`. Make sure that a SASS preprocessing is installed in your project.

```html
<style lang="scss" global>
  @import "@dfinity/gix-components/styles/global.scss";
</style>
```

We do not plan at the moment to bundle `CSS` files as we are using `Sass` in our consumer apps but, if you have such requirements let us know.
