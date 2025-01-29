<script lang="ts">
  import Input from "$lib/components/Input.svelte";

  export let name: string;
  export let placeholder = "test.placeholder";

  let inputField: HTMLInputElement | undefined;

  const changeFocus = () => {
    inputField.focus();
  };
</script>

<button on:click={changeFocus} id="test" />

<Input bind:inputElement={inputField} {name} {placeholder} />
