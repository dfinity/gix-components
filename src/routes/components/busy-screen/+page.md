<script lang="ts">
    import { busyStore } from "$lib/stores/busy.store";
    import BusyScreen from "$lib/components/BusyScreen.svelte";
    import { type BusyStateInitiatorType } from "$lib/types/busyState";

    const initiator: BusyStateInitiatorType = "stake-neuron";
    
    const startBusy = () => busyStore.startBusy({
        initiator: initiator,
        text: 'staking a neuron...',
    });

    const stopBusy = () => busyStore.stopBusy(initiator);

    const click = (e) => {
        e.preventDefault();
        startBusy();
        setTimeout(() => stopBusy(), 3000);
    }
    
</script>

# BusyScreen

A BusyScreen is a screen that displays a spinning loader and corresponding message (if available), while an application is loading content or performing another process. The component has an absolute centered positioning with the a faded overlay of the screen.

```html
import {busyStore} from "$lib/stores/busy.store"; import BusyScreen from
"$lib/components/BusyScreen.svelte"; const startBusy = () =>
busyStore.startBusy({ initator: 'stake-neuron', text: 'staking a neuron...', })
<button on:click="{startBusy}">click to start</button>
<BusyScreen />
```

## Store: busyStore

The `busyStore` is a writable storage that has the following methods.

| Function Methods | Description                  | Argument type            |
| ---------------- | ---------------------------- | ------------------------ |
| startBusy        | to activate the BusyScreen   | `BusyState`              |
| stopBusy         | to deactivate the BusyScreen | `BusyStateInitiatorType` |
| subscribe        | ...                          | ...                      |

## Showcase

<div>
<button class="primary" id="start" on:click={click}>click to start Busy Screen</button>
<BusyScreen />
</div>

<style>
    .hello {
        background-color: pink;
        minheightt: 5rem;
    }
</style>
