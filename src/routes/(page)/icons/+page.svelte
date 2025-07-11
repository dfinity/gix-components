<script lang="ts">
  import type { PageData } from "./$types";
  import DocsIcon from "$docs/components/DocsIcon.svelte";
  import type { SlugIcon } from "$docs/types/slug";

  export let data: PageData;
  let icons: SlugIcon[];

  $: ({ icons } = data);
</script>

<h1>Icons</h1>

<p>
  Icon components are simple wrapper around SVG elements with occasionally some
  additional properties such as <code>size</code> option.
</p>

<div>
  {#each icons as icon}
    <DocsIcon {icon} />
  {/each}
</div>

<style lang="scss">
  @use "../../../lib/styles/mixins/media";

  div {
    display: grid;

    --grid-columns: 3;
    --grid-max-width: min(var(--section-max-width), 100%);
    --grid-gap: var(--padding);

    grid-template-columns: repeat(
      auto-fill,
      calc(
        (
            var(--grid-max-width) -
              ((var(--grid-columns) - 1) * var(--grid-gap))
          ) /
          var(--grid-columns)
      )
    );

    grid-gap: var(--grid-gap);

    margin: var(--padding-4x) 0;

    @include media.min-width(small) {
      --grid-columns: 4;
      --grid-gap: var(--padding-2x);
    }

    @include media.min-width(medium) {
      --grid-columns: 5;
      --grid-gap: var(--padding-4x);
    }
  }
</style>
