<script lang="ts">
import Input from "$lib/components/Input.svelte";

export let name: string;
export let placeholder = "test.placeholder";

let inputField;

const changeFocus = () => {
  inputField.focus();
};
</script>

<!-- eslint-disable svelte/valid-compile -->
<span on:click={changeFocus} id="test" />

<Input bind:inputElement={inputField} {name} {placeholder} />