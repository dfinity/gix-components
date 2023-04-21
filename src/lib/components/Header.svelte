<script lang="ts">
  import Toolbar from "$lib/components/Toolbar.svelte";
  import MenuButton from "$lib/components/MenuButton.svelte";
  import Back from "$lib/components/Back.svelte";

  export let back = false;
</script>

<header data-tid="header-component">
  <Toolbar>
    <svelte:fragment slot="start">
      {#if back}
        <Back on:nnsBack />
      {:else}
        <MenuButton />
      {/if}
    </svelte:fragment>

    <slot name="title" />

    <slot name="toolbar-end" slot="end" />
  </Toolbar>
</header>

<style lang="scss">
  @use "../styles/mixins/media";

  header {
    --toolbar-padding: 0 var(--padding-2x);

    @include media.min-width(xlarge) {
      --toolbar-padding: 0;
    }
  }
</style>
