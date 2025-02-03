<script lang="ts">
  import DocsCardNav from "$docs/components/DocsCardNav.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import { COMPONENT_ROUTES } from "$docs/constants/docs.constants";
</script>

<div>
  <Nav>
    <h3 slot="title">Pick a component</h3>

    {#each COMPONENT_ROUTES as { path, title }}
      <DocsCardNav url={path}>{title}</DocsCardNav>
    {/each}
  </Nav>
</div>

<style lang="scss">
  @use "../../lib/styles/mixins/media";

  h3 {
    padding: var(--padding-2x) 0 0;
  }

  div {
    margin: 0 var(--padding);
    @include media.min-width(small) {
      margin: 0;
    }

    :global(.card:not(.selected)) {
      display: none;

      @include media.min-width(large) {
        display: block;
      }
    }
  }
</style>
