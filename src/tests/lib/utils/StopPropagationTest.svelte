<script lang="ts">
  import type { OnEventCallback } from "$lib/types/event-modifiers";
  import { stopPropagation } from "$lib/utils/event-modifiers.utils";

  interface Props {
    onParentClick?: OnEventCallback;
    onChildClick?: OnEventCallback;
    childTestId?: string;
  }

  let {
    onParentClick = () => {},
    onChildClick = () => {},
    childTestId,
  }: Props = $props();
</script>

<div role="button" tabindex="-1" onkeypress={() => {}} onclick={onParentClick}>
  <button onclick={stopPropagation(onChildClick)} data-tid={childTestId}>
    Click Me
  </button>
</div>
