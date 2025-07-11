<script lang="ts">
  import Chip from "./Chip.svelte";
  import type { ChipGroupItem } from "../types/chip-group";

  interface Props {
    chips?: ChipGroupItem[];
    testId?: string;
    onSelect?: (selectedId: string) => void;
  }

  let {
    chips = $bindable([]),
    testId = "gix-cmp-chip-group-component",
    onSelect,
  }: Props = $props();

  const onChipClick = (selectedId: string) => {
    chips = chips.map((chip) => ({
      ...chip,
      selected: chip.id === selectedId,
    }));
    onSelect?.(selectedId);
  };
</script>

<div
  data-tid={testId}
  class="chip-group"
  role="radiogroup"
  aria-label="Options"
>
  {#each chips as { id, label, selected } (id)}
    <Chip {id} {label} {selected} onClick={onChipClick} />
  {/each}
</div>

<style lang="scss">
  .chip-group {
    display: flex;
    flex-wrap: wrap;
    gap: var(--padding-0_5x);
  }
</style>
