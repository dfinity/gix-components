<script lang="ts">
    import Modal from "$lib/components/Modal.svelte";
    import QRCodeReader from "$lib/components/QRCodeReader.svelte";
    
    let visible = false;
</script>

# QR Code Reader

## Showcase

<button on:click={() => (visible = true)} class="primary">
Open modal
</button>

<Modal {visible} on:nnsClose={() => (visible = false)}>
<svelte:fragment slot="title">Scan QR Code</svelte:fragment>

<QRCodeReader />
</Modal>
