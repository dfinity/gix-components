# GIX Components

GIX Components is a UI kit developed with [SvelteKit](https://kit.svelte.dev) by the GIX team.

## Getting Started

The component library has been originally implemented for the frontend [dapp](https://nns.ic0.app/) of the Network Nervous System (NNS).

It undergoes continuous improvements, and its showcase and documentation are deployed on the IC: [https://gix.design/](https://gix.design/).

## Installation

Install `gix-components` as a dependency.

```bash
npm i @dfinity/gix-components
```

## Packaging

Running `npm run package` bundles the library. It takes the contents of `src/lib` and generate a `dist` directory.

The root directory can be used to consume a local version of `gix-components` in another project (`npm i /../gix-components`).
However, to run 'jest' unit tests in the other project, the library needs to be packed first (`cd package && npm pack`) before being installed (e.g. `npm i /../gix-components/dfinity-gix-components-0.0.1.tgz`).

See [documentation](https://kit.svelte.dev/docs/packaging) for more information.

## Documentation & Showcase

To run the documentation locally, `npm run dev` can be executed.

Running `npm run build` will bundle the showcase. It should be executed before deploying the documentation to a canister smart contract.

Note: all pages of the application are set to be pre-rendered per default.
