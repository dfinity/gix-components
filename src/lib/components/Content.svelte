<script lang="ts">
  export let testId: string | undefined = undefined;

  let itemA: boolean;
  $: itemA = $$slots["item-a"];
  let itemB: boolean;
  $: itemB = $$slots["item-b"];
  let itemC: boolean;
  $: itemC = $$slots["item-c"];
  let itemD: boolean;
  $: itemD = $$slots["item-d"];
</script>

<div class="wrapper" data-tid={testId}>
  {#if itemA}
    <div class="item-a">
      <slot name="item-a" />
    </div>
  {/if}

  {#if itemB}
    <div class="item-b">
      <slot name="item-b" />
    </div>
  {/if}

  {#if itemC}
    <div class="item-c">
      <slot name="item-c" />
    </div>
  {/if}

  {#if itemD}
    <div class="item-d">
      <slot name="item-d" />
    </div>
  {/if}
</div>

<style lang="scss">
  @use "../styles/mixins/media";
  @use "../styles/mixins/grid";

  .wrapper {
    @include grid.wrapper;

    @include media.min-width(large) {
      grid-template-rows: auto;
      grid-template-areas:
        "item-a item-a item-a item-a item-a item-a item-b item-b item-b item-b item-b item-b"
        "item-c item-c item-c item-c item-c item-c item-d item-d item-d item-d item-d item-d";
    }

    .item-a {
      grid-area: item-a;
    }

    .item-b {
      grid-area: item-b;
    }

    .item-c {
      grid-area: item-c;
    }

    .item-d {
      grid-area: item-d;
    }
  }
</style>
