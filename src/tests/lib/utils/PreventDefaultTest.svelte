<script lang="ts">
  import { preventDefault } from "$lib/utils/event-modifiers.utils";
  import type { OnEventCallback } from "$lib/types/event-modifiers";

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
