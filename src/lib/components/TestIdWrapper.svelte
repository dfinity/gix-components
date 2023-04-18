<script lang="ts">
  export let testId: string | undefined = undefined;
</script>

<div class="contents" data-tid={testId}>
  <slot />
</div>

<style lang="scss">
  .contents {
    display: contents;
  }
</style>
