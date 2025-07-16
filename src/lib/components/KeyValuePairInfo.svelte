<script lang="ts">
  import { nonNullish } from "@dfinity/utils";
  import Collapsible from "./Collapsible.svelte";
  import KeyValuePair from "./KeyValuePair.svelte";
  import IconInfo from "$lib/icons/IconInfo.svelte";

  export let testId: string | undefined = undefined;
  export let alignIconRight: boolean | undefined = false;

  let cmp: Collapsible | undefined;
</script>

<Collapsible
  {testId}
  expandButton={false}
  externalToggle={true}
  bind:this={cmp}
>
  <KeyValuePair slot="header">
    <div class="wrapper" slot="key">
      <slot name="key" />
      {#if !alignIconRight}
        <button
          class="icon"
          on:click|stopPropagation={() => cmp?.toggleContent()}
        >
          <IconInfo />
        </button>
      {/if}
    </div>

    <svelte:fragment slot="value">
      <slot name="value" />
      {#if alignIconRight}
        <button
          class="icon alignIconRight"
          on:click|stopPropagation={() => cmp?.toggleContent()}
        >
          <IconInfo />
        </button>
      {/if}
    </svelte:fragment>
  </KeyValuePair>

  <p
    class="description"
    data-tid={nonNullish(testId) ? `${testId}-description` : undefined}
  >
    <slot name="info" />
  </p>
</Collapsible>

<style lang="scss">
  .wrapper {
    display: flex;
    align-items: center;
    gap: var(--padding);
  }

  .icon {
    color: var(--primary-tint);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    &.alignIconRight {
      padding-left: var(--padding-0_5x);
      align-self: start;
    }
  }

  p {
    margin: 0;
  }
</style>
