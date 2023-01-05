<script lang="ts">
    import Card from "$lib/components/Card.svelte";
</script>

# Card

Cards are surfaces that display content and optionally actions on a single topic. They often serve as an entry point to more detailed information.

```html
<Card>
  <h2 slot="start">Everything</h2>
  <h3 slot="end">on-chain</h3>

  <p>
    Advanced smart contracts process HTTP requests, control other chains, and
    scale infinitely
  </p>
</Card>
```

## Properties

| Property    | Description                                                                                    | Type                                                      | Default     |
| ----------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ----------- |
| `role`      | The semantic role of the `article` that will be rendered in the DOM when using this component. | `link` or `button` or `checkbox` or `undefined`           | `undefined` |
| `ariaLabel` | An accessible label for the card.                                                              | `string` or `undefined`                                   | `undefined` |
| `selected`  | Display the surface as `selected`. Useful if used as a on/off call to action.                  | `boolean`                                                 | `false`     |
| `disabled`  | Disable clickable events.                                                                      | `boolean` or `undefined`                                  | `undefined` |
| `testId`    | Add a `data-tid` attribute to the DOM, useful for test purpose.                                | `string`                                                  | `card`      |
| `theme`     | Display a particular theme for surface of the card.                                            | `highlighted` or `transparent` or `button` or `undefined` | `undefined` |
| `icon`      | Render an icon / call to action next within the card on the right side.                        | `arrow` or `expand` or `check` or `undefined`             | `undefined` |

## Slots

| Slot name    | Description                                                                                          |
| ------------ | ---------------------------------------------------------------------------------------------------- |
| Default slot | The content of the card.                                                                             |
| `start`      | A heading title or content displayed at the top left side of the card.                               |
| `end`        | A heading title or content displayed stacked or at the top right side of the card (on wider screen). |

## Events

| Event   | Description                                | Detail    |
| ------- | ------------------------------------------ | --------- |
| `click` | Propagated click event (if not `disabled`. | Inherited |

## Styling

In addition to the style that is inherited by using the component, the library also exposes a SCSS mixins that can be used to style the content projected in the card.

```scss
@use "@dfinity/gix-components/styles/mixins/card";
```

List of the mixins:

| Mixin           | Description                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| `stacked-title` | A column commonly use to display two information in `start` and `end` slots.                                        |
| `list`          | To display a list of information in `ul` without bullet style.                                                      |
| `list-item`     | Style the `li` within above list.                                                                                   |
| `title`         | A title that will be truncated on one line if overflow.                                                             |
| `meta`          | Add space between two information and ensure return to new lines. Commonly used to pressent a `label` and a `value` |

## Showcase

<div class="card-grid" style="margin-top: var(--padding)">
    <Card>
        <h3 slot="start">A basic</h3>
        <h3 slot="end">Card</h3>

        <p>Advanced smart contracts process HTTP requests, control other chains, and scale infinitely</p>
    </Card>

    <Card selected>
        <h3>Selected</h3>

        <p>Advanced smart contracts process HTTP requests, control other chains, and scale infinitely</p>
    </Card>

    <Card disabled>
        <h3>Disabled</h3>

        <p>Advanced smart contracts process HTTP requests, control other chains, and scale infinitely</p>
    </Card>

    <Card>
        <div slot="start" class="title-block">
            <span>Stacked title</span>
            <span>Styling</span>
        </div>

        <p>Advanced smart contracts process HTTP requests, control other chains, and scale infinitely</p>
    </Card>

    <Card>
        <h3>List styling</h3>

        <ul>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
        </ul>
    </Card>

    <Card>
        <div class="meta">
            <span class="value">Meta</span>
            <span class="value">Styling</span>
        </div>

        <div class="meta">
            <span>Label</span>
            <span class="value">Value</span>
        </div>

        <div class="meta">
            <span>Label</span>
            <span class="value">Value</span>
        </div>

        <p class="description">A description - Advanced smart contracts process HTTP requests, control other chains, and scale infinitely</p>
    </Card>

</div>

<p style="padding: var(--padding-4x) 0 var(--padding);">Themes:</p>

<div class="card-grid" style="margin-top: var(--padding)">
    <Card theme="highlighted">
        <h3>Highlighted</h3>

        <p>Advanced smart contracts process HTTP requests, control other chains, and scale infinitely</p>
    </Card>

    <Card theme="transparent">
        <h3>Transparent</h3>

        <p>Advanced smart contracts process HTTP requests, control other chains, and scale infinitely</p>
    </Card>

    <Card theme="button">
        <h3>Button</h3>

        <p>Advanced smart contracts process HTTP requests, control other chains, and scale infinitely</p>
    </Card>

</div>

<p style="padding: var(--padding-4x) 0 var(--padding);">Icons:</p>

<div class="card-grid" style="margin-top: var(--padding)">
    <Card icon="arrow">
        <h3>Arrow</h3>

        <p>Advanced smart contracts process HTTP requests, control other chains, and scale infinitely</p>
    </Card>

    <Card icon="check">
        <h3>Checkmark</h3>

        <p>Advanced smart contracts process HTTP requests, control other chains, and scale infinitely</p>
    </Card>

    <Card icon="check" selected>
        <h3>Checkmark and selected</h3>

        <p>Advanced smart contracts process HTTP requests, control other chains, and scale infinitely</p>
    </Card>

    <Card icon="expand">
        <h3>Expand</h3>

        <p>Advanced smart contracts process HTTP requests, control other chains, and scale infinitely</p>
    </Card>

</div>

<style lang="scss">
  @use "../../../../lib/styles/mixins/card";

  .title-block {
    @include card.stacked-title;
    @include card.title;
  }

  ul {
    @include card.list;
  }

  li {
    @include card.list-item;
  }

  .meta {
    @include card.meta;
  }
</style>
