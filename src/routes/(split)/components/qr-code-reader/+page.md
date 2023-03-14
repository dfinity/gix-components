<script lang="ts">
    import Modal from "$lib/components/Modal.svelte";
    import QRCodeReaderModal from "$lib/components/QRCodeReaderModal.svelte";
    
    let visible = false;
    let renderQRCodeReader = false;
    let qrCode = undefined; 

    const close = () => {
        visible = false;
        renderQRCodeReader = false;
    }
</script>

# QR Code Reader

## Showcase

<button on:click={() => (visible = true)} class="primary">
Open modal
</button>

<Modal {visible} on:nnsClose={close} on:introend={() => renderQRCodeReader = true}>
<svelte:fragment slot="title">Scan QR Code</svelte:fragment>

{#if renderQRCodeReader}
<QRCodeReaderModal on:nnsQRCode={({detail: value}) => {
close();
qrCode = value;
}} />
{/if}
</Modal>

<p style="padding-top: var(--padding-2x);" class="label">Result:</p>

<textarea style="width: 100%; resize: none; border: 2px solid var(--primary); border-radius: var(--border-radius)" rows="10">
    {qrCode ?? ""}
</textarea>
