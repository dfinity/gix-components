<script lang="ts">
  import Input from "$lib/components/Input.svelte";

  export let name: string;
  export let placeholder = "test.placeholder";
  export let ariaLabel: string | undefined = undefined;

  let inputField: HTMLInputElement | undefined;

  const changeFocus = () => {
    inputField.focus();
  };
</script>

<button on:click={changeFocus} id="test" aria-label={ariaLabel}></button>

<Input bind:inputElement={inputField} {name} {placeholder} />
