<script lang="ts">
  import IconInfo from "$lib/icons/IconInfo.svelte";
  import Collapsible from "./Collapsible.svelte";
  import KeyValuePair from "./KeyValuePair.svelte";

  export let testId: string | undefined = undefined;

  let toggleContent: () => void;
</script>

<Collapsible expandButton={false} externalToggle={true} bind:toggleContent>
  <KeyValuePair {testId} slot="header">
    <div class="wrapper" slot="key">
      <slot name="key" />
      <button class="icon" on:click|stopPropagation={toggleContent}>
        <IconInfo />
      </button>
    </div>

    <svelte:fragment slot="value"><slot name="value" /></svelte:fragment>
  </KeyValuePair>

  <p
    class="description"
    data-tid={testId !== undefined ? `${testId}-description` : undefined}
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
    color: var(--tertiary);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  p {
    margin: 0;
  }
</style>
