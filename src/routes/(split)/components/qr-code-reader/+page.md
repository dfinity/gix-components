<script lang="ts">
    import Modal from "$lib/components/Modal.svelte";
    import QRCodeReaderModal from "$lib/components/QRCodeReaderModal.svelte";
    import { toastsStore } from "$lib/stores/toasts.store";
    
    let visible = false;
    let renderQRCodeReader = false;
    let qrCode = undefined; 

    const close = () => {
        visible = false;
        renderQRCodeReader = false;
    }

    const error = () => toastsStore.show({
        text: "QR code error",
        level: "error"
    });
</script>

# QR Code Reader

Read a QR Code with the camera of the device.

```javascript
<QRCodeReader on:nnsQRCode={({ detail }) => console.log(detail)} />
```

## Notes

If used in a modal, prefer the wrapper `<QRCodeReaderModal />`.

## Library

This component uses the library [jsQR](https://github.com/cozmo/jsQR).

## Events

| Event            | Description                                                                   |
| ---------------- | ----------------------------------------------------------------------------- |
| `nnsQRCode`      | The QR code value. Cannot be `undefined` nor empty.                           |
| `nnsQRCodeError` | An error thrown if the component cannot instantiate the camera of the device. |

## Showcase

<div data-tid="showcase" style="max-width: 30vw">

<button on:click={() => (visible = true)} class="primary" data-tid="qr-code-modal">
Open modal
</button>

<p style="padding-top: var(--padding-2x);" class="label">Result:</p>

<textarea style="width: 100%; resize: none; border: 2px solid var(--primary); border-radius: var(--border-radius)" rows="10">
    {qrCode ?? ""}
</textarea>

</div>

<Modal {visible} on:nnsClose={close} on:introend={() => renderQRCodeReader = true}>
<svelte:fragment slot="title">Scan QR Code</svelte:fragment>

{#if renderQRCodeReader}
<QRCodeReaderModal on:nnsQRCode={({detail: value}) => {
close();
qrCode = value;
}} on:nnsQRCodeError={error} />
{/if}
</Modal>
