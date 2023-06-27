<script lang="ts">
  import Modal from "$lib/components/Modal.svelte";

  export let visible: boolean;
  export let disablePointerEvents = false;
  export let subTitle: string | undefined = undefined;
</script>

<Modal {visible} {disablePointerEvents} on:nnsClose>
  <h3 slot="title">Test</h3>
  <p slot="sub-title">{subTitle}</p>
</Modal>
