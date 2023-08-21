<script lang="ts">
  import PageBanner from "$lib/components/PageBanner.svelte";
  import IconAccounts from "$lib/icons/IconAccounts.svelte";
</script>

# PageBanner

An opinionated container to render the main banner for landing pages.

| Property | Description                                                     | Type                    | Default     |
| -------- | --------------------------------------------------------------- | ----------------------- | ----------- |
| `testId` | Add a `data-tid` attribute to the DOM, useful for test purpose. | `string` or `undefined` | `undefined` |

## Slots

| Slot name     | Description                                                                            |
| ------------- | -------------------------------------------------------------------------------------- |
| `image`       | Image appearing at the start of the banner. Width and height are set by the component. |
| `title`       | Title of the banner.                                                                   |
| `description` | Slot below the title but above the actions. It should introduce or explain the banner. |
| `actions`     | Located below the description. Useful to add call to actions such as logging in.       |

## Showcase

The component has its own backbground color, which depends on the theme.

### Example

<PageBanner testId="showcase">
  <IconAccounts slot="image" />
  <span slot="title">Your ICP Wallet</span>
  <p slot="description" class="description">Create and link accounts (including hardware wallets), transfer ICP, participate in Internet Computer governance by staking ICP in neurons, and earn voting rewards.</p>
  <button class="primary" slot="actions">Connect with Internet Identity</button>
</PageBanner>

<br />

<style lang="scss">
  .description {
    margin: 0;
  }
</style>

#### Code

```
<PageBanner>
  <IconAccounts slot="image" />
  <span slot="title">Your ICP Wallet</span>
  <p slot="description">Create and link accounts (including hardware wallets), transfer ICP, participate in Internet Computer governance by staking ICP in neurons, and earn voting rewards.</p>
  <button class="primary" slot="actions">Connect with Internet Identity</button>
</PageBanner>
```
