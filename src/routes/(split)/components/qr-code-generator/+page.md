<script lang="ts">
    import { browser } from "$app/environment";
    import type { SvelteComponent } from "svelte";
    import { onMount } from "svelte";
    import logoOnChainDark from "$lib/assets/logo-onchain-dark.svg";

    let QRCode: typeof SvelteComponent | undefined = undefined;

    onMount(async () => {
        if (!browser) {
            return;
        }

        QRCode = (await import("../../../../lib/components/QRCode.svelte")).default;
    });

    const NNS = "https://nns.ic0.app/";
    const II = "https://identity.ic0.app/";

    let value = NNS;

    const toggle = () => value = value === NNS ? II : NNS; 
</script>

# QR Code Generator

Generates a [QR Code](https://www.qrcode.com/).

```html
<QRCode value="https://nns.ic0.app/" ariaLabel="Network Nervous System">
  <img
    src="./img/logo.svg"
    role="presentation"
    alt="Test logo"
    loading="lazy"
    slot="logo"
  />
</QRCode>
```

## Library

This component uses the library [qr-creator](https://github.com/nimiq/qr-creator).

## Properties

| Property          | Description                                                                                                                                     | Type                     | Default     |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ----------- |
| `ariaLabel`       | An accessible label for the QR code. If `undefined` the `value` is use as fallback.                                                             | `string` or `undefined`  | `undefined` |
| `value`           | A value to be encoded within the QR code. On change the QR code is re-drawed.                                                                   | `string`                 |             |
| `fillColor`       | The fill color ("the color of the small squares").                                                                                              | `string`                 | `black`     |
| `backgroundColor` | The background color of the QR code.                                                                                                            | `string`                 | `white`     |
| `radius`          | Radius.                                                                                                                                         | `number`                 | `0`         |
| `ecLevel`         | The error correction level. See [https://www.qrcode.com/en/about/error_correction.html](https://www.qrcode.com/en/about/error_correction.html). | `L` or `M` or `Q` or `H` | `H`         |

## Styling

The component fits the available space where it is used. Therefore, the parents should be rendered before mounting this component.

## Slots

| Slot name | Description                                  |
| --------- | -------------------------------------------- |
| `logo`    | An optional logo displayed over the QR code. |

## Showcase

<div data-tid="showcase" style="max-width: 30vw">

<button class="primary" on:click={toggle} style="margin: 0 0 var(--padding-2x);" data-tid="qr-code-toggle">Toggle value</button>

{#if QRCode !== undefined}
<svelte:component this={QRCode} {value} ariaLabel="Network Nervous System" >
<img
        src={logoOnChainDark}
        role="presentation"
        alt="Test logo"
        loading="lazy"
        slot="logo"
        style="width: 5vw; height: 5vw; background: var(--secondary); color: var(--secondary-contrast); padding: var(--padding-2x); border-radius: 50%;"
      />
</svelte:component>
{/if}

</div>
