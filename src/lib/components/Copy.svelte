<script lang="ts">
  import { IconCopy } from "$lib/icons";
  import { i18n } from "$lib/stores/i18n";
  import {
    stopPropagation,
    preventDefault,
  } from "$lib/utils/event-modifiers.utils";

  interface Props {
    value: string;
  }

  let { value }: Props = $props();

  const copyToClipboard = async () =>
    await navigator.clipboard.writeText(value);
</script>

<button
  data-tid="copy-component"
  onclick={preventDefault(stopPropagation(copyToClipboard))}
  aria-label={`${$i18n.core.copy}: ${value}`}
  class="icon-only"
>
  <IconCopy />
</button>

<style lang="scss">
  button {
    height: var(--padding-4x);
    width: var(--padding-4x);
    min-width: var(--padding-4x);

    &.icon-only {
      color: var(--primary);
    }
  }
</style>
