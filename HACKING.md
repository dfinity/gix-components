# Hacking

This document list a couple of useful information to develop and deploy the `gix-components`.

## Visual comparisons

From Playwright [documentation](https://playwright.dev/docs/test-snapshots):

> Playwright Test includes the ability to produce and visually compare screenshots using `await expect(page).toHaveScreenshot()`. On first execution, Playwright test will generate reference screenshots. Subsequent runs will compare against the reference.

To implement a test proceed as following:

1. Add an e2e test in `./e2e`
2. Implement the test by automating an action browsing the documentation website
   a. Use `await expect(page).toHaveScreenshot()` within the test
   b. Commonly a `data-tid="showcase"` is used to wrap the showcase section of the page that is tested and is used within the test to scroll to the particular section
3. Run a first time locally `npm run e2e` to generate the screenshots
4. Run a second time locally `npm run e2e` to validate the test

## Deployment

Once your principal added to the controllers of the wallet, deploy the documentation to `mainnet` with the following command:

```bash
dfx deploy --network ic --wallet cvthj-wyaaa-aaaad-aaaaq-cai
```
