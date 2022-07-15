# Gix Components

Gix Components is a UI kit developed in Svelte by the Gix team.

## Documentation

The component library is in active development, and new features will incrementally be available.

A full documentation will be available shortly.

## Installation

Install `gix-components` as a dependency.

```bash
npm i @dfinity/gix-components
```

## Usage

### Styling

The styles provided by the kit are not pre-compiled - i.e. is not provided as `CSS` files but as `SCSS`. Make sure that a SASS preprocessing is installed in your project.

Within a `script` tag in your layout or app, import the global style of the library.

```html
<style lang="scss" global>
  @import "@dfinity/gix-components/styles/global.scss";
</style>
```

We do not plan at the moment to bundle `CSS` files as we are using `Sass` in our consumer apps but, if you have such requirements let us know.

### Theming

Two themes - `dark` and `light` - are provided, `dark` being the default theme.

A particular mode can be defined by setting a corresponding attribute `theme` on the root `html` element.  
