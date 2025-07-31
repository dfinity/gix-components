<script lang="ts">
  import Input from "$lib/components/Input.svelte";

  interface Props {
    decimals?: number;
    value?: string | undefined;
  }

  let { decimals = 8, value = $bindable() }: Props = $props();
</script>

<Input {decimals} inputType="currency" bind:value />
<p>Amount: <output data-tid="amount-decimals-output">{value ?? ""}</output></p>
