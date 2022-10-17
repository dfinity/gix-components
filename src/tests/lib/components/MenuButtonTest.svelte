<script lang="ts">
  import MenuButton from "../../../lib/components/MenuButton.svelte";

  export let spy: (open: boolean) => void;

  let open = false;

  $: open, spy(open);
</script>

<MenuButton bind:open />
