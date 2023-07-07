<script lang="ts">
    import PageHeader from "$lib/components/PageHeader.svelte";
    import icpLogo from "$docs/assets/icp-rounded.svg";

</script>

# Page Header

Used for settings and detail pages to have a first overview of the entity.

```html
<PageHeader>
  <span slot="start">Top left</span>
  <span slot="end">Top right</span>
  <h1 slot="title">Title</h1>
  <h3 slot="subtitle">This page header is inside a card</h3>
</PageHeader>
```

## Properties

| Property | Description                                                     | Type                    | Default     |
| -------- | --------------------------------------------------------------- | ----------------------- | ----------- |
| `testId` | Add a `data-tid` attribute to the DOM, useful for test purpose. | `string` or `undefined` | `undefined` |

## Slots

| Slot name  | Description                                        |
| ---------- | -------------------------------------------------- |
| `title`    | The title of the page.                             |
| `subtitle` | The subtitle of the page.                          |
| `start`    | Additional information to render at the top left.  |
| `end`      | Additional information to render at the top right. |

## Showcase

The component is within a `div` with background to highlight the component exactly as it is.

**IMPORTANT: The component has no internal padding nor external margin. The spacing with the other components is responsibility of the parent using this component.**

### Simple example:

<div class="wrapper">
  <PageHeader>
    <span slot="start">Top left</span>
    <span slot="end">Top right</span>
    <h1 slot="title">Title</h1>
    <h4 slot="subtitle">This is the subtitle</h4>
  </PageHeader>
</div>

### Real production example

<div class="wrapper">
  <PageHeader>
    <span slot="start">
      <div class="universe">
        <img src={icpLogo} alt="icp-logo">
        <span>Internet Computer</span>
      </div>
    </span>
    <span slot="end" class="label">1231231312321232132</span>
    <h1 slot="title">
      <span class="token-value">1.00</span>
      <span class="token-symbol">ICP</span>
    </h1>
    <h4 slot="subtitle" class="description">Voting power: 2.99</h4>
  </PageHeader>
</div>

#### Real production code

Below is the code for the real production example:

```html
<div class="wrapper">
  <PageHeader>
    <span slot="start">
      <div class="universe">
        <img src="{icpLogo}" alt="icp-logo" />
        <span>Internet Computer</span>
      </div>
    </span>
    <span slot="end" class="label">1231231312321232132</span>
    <h1 slot="title">
      <span class="token-value">1.00</span>
      <span class="token-symbol">ICP</span>
    </h1>
    <h4 slot="subtitle" class="description">Voting power: 2.99</h4>
  </PageHeader>
</div>

<style>
  .wrapper {
    background-color: var(--card-background);
    margin: var(--padding-2x) 0;

    & h4,
    h1 {
      margin: 0;
    }
  }

  .universe {
    display: flex;
    align-items: center;
    gap: var(--padding);
  }

  h1 {
    font-size: var(--font-size-huge);
  }

  .token-symbol {
    font-size: var(--font-size-h3);
    color: var(--description-color);
  }
</style>
```

<style>
  .wrapper {
    background-color: var(--card-background);
    margin: var(--padding-2x) 0;

    & h4,
    h1 {
      margin: 0;
    }
  }

  .universe {
    display: flex;
    align-items: center;
    gap: var(--padding);
  }

  h1 {
    font-size: var(--font-size-huge);
  }

  .token-symbol {
    font-size: var(--font-size-h3);
    color: var(--description-color);
  }
</style>
