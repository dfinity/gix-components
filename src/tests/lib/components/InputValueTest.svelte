<script lang="ts">
  import { createEventDispatcher } from "svelte/internal";

  import Input from "$lib/components/Input.svelte";

  const dispatch = createEventDispatcher();

  export let inputType: "text" | "icp" = "text";
  export let name: string;
  export let value: string | undefined = undefined;
  export let placeholder = "test.placeholder";

  let amount: string | undefined = value;
  $: amount, (() => dispatch("testAmount", { amount }))();

  // We want to test that we can change value programmatically
  const changeValue = () => {
    amount = "new value";
  };
</script>

<!-- eslint-disable svelte/valid-compile -->
<span on:click={changeValue} id="test" />

<Input bind:value={amount} {inputType} {name} {placeholder} />
