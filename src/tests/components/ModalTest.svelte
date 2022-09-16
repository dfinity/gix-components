<script lang="ts">
  import Modal from "$lib/components/Modal.svelte";

  export let visible: boolean;
</script>

<Modal {visible} on:nnsClose>
  <h3 slot="title">Test</h3>
</Modal>
