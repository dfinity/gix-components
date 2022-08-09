<script lang="ts">
  import type { SlugIcon } from "$docs/types/slug";
  import DocsIcon from "$docs/components/DocsIcon.svelte";

  export let icons: SlugIcon[];
</script>

<h1>Icons</h1>

<p>
  Icon components are simple wrappers around SVG elements with occasionally some
  additional properties such as <code>size</code> option.
</p>

<div>
  {#each icons as icon}
    <DocsIcon {icon} />
  {/each}
</div>

<style lang="scss">
  @use "../lib/styles/mixins/media";

  div {
    display: grid;
    --grid-columns: 4;
    --grid-max-width: min(var(--section-max-width), 100%);
    grid-template-columns: repeat(
      var(--grid-columns),
      calc(
        (var(--grid-max-width) - ((var(--grid-columns) - 1) * var(--padding))) /
          var(--grid-columns)
      )
    );
    grid-gap: var(--padding);

    margin: var(--padding-4x) 0;

    @include media.min-width(medium) {
      --grid-columns: 7;
    }
  }
</style>
