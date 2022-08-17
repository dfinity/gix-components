<script lang="ts">
    import Card from "$lib/components/Card.svelte";
</script>

# Card

Cards are surfaces that display content and optionally actions on a single topic. They often serve as an entry point to more detailed information.

```html
<Card>
    <h2 slot="start">Everything</h2>
    <h3 slot="end">on-chain</h3>
    
    <p>Advanced smart contracts process HTTP requests, control other chains, and scale infinitely</p>
</Card>
```

## Properties

| Property      | Description                                                                                    | Type                                            | Default     |
|---------------|------------------------------------------------------------------------------------------------|-------------------------------------------------|-------------|
| `role`        | The semantic role of the `article` that will be rendered in the DOM when using this component. | `link` or `button` or `checkbox` or `undefined` | `undefined` |
| `ariaLabel`   | An accessible label for the card.                                                              | `string` or `undefined`                         | `undefined` |
| `selected`    | Display the surface as `selected`. Useful if used as a on/off call to action.                  | `boolean`                                       | `false`     |
| `disabled`    | Disable clickable events.                                                                      | `boolean` or `undefined`                        | `undefined` |
| `testId`      | Add a `data-tid` attribute to the DOM, useful for test purpose.                                | `string`                                        | `card`      |
| `highlighted` | Display the surface as `highlighted`.                                                          | `boolean` or `undefined`                        | `undefined` |
| `withArrow`   | Render an arrow icon / call to action next within the card on the right side.                  | `boolean` or `undefined`                        | `undefined` |

## Slots

| Slot name    | Description                                                                                          |
|--------------|------------------------------------------------------------------------------------------------------|
| Default slot | The content of the card.                                                                             |
| `start`      | A heading title or content displayed at the top left side of the card.                               |
| `end`        | A heading title or content displayed stacked or at the top right side of the card (on wider screen). |

## Events

| Event   | Description                                | Detail    |
|---------|--------------------------------------------|-----------|
| `click` | Propagated click event (if not `disabled`. | Inherited |

## Showcase

<div class="grid" style="margin-top: var(--padding)">
    <Card>
        <h2 slot="start">Start</h2>
        <h3 slot="end">End</h3>

        <p>A basic card.</p>
        <p>Advanced smart contracts process HTTP requests, control other chains, and scale infinitely</p>
    </Card>

    <Card selected>
        <h3>Selected</h3>
        
        <p>Advanced smart contracts process HTTP requests, control other chains, and scale infinitely</p>
    </Card>

    <Card highlighted>
        <h3>Highlighted</h3>

        <p>Advanced smart contracts process HTTP requests, control other chains, and scale infinitely</p>
    </Card>

    <Card withArrow>
        <h3>Arrow</h3>

        <p>Advanced smart contracts process HTTP requests, control other chains, and scale infinitely</p>
    </Card>
</div>
