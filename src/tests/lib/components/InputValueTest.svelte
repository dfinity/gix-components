<script lang="ts">
  import Input from "$lib/components/Input.svelte";
  import { onMount } from "svelte";

  interface Props {
    inputType?: "text" | "icp" | "currency";
    name: string;
    value?: string | undefined;
    placeholder?: string;
    decimals?: number;
    amount?: string | undefined;
  }

  let {
    inputType = "text",
    name,
    value = undefined,
    placeholder = "test.placeholder",
    decimals = 8,
    amount = $bindable(),
  }: Props = $props();

  onMount(() => {
    amount = value;
  });

  $inspect(amount)

  // We want to test that we can change value programmatically
  const changeValue = () => {
    amount = "new value";
  };
</script>

<!-- eslint-disable svelte/valid-compile -->
<span on:click={changeValue} id="test" />

<Input bind:value={amount} {inputType} {name} {placeholder} {decimals} />
