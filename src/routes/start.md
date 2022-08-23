# Getting Started

Welcome to GIX Components! GIX Components are currently used in [NNS-dapp](https://nns.ic0.app/). If you’re just getting started with designing or developing a (client side) dapp for the [Internet Computer](https://internetcomputer.org/), you’re in the right place.

## Principles

These design principles are the foundation of the `gix-components`.

### Do not reinvent the wheel

If the design of an element can be solved with `CSS` styling only, then no particular component should be created - e.g. that is why `<button />` are native HTML elements.

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

Once the library added to your project, components can be used without further settings. However, you will need to load the global styles.

### Load Global Styles

The styles provided by the kit are not pre-compiled - i.e. is not provided as `CSS` files but as `SCSS`. Make sure that a SASS preprocessing is installed in your project.

Within a `script` tag in your layout or app, import the global style of the library.

```html
<style lang="scss" global>
  @import "@dfinity/gix-components/styles/global.scss";
</style>
```

We do not plan at the moment to bundle `CSS` files as we are using `Sass` in our consumer apps but, if you have such requirements let us know.

## Technology

GIX components are developed with [SvelteKit](https://kit.svelte.dev/). They were originally developed in Svelte for the [NNS-dapp](https://github.com/dfinity/nns-dapp/) rewrite.

Currently, they are packaged as pure Svelte components - e.g. are not shipped as custom elements. If your concrete use case needs their usage in another language, please reach out.

## Fonts

`CircularXX` is the copyrighted font used to make the typography shine. If you own the copyright, the [fonts](https://github.com/dfinity/gix-components/tree/main/static) folder - providing `CircularXXWeb-Bold.woff2` and `CircularXXWeb-Regular.woff2` - can be copied to the `assets` folder of your dapp - e.g. `https://canister-id.ic0.app/assets/fonts/...`.

Otherwise, specify another global `font-family` that shall be used on the `body` element.

## Internationalization

Currently only provided in english, the design system supports i18n. If it were to be translated, a setup function will be exposed to select language and other i18n options.
