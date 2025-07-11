<script lang="ts">
  import type { OnEventCallback } from "$lib/types/event-modifiers";
  import { preventDefault } from "$lib/utils/event-modifiers.utils";

  interface Props {
    onSubmit?: OnEventCallback;
    onButtonClick?: OnEventCallback;
    childTestId?: string;
  }

  let {
    onSubmit = () => {},
    onButtonClick = () => {},
    childTestId,
  }: Props = $props();
</script>

<form onsubmit={onSubmit}>
  <button
    type="submit"
    onclick={preventDefault(onButtonClick)}
    data-tid={childTestId}
  >
    Submit
  </button>
</form>
