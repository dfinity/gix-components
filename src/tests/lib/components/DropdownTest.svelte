<script lang="ts">
  import Dropdown from "$lib/components/Dropdown.svelte";
  import DropdownItem from "$lib/components/DropdownItem.svelte";

  export let options: { label: string; value: string }[];
  export let value: string | undefined = undefined;

  const changeValue = () => {
    // eslint-disable-next-line prefer-destructuring
    value = options[2].value;
  };
</script>

<!-- eslint-disable svelte/valid-compile -->
<span on:click={changeValue} data-tid="test" />

<Dropdown selectedValue={value} name="test">
  {#each options as { label, value } (value)}
    <DropdownItem {value}>
      {label}
    </DropdownItem>
  {/each}
</Dropdown>
