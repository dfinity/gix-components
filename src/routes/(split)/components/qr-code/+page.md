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
</script>

# QR Code

Generates a [QR Code](https://www.qrcode.com/).

## Styling

The component fits the available space where it is used. Therefore, the parents should be rendered before mounting this component.

## Showcase

{#if QRCode !== undefined}
<svelte:component this={QRCode} value="https://nns.ic0.app/" ariaLabel="Network Nervous System" >
<img
        src={logoOnChainDark}
        role="presentation"
        alt="Test logo"
        loading="lazy"
        slot="logo"
        style="background: var(--secondary); color: var(--secondary-contrast); width: 20vw; height: 20vw; padding: var(--padding-2x); border-radius: 50%;"
      />
</svelte:component>
{/if}
