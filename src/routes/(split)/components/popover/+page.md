<script lang="ts">
    import Popover from "$lib/components/Popover.svelte";
    import {IconMenu, IconUser, IconLogout, IconWallet, IconLightMode, IconDarkMode} from "$lib/icons";
    let visible = false;
    let button: HTMLButtonElement | undefined;
    let visible2 = false;
    let button2: HTMLButtonElement | undefined;
    let visible3 = false;
    let button3: HTMLButtonElement | undefined;

    const customArray = Array.from({length: 500}, (_, i) => i + 1);
</script>

# Popover

A popover is a floating container that is rendered over the content
next to an anchor — commonly a button — which initiates its display.
<br />

# Showcase

<div id="display">
    <button 
        class="primary"
        bind:this={button2} 
        on:click={() => (visible2 = !visible2)}
    >
        Open Popover
    </button>
    <Popover bind:visible={visible2} anchor={button2}>
        This is a popover!
    </Popover>
    <button
        data-tid="popover-menu-display"
        class="icon-only toggle"
        bind:this={button}
        on:click={() => (visible = !visible)}
    >  
        <IconMenu size={40}/>
    </button>
    <Popover bind:visible anchor={button} closeButton invisibleBackdrop direction="rtl">
        <div class="account">
            <span class="account_icon">
                <IconUser size={34} />
            </span>Account
        </div>
        <div class="account">
            <span class="account_icon">
                <IconWallet size={34}/>
            </span>Wallet
        </div>
        <div class="account">
            <span class="account_icon">
                <IconLogout size={34}/>
            </span>Logout
        </div>
    </Popover>
    <button
        data-tid="popover-menu-display-overflow"
        class="icon-only toggle"
        bind:this={button3}
        on:click={() => (visible3 = !visible3)}
    >  
        <IconMenu size={40}/>
    </button>
    <Popover bind:visible={visible3} anchor={button3} closeButton invisibleBackdrop direction="rtl">
        {#each customArray as item}
            <div class="account">
                <span class="account_icon">
                    <IconUser size={34} />
                </span>Account {item}
            </div>
        {/each}
    </Popover>
</div>

<style>
    #display {
        padding: 1rem;
        display: flex;
    }
    .account {
        height: 3rem;
        display: flex;
        align-items: center;
    }
    .account:hover {
        cursor: pointer;
    }
    .account_icon {
        margin-right: 1rem;
    }
    button {
        margin-right: 2rem;
    }
</style>
<br />

# Usage

The popover placement will be below the anchor element, either from left to right (default)
or from right to left.
If the popover should overflow the viewport, it will be automatically resized to fit within the viewport,
and the content will be scrollable.

````html
```javascript
<script lang="ts">
  let visible = false;
  let button: HTMLButtonElement | undefined;
</script>
<button class="primary" bind:this="{button}" on:click="{()" ="">
  (visible = !visible)} > Open Popover
</button>
<Popover bind:visible anchor="{button}"> This is a popover! </Popover>
````

# Properties

| Property            | Description                                                          | Type                         | Default     |
| ------------------- | -------------------------------------------------------------------- | ---------------------------- | ----------- |
| `visible`           | Display or hide the popover.                                         | `boolean`                    | `false`     |
| `direction`         | Layout direction, either left-to-right `ltr` or right-to-left `rtl`. | `string`                     | `ltr`       |
| `anchor`            | The anchor element on which the popover depends on.                  | `HTMLElement` or `undefined` | `undefined` |
| `closeButton`       | Option to add a close button on top right corner.                    | `true` or `undefined`        | `undefined` |
| `invisibleBackdrop` | Don't darken and blur the background while the popup is open.        | `true` or `undefined`        | `undefined` |
