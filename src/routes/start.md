# Getting Started

Welcome to Gix components! Gix components are currently used in [NNS-dapp](https://nns.ic0.app/). If you’re just getting started with designing or developing a (client side) dapp for the [Internet Computer](https://internetcomputer.org/), you’re in the right place.

## Principles

These design principles from the foundation of the `gix-components`.

### Do not reinvent the wheel

If the design of an element can be solved with `css` styling only, then no particular component should be created - e.g. that is why `<button />` are native HTML elements.

### Agnostic

We do indeed use Svelte to develop this design system but, we do not use any other dependencies. Mostly for security reason and to minimize the tech debt.

### Accessibility

The components should be for everyone. We can - and should - always improve but, we try our best to make sure people with different backgrounds can use the dapps in which the design system is being used.

### Testing

Any components and styles has to be ultimately tested. Whether it is with emulated tests or e2e screenshots testing.

## Installation

Install `gix-components` as a dependency.

```bash
npm i @dfinity/gix-components
```

## Usage

Following chapters guide you to use the library.

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

```html
<!DOCTYPE html>
<html lang="en" theme="dark"></html>
```

### Fonts

`CircularXX` is the copyrighted font used to make the typography shine. If you own the copyright, the [fonts](https://github.com/dfinity/gix-components/tree/main/static) folder - providing `CircularXXWeb-Bold.woff2` and `CircularXXWeb-Regular.woff2` - can be copied to the root of your dapp.

Otherwise, specify another global `font-family` that shall be used on the `body` element.

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
