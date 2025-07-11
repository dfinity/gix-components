<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Chip from "./Chip.svelte";
  import type { ChipGroupItem } from "../types/chip-group";

  export let chips: ChipGroupItem[] = [];
  export let testId = "gix-cmp-chip-group-component";

  const dispatch = createEventDispatcher();
  const onChipClick = ({ detail: selectedId }: CustomEvent<string>) => {
    chips = chips.map((chip) => ({
      ...chip,
      selected: chip.id === selectedId,
    }));
    dispatch("nnsSelect", selectedId);
  };
</script>

<div
  data-tid={testId}
  class="chip-group"
  role="radiogroup"
  aria-label="Options"
>
  {#each chips as { id, label, selected } (id)}
    <Chip {id} {label} {selected} on:nnsClick={onChipClick} />
  {/each}
</div>

<style lang="scss">
  .chip-group {
    display: flex;
    flex-wrap: wrap;
    gap: var(--padding-0_5x);
  }
</style>
