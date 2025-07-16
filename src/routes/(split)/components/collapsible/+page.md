<script lang="ts">
    import Collapsible from "$lib/components/Collapsible.svelte";
    
    let cmp = $state<Collapsible | undefined>();

    let expanded = $state(false);
    let message = $derived(expanded ? 'close' : 'open');
</script>

# Collapsible

Collapsible is an accordion element that expands when clicked on. They allow you to hide content that is not immediately relevant to the user. Buttons or anchors are used as triggers that are mapped to specific elements you toggle.

# Usage

```javascript
<Collapsible iconSize="medium">
  <div slot="header">About smart contracts</div>
  <p>
    Advanced smart contracts process HTTP requests, control other chains, and
    scale infinitely.
  </p>
</Collapsible>
```

#### With an external button

```javascript
<script lang="ts">
    let cmp = $state<Collapsible | undefined>();
</script>

<button class="secondary toggleButton"
  on:click={() => cmp?.toggleContent()}
>
  Press to toggle
</button>

<Collapsible iconSize="medium" expandButton={false} externalToggle={true} bind:this={cmp}>
  <div slot="header" class="header_div">
    Collapsible with external button
  </div>
  <div class="content_text">
    This collapsible uses an external button element to toggle open its content.
  </div>
</Collapsible>
```

## Properties

| Property           | Description                                                     | Type                    | Default     |
| ------------------ | --------------------------------------------------------------- | ----------------------- | ----------- |
| `id`               | Corresponding id of the content element, for selection purposes | `string` or `undefined` | `undefined` |
| `initallyExpanded` | Initially collapsed or expanded                                 | `boolean`               | `false`     |
| `maxContentHeight` | Optional height that defines the maximum content height         | `number` or `undefined` | `undefined` |
| `iconSize`         | Size of the icon: either `small` or `medium`                    | `string`                | `small`     |
| `expandButton`     | Whether to include an expand button                             | `boolean`               | `true`      |
| `externalToggle`   | To have an external toggle element                              | `boolean`               | `false`     |
| `wrapHeight`       | To have wrapped height                                          | `boolean`               | `false`     |

## Slots

| Slot name | Description                                                                              |
| --------- | ---------------------------------------------------------------------------------------- |
| `header`  | Summary header of the collapsible, usually displayed with an anchor button on the right. |

## Events

| Event           | Description                                                           |
| --------------- | --------------------------------------------------------------------- |
| `toggleContent` | A toggle content function that could be bound to an external element. |

## Showcase

<div class="container">
  <div class="collapseA">
    <Collapsible iconSize="medium" maxContentHeight={100} wrapHeight>
      <div slot="header" class="header_div">
        About smart contracts
      </div>
      <p>
        Advanced smart contracts process HTTP requests, control other chains, and
        scale infinitely.
      </p>
    </Collapsible>
  </div>
  <button class="secondary toggleButton" 
    onclick={() => cmp?.toggleContent()}>Press to {message}
  </button>
  <div class="collapseA">
    <Collapsible iconSize="medium" expandButton={false} bind:this={cmp} bind:expanded={expanded} externalToggle>
      <div slot="header" class="header_div">
        Collapsible with external button 
      </div>
      <div>
        This collapsible uses an external element to toggle open its content.
      </div>
    </Collapsible>
  </div>
</div>
<style>
  .container {
    padding: 2rem;
  }
  .collapseA {
    margin: 0.5rem;
    padding: 1rem;
    background-color: silver;
    border-radius: 20px;
    margin-bottom: 8px;
    color: #282828;
  }
  .header_div {
    font-weight: bold;
  }
  .toggleButton {
    margin: 1rem;
  }
</style>
