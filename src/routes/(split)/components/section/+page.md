<script lang="ts">
  import Section from "$lib/components/Section.svelte";
  import KeyValuePair from "$lib/components/KeyValuePair.svelte";
</script>

# Section

An opinionated container to render sections with a title, value, description and content.

```html
<!-- prettier-ignore -->
<Section>
  <h3 slot="title">Section Title</h3>
  <p slot="end">123</p>
  <p slot="description">This is the section description.</p>
  <ul>
    <li>Maybe render a list</li>
    <li>Of items inside</li>
    <li>The section</li>
  </ul>
</Section>
```

| Property | Description                                                     | Type                    | Default     |
| -------- | --------------------------------------------------------------- | ----------------------- | ----------- |
| `testId` | Add a `data-tid` attribute to the DOM, useful for test purpose. | `string` or `undefined` | `undefined` |

## Slots

| Slot name     | Description                                                                                      |
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
    <h3 slot="title">Title</h3>
    <h5 slot="end">123</h5>
    <p slot="description">This is a description</p>
    <p>Here would go any content that we want.</p>
    <p>It can be more than one element.</p>
    <p>They would all go here.</p>
  </Section>
</div>

### Real production example

<div class="wrapper">
  <Section>
    <h3 slot="title">Advanced details & settings</h3>
    <p slot="description" class="description">Advanced preferences for managing your neuron</p>
    <div class="attributes">
      <KeyValuePair>
        <span slot="key" class="label">Neuron ID</span>
        <span slot="value" class="value">2489875486030084829</span>
      </KeyValuePair>
      <KeyValuePair>
        <span slot="key" class="label">Date created</span>
        <span slot="value" class="value">2023-06-24, 18:00:51 UTC</span>
      </KeyValuePair>
      <KeyValuePair>
        <span slot="key" class="label">Age</span>
        <span slot="value" class="value">0 years</span>
      </KeyValuePair>
      <button class="secondary">Split Neuron</button>
    </div>
  </Section>
</div>

#### Real production code

Below is the code for the real production example:

```html
<div class="wrapper">
  <!-- prettier-ignore -->
  <Section>
    <h3 slot="title">Advanced details & settings</h3>
    <p slot="description" class="description">
      Advanced preferences for managing your neuron
    </p>
    <div class="attributes">
      <KeyValuePair>
        <span slot="key" class="label">Neuron ID</span>
        <span slot="value" class="value">2489875486030084829</span>
      </KeyValuePair>
      <KeyValuePair>
        <span slot="key" class="label">Date created</span>
        <span slot="value" class="value">2023-06-24, 18:00:51 UTC</span>
      </KeyValuePair>
      <KeyValuePair>
        <span slot="key" class="label">Age</span>
        <span slot="value" class="value">0 years</span>
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
    h3 {
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
    & p, h3 {
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
