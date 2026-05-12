<script lang="ts">
    import Popover from "$lib/components/Popover.svelte";
    import {IconMenu, IconUser, IconLogout, IconWallet, IconLightMode, IconDarkMode} from "$lib/icons";
    let visible = false;
    let button: HTMLButtonElement | undefined;
    let visible2 = false;
    let button2: HTMLButtonElement | undefined;
    let visible3 = false;
    let button3: HTMLButtonElement | undefined;
    let visibleFlipLtr = false;
    let buttonFlipLtr: HTMLButtonElement | undefined;
    let visibleFlipRtl = false;
    let buttonFlipRtl: HTMLButtonElement | undefined;

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

# Auto-flip at the viewport edges

Popovers prefer the requested `direction` but flip to the opposite side when the
preferred side would overflow the viewport. The two triggers below are pinned
to the right and left edges respectively; their popovers grow back towards the
center.

<div id="flip-display">
    <button
        data-tid="popover-flip-ltr"
        class="primary"
        bind:this={buttonFlipLtr}
        on:click={() => (visibleFlipLtr = !visibleFlipLtr)}
    >
        Prefers ltr (right edge)
    </button>
    <Popover bind:visible={visibleFlipLtr} anchor={buttonFlipLtr} direction="ltr">
        <div class="flip-content">
            This popover would overflow on the right, so it flips to grow leftwards.
        </div>
    </Popover>
    <button
        data-tid="popover-flip-rtl"
        class="primary"
        bind:this={buttonFlipRtl}
        on:click={() => (visibleFlipRtl = !visibleFlipRtl)}
    >
        Prefers rtl (left edge)
    </button>
    <Popover bind:visible={visibleFlipRtl} anchor={buttonFlipRtl} direction="rtl">
        <div class="flip-content">
            This popover would overflow on the left, so it flips to grow rightwards.
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
    button {
        margin-right: 2rem;
    }
    #flip-display {
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    #flip-display button {
        margin-right: 0;
    }
    .flip-content {
        max-width: 18rem;
    }
</style>
<br />

# Usage

The popover placement will be below the anchor element, either from left to right (default)
or from right to left. The `direction` prop is a _preference_: when the requested side
would push the panel past the viewport edge, the popover flips to the opposite side. When
neither side has room for the panel's natural width, the panel is shifted along the
viewport so it still fits at its natural size, and only shrinks (via the existing
`max-width` clamp) once it is wider than the viewport itself. The vertical placement
behaves the same way today via `max-height`.

```javascript
<script lang="ts">
    let visible = false;
    let button: HTMLButtonElement | undefined;
</script>
<button
  class="primary"
  bind:this="{button}"
  on:click={() => (visible = !visible)}
>
    Open Popover
</button>
<Popover bind:visible anchor={button}>
    This is a popover!
</Popover>
```

# Properties

| Property            | Description                                                                                     | Type                         | Default     |
| ------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------- | ----------- |
| `visible`           | Display or hide the popover.                                                                    | `boolean`                    | `false`     |
| `direction`         | Preferred layout direction (`ltr` or `rtl`). Flips automatically when overflowing the viewport. | `string`                     | `ltr`       |
| `anchor`            | The anchor element on which the popover depends on.                                             | `HTMLElement` or `undefined` | `undefined` |
| `closeButton`       | Option to add a close button on top right corner.                                               | `true` or `undefined`        | `undefined` |
| `invisibleBackdrop` | Don't darken and blur the background while the popup is open.                                   | `true` or `undefined`        | `undefined` |
