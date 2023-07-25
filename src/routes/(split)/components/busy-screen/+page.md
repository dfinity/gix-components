<script lang="ts">
    import { busyStore } from "$lib/stores/busy.store";
    import BusyScreen from "$lib/components/BusyScreen.svelte";

    const initiator = "stake-neuron";
    
    const startBusy = () => busyStore.startBusy({
        initiator: initiator,
        text: 'staking a neuron...',
    });

    const stopBusy = () => busyStore.stopBusy(initiator);

    const click = (e) => {
        e.preventDefault();
        startBusy();
        setTimeout(() => stopBusy(), 1000);
    }
    
</script>

# BusyScreen

A BusyScreen is a screen that displays a spinning loader and corresponding message (if available), while an application is loading content or performing another process. The component has an absolute centered positioning with a faded overlay.

```javascript
<BusyScreen />
```

## Usage

The `<BusyScreen />` component should be provided once for your dapp, commonly added to your root layout.

Showing or hiding the screen happens through the use of a writable storage `busyStore`:

```typescript
busyStore.startBusy({
  initiator: "stake-neuron",
  text: "staking a neuron...",
});

busyStore.stopBusy("stake-neuron");
```

The `startBusy` method will take in an object with properties `initiator` and `text`. The initiator is the identifying key label of your busyStore , while the text will be the message shown on the busy screen.

| busyStore | Description                  | Argument type                                             |
| --------- | ---------------------------- | --------------------------------------------------------- |
| startBusy | to activate the BusyScreen   | `BusyState` object with properties `initiator` and `text` |
| stopBusy  | to deactivate the BusyScreen | `initiator`                                               |

## Showcase

<div data-tid="showcase">
<button data-tid="busy-display" class="primary" id="start" on:click={click}>Click to start Busy Screen</button>
<BusyScreen />
</div>
