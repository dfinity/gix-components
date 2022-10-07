<script lang="ts">
    import Popover from "$lib/components/Popover.svelte";
    import {IconMenu, IconAccount, IconExit, IconWallet, IconLightMode, IconDarkMode} from "$lib/icons";
    let visible = false;
    let button: HTMLButtonElement | undefined;
    let visible2 = false;
    let button2: HTMLButtonElement | undefined;
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
        data-tid="account-menu"
        class="icon-only toggle"
        bind:this={button}
        on:click={() => (visible = !visible)}
    >  
        <IconMenu size={40}/>
    </button>
    <Popover bind:visible anchor={button} closeButton direction="rtl">
        <div class="account">
            <span class="account_icon">
                <IconAccount size={34} />
            </span>Account
        </div>
        <div class="account">
            <span class="account_icon">
                <IconWallet size={34}/>
            </span>Wallet
        </div>
        <div class="account">
            <span class="account_icon">
                <IconExit size={34}/>
            </span>Logout
        </div>
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
    .mode {
        display: flex;
        height: 2rem;
        padding: 1rem 0;
        align-items: center;
        justify-content: space-evenly;
        border-radius: 15px;
    }
    .mode:hover {
        cursor: pointer;
    }
    button {
        margin-right: 2rem;
    }
    .selected {
        background-color: grey;
    }
</style>
<br />

# Usage

The popover placement will be below the anchor element, either from left to right (default)
or from right to left.

```html
<script lang="ts">
    let visible = false;
    let button: HTMLButtonElement | undefined;
</script>
<button class="primary"
    bind:this={button}
    on:click={() => (visible = !visible)}
>
    Open Popover
</button>
<Popover bind:visible anchor={button}>
    This is a popover!
</Popover>
```

# Properties

| Property      | Description                                                          | Type                         | Default     |
| ------------- | -------------------------------------------------------------------- | ---------------------------- | ----------- |
| `visible`     | Display or hide the popover.                                         | `boolean`                    | `false`     |
| `direction`   | Layout direction, either left-to-right `ltr` or right-to-left `rtl`. | `string`                     | `ltr`       |
| `anchor`      | The anchor element on which the popover depends on.                  | `HTMLElement` or `undefined` | `undefined` |
| `closeButton` | Option to add a close button on top right corner.                    | `true` or `undefined`        | `undefined` |
