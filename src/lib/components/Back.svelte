<script lang="ts">
  import IconBack from "$lib/icons/IconBack.svelte";
  import { i18n } from "$lib/stores/i18n";
  import { stopPropagation } from "$lib/utils/event-modifiers.utils";
  import type { OnEventCallback } from "$lib/types/event-modifiers";

  interface Props {
    onBack: OnEventCallback;
  }

  let { onBack }: Props = $props();
</script>

<button
  class="back icon-only"
  data-tid="back"
  onclick={stopPropagation(onBack)}
  aria-label={$i18n.core.back}><IconBack /></button
>

<style lang="scss">
  @use "../styles/mixins/header";
  @use "../styles/mixins/media";

  .back {
    @include header.button(--primary-tint);
  }
</style>
