<script lang="ts" context="module">
  export interface ChipData {
    label: string;
    id: string;
    selected: boolean;
  }
</script>

<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Chip from "./Chip.svelte";

  export let chips: ChipData[] = [];
  export let testId: string = "chip-group-component";

  const dispatch = createEventDispatcher();
  const onChipClick = ({ detail: selectedId }: CustomEvent<string>) => {
    chips = chips.map((chip) => ({
      ...chip,
      selected: chip.id === selectedId,
    }));
    dispatch("nnsSelect", selectedId);
  };
</script>

<div data-tid={testId} class="chip-group">
  {#each chips as { id, label, selected } (id)}
    <Chip {id} {label} {selected} on:nnsClick={onChipClick} />
  {/each}
</div>

<style lang="scss">
  .chip-group {
    display: flex;
    gap: var(--padding-0_5x);
  }
</style>
