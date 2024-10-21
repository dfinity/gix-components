<script lang="ts">
  export let testId: string | undefined = undefined;
  import { DEFAULT_ICON_SIZE } from "$lib/constants/constants";
  import IconClose from "$lib/icons/IconClose.svelte";
  import { createEventDispatcher } from "svelte";

  export let visible: boolean = true;

  const dispatch = createEventDispatcher();

  function setVisibilityFalse() {
    visible = false;
    dispatch("nnsClose");
  }
</script>

{#if visible}
  <div
    class="banner"
    data-tid={testId}
    style="--default-icon-size: {DEFAULT_ICON_SIZE}px;"
  >
    <div class="icon-background">
      <div class="icon-wrapper">
        <slot name="icon" />
      </div>
    </div>
    <div class="text-content">
      <slot name="title" />
      <slot name="description" />
    </div>
    <div class="action-wrapper">
      <slot name="action" />
    </div>
    <button class="close-button icon-only" on:click={setVisibilityFalse}>
      <IconClose />
    </button>
  </div>
{/if}

<style lang="scss">
  @use "../styles/mixins/fonts";

  .banner {
    display: flex;
    align-items: center;
    background: var(--banner-background, var(--input-background));
    border-radius: var(--banner-radius, var(--border-radius));
    padding: var(--banner-top-bottom-padding, var(--padding))
      var(--banner-left-right-padding, var(--padding-1_5x));
    column-gap: var(--banner-column-gap, var(--padding-1_5x));
  }

  .icon-background {
    padding: var(--icon-background-padding, 6px);
    background-color: var(
      --icon-background-color,
      var(--dropdown-border-color)
    );
    border-radius: var(--icon-border-radius, 50%);
  }

  .icon-wrapper {
    color: var(--icon-color, var(--elements-icons));
  }

  .action-wrapper {
    flex-shrink: 0;
    --button-min-height: 40px;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .close-button {
    padding: var(--close-button-padding, 10px);
    border-radius: var(--close-button-border-radius, var(--border-radius));
    background: var(--close-button-background, var(--card-background));
    color: var(--elements-icons);
  }
</style>
