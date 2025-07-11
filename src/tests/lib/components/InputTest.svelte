<script lang="ts">
  import Input from "$lib/components/Input.svelte";

  export let props = {};
</script>

<Input {...props}>
  <svelte:fragment slot="end">
    <button>Test Button</button>
  </svelte:fragment>
  <svelte:fragment slot="start">
    <button>Left Button</button>
  </svelte:fragment>
</Input>
