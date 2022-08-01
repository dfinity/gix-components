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

### Fonts

`CircularXX` is the copyrighted font required for the expected typography to shine.

The [fonts](https://github.com/dfinity/gix-components/tree/main/static) folder - providing `CircularXXWeb-Bold.woff` and `CircularXXWeb-Regular.woff` - should be copied at the root of your dapp.

### Utilization of Text Opacity

The opacity is used to emphasize the importance of text blocks on the page:

| Text Type   | Opacity                | CSS variable          | CSS class     | Svelte Component |
| ----------- | ---------------------- | --------------------- | ------------- | ---------------- |
| value       | no opacity             | `--value-color`       | `value`       | `<Value>`        |
| label       | `--light-opacity`      | `--label-color`       | `label`       | n/a              |
| description | `--very-light-opacity` | `--description-color` | `description` | n/a              |

_Note: this is not a strict rule. For example the descriptional text can be displayed in `label` style if there is no `label` styled block next to the main block._

### Internationalization

Currently only provided in english, the design system supports i18n. If it were to be translated, a setup function will be exposed to select language and other i18n options.
