<script lang="ts">
  import type { ComponentType } from "svelte";

  export let cmp: ComponentType;
  export let testId: string;
</script>

<svelte:component this={cmp}>
  <p data-tid={testId}>TEST TITLE</p>
</svelte:component>
