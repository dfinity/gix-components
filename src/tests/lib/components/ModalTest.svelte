<script lang="ts">
  import Modal from "$lib/components/Modal.svelte";

  export let visible: boolean;
  export let disablePointerEvents = false;
  export let subTitle: string | undefined = undefined;
</script>

<Modal {disablePointerEvents} {visible} on:nnsClose>
  <h3 slot="title">Test</h3>
  <p slot="sub-title">{subTitle}</p>
  <span slot="header-left" data-tid="header-left-content"
    >Left Header Content</span
  >
  <span slot="header-right" data-tid="header-right-content"
    >Right Header Content</span
  >
</Modal>
