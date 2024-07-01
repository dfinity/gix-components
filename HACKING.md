# Hacking

This document list a couple of useful information to develop and deploy the `gix-components`.

## Visual comparisons

From Playwright [documentation](https://playwright.dev/docs/test-snapshots):

> Playwright Test includes the ability to produce and visually compare screenshots using `await expect(page).toHaveScreenshot()`. On first execution, Playwright test will generate reference screenshots. Subsequent runs will compare against the reference.

To implement a test, follow these steps:

1. Add an e2e test in the `./e2e` directory.
2. Implement the test by automating an action on the documentation website:
   - Use `await expect(page).toHaveScreenshot()` within the test.
   - Commonly, a `data-tid="showcase"` is used to wrap the showcase section of the page being tested and is used within the test to scroll to the particular location.
3. Create a PR for your changes.
4. Open the GitHub Actions page and navigate to [Update snapshots](https://github.com/dfinity/gix-components/actions/workflows/snapshots.yml).
5. Manually trigger the generation of screenshots for the CI by running the workflow using your PR or branch.

This last step will generate the screenshots for the CI and add them to your PR. You can trigger this job again at any time you make changes, regardless of whether the test itself changes or not.

### Updating screenshots

Run `npm run e2e:snapshots` locally and use step 7 from before to trigger it in CI also.

## Deployment

Once your principal added to the controllers of the wallet, deploy the documentation to `mainnet` with the following command:

```bash
dfx deploy --network ic --wallet cvthj-wyaaa-aaaad-aaaaq-cai
```
