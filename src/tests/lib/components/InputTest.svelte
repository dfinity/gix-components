<script>
  import Input from "$lib/components/Input.svelte";

  export let props = {};
</script>

<Input {...props}>
  <svelte:fragment slot="right">
    <button>Test Button</button>
  </svelte:fragment>
</Input>
