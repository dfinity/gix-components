<script lang="ts">
    import QRCode from "$lib/components/QRCode.svelte";
    import logoOnChainDark from "$lib/assets/logo-onchain-dark.svg";
</script>

# QR Code

Generates a [QR Code](https://www.qrcode.com/).

## Showcase

<QRCode value="https://nns.ic0.app/" ariaLabel="Network Nervous System" >
  <img
    src={logoOnChainDark}
    role="presentation"
    alt="Test logo"
    loading="lazy"
    slot="logo"
    style="background: var(--secondary); color: var(--secondary-contrast); width: 20vw; height: 20vw; padding: var(--padding-2x); border-radius: 50%;"
  />
</QRCode>
