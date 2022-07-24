# Getting Started

Welcome to Gix components! Gix components are currently used in [NNS-dapp](https://nns.ic0.app/). If you’re just getting started with designing or developing a (client side) dapp for the [Internet Computer](https://internetcomputer.org/), you’re in the right place.

## Principles

TODO: a brief explanations of the principles

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

### Internationalization

Currently only provided in english, the design system supports i18n. If it were to be translated, a setup function will be exposed to select language and other i18n options.
