<script lang="ts">
  import KeyValuePair from "$lib/components/KeyValuePair.svelte";

  interface Props {
    key: string;
    value: string;
  }

  let { key: keyStr, value: valueStr }: Props = $props();
</script>

<KeyValuePair>
  {#snippet key()}{keyStr}{/snippet}
  {#snippet value()}{valueStr}{/snippet}
</KeyValuePair>
