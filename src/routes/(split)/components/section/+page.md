<script lang="ts">
  import Section from "$lib/components/Section.svelte";
  import KeyValuePair from "$lib/components/KeyValuePair.svelte";
</script>

# Section

An opinionated container to render sections with a title, value, description and content.

```javascript
<Section>
    {#snippet title()}<h3>Section Title</h3>{/snippet}
    {#snippet end()}<p>123</p>{/snippet}
    {#snippet description()}<p>This is the section description.</p>{/snippet}
    <ul>
      <li>Maybe render a list</li>
      <li>Of items inside</li>
      <li>The section</li>
    </ul>
</Section>
```

## Properties

| Property | Description                                                     | Type                    | Default     |
| -------- | --------------------------------------------------------------- | ----------------------- | ----------- |
| `testId` | Add a `data-tid` attribute to the DOM, useful for test purpose. | `string` or `undefined` | `undefined` |

## Snippets

| Snippet       | Description                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------ |
| `title`       | Title of the section.                                                                            |
| `end`         | Set in line with the title in the other side. Used in case the title refers to a value.          |
| `description` | Slot below the title and value but above the content. It should introduce or explain the content |
| Default slot  | The content inside the section                                                                   |

## Showcase

The component is within a `div` with a background to highlight the component exactly as it is.

**IMPORTANT: The component has no internal padding nor margin. The spacing with the other components is responsibility of the parent.**

### Simple example

<div class="wrapper">
  <Section>
    {#snippet title()}<h3>Title</h3>{/snippet}
    {#snippet end()}<h5>123</h5>{/snippet}
    {#snippet description()}<p>This is a description</p>{/snippet}
    <p>Here would go any content that we want.</p>
    <p>It can be more than one element.</p>
    <p>They would all go here.</p>
  </Section>
</div>

#### No description example

<div class="wrapper">
  <Section>
    {#snippet title()}<h3>Title</h3>{/snippet}
    {#snippet end()}<h5>123</h5>{/snippet}
    <p>Here would go any content that we want.</p>
    <p>It can be more than one element.</p>
    <p>They would all go here.</p>
  </Section>
</div>

### Real production example

<div class="wrapper">
  <Section>
    {#snippet title()}<h3>Advanced details & settings</h3>{/snippet}
    {#snippet description()}<p class="description">Advanced preferences for managing your neuron</p>{/snippet}
    <div class="attributes">
      <KeyValuePair>
        {#snippet key()}<span class="label">Neuron ID</span>{/snippet}
        {#snippet value()}<span class="value">2489875486030084829</span>{/snippet}
      </KeyValuePair>
      <KeyValuePair>
        {#snippet key()}<span class="label">Date created</span>{/snippet}
        {#snippet value()}<span class="value">2023-06-24, 18:00:51 UTC</span>{/snippet}
      </KeyValuePair>
      <KeyValuePair>
        {#snippet key()}<span class="label">Age</span>{/snippet}
        {#snippet value()}<span class="value">0 years</span>{/snippet}
      </KeyValuePair>
      <button class="secondary">Split Neuron</button>
    </div>
  </Section>
</div>

#### Real production code

Below is the code for the real production example:

```javascript
<div class="wrapper">
  <!-- prettier-ignore -->
  <Section>
    <h3 slot="title">Advanced details & settings</h3>
    <p slot="description" class="description">
      Advanced preferences for managing your neuron
    </p>
    <div class="attributes">
      <KeyValuePair>
        <span class="label">Neuron ID</span>
        <span class="value">2489875486030084829</span>
      </KeyValuePair>
      <KeyValuePair>
        <span class="label">Date created</span>
        <span class="value">2023-06-24, 18:00:51 UTC</span>
      </KeyValuePair>
      <KeyValuePair>
        <span class="label">Age</span>
        <span class="value">0 years</span>
      </KeyValuePair>
      <button class="secondary">Split Neuron</button>
    </div>
  <!-- prettier-ignore -->
  </Section>
</div>

<style>
  .wrapper {
    background-color: var(--card-background);
    margin: var(--padding-2x) 0;
    & p,
    h3, h5 {
      margin: 0;
    }
  }

  .attributes {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: var(--padding-2x);
  }
</style>
```

<style>
  .wrapper {
    background-color: var(--card-background);
    margin: var(--padding-2x) 0;
    & p, h3, h5 {
      margin: 0;
    }
  }

  .attributes {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: var(--padding-2x);

    margin-bottom: var(--padding-2x);
  }
</style>
