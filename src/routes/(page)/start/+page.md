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

Once the library added to your project, components can be use without further settings.

However, you will need to load the global styles (see [Usage](/styling/usage)) and define which theme option (see [Theming](/styling/theming)) you would like to apply to make your dapp looks awesome!

## Technology

GIX components are developed with [SvelteKit](https://kit.svelte.dev/). They were originally developed in Svelte for the [NNS-dapp](https://github.com/dfinity/nns-dapp/) rewrite.

Currently, they are packaged as pure Svelte components - e.g. are not shipped as custom elements. If your concrete use case needs their usage in another language, please reach out.

## Internationalization

Currently only provided in english, the design system supports i18n. If it were to be translated, a setup function will be exposed to select language and other i18n options.
In the meanwhile, the `i18n` store is being exported so that it can be set specifically in the consumer app, if needed.

```typescript
import fr from "i18n/fr.json";
import { i18n } from "@dfinity/gix-components";

i18n.set({
  lang: "fr",
  ...fr,
});
```
