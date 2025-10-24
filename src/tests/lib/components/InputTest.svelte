<script lang="ts">
  import Input, {
    type Props as InputProps,
  } from "$lib/components/Input.svelte";

  let props: InputProps = $props();
</script>

<Input {...props}>
  {#snippet end()}
    <button>Test Button</button>
  {/snippet}
  {#snippet start()}
    <button>Left Button</button>
  {/snippet}
</Input>
