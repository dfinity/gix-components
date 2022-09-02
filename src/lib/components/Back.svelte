<script lang="ts">
  import IconArrowBack from "$lib/icons/IconArrowBack.svelte";
  import { i18n } from "$lib/stores/i18n";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<button
  class="back icon-only"
  data-tid="back"
  on:click|stopPropagation={() => dispatch("nnsBack")}
  aria-label={$i18n.core.back}><IconArrowBack /></button
>

<style lang="scss">
  @use "../styles/mixins/header";
  @use "../styles/mixins/media";

  button {
    @include header.button(--primary-tint);
  }
</style>
