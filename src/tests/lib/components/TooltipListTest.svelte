<script lang="ts">
  import Tooltip from "$lib/components/Tooltip.svelte";

  export let list: Array<{ text: string; id: string }>;
</script>

<ul>
  {#each list as { text, id } (id)}
    <li>
      <Tooltip {id} {text}>
        <p>content {id}</p>
      </Tooltip>
    </li>
  {/each}
</ul>
