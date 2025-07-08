<script lang="ts">
  import Input from "$lib/components/Input.svelte";
  import { onMount } from "svelte";

  interface Props {
    decimals?: number;
    value?: string | undefined;
  }

  let { decimals = 8, value = $bindable() }: Props = $props();
</script>

<Input bind:value inputType="currency" {decimals} />
<p>Amount: <output data-tid="amount-decimals-output">{value ?? ""}</output></p>
