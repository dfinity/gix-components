<script lang="ts">
  import Island from "$lib/components/Island.svelte";
</script>

<Island>
  <div>
    <slot />
  </div>
</Island>

<style lang="scss">
  div {
    padding: var(--padding-2x);
  }
</style>
