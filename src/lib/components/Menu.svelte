<script lang="ts">
  import { i18n } from "../stores/i18n";
  import IconClose from "../icons/IconClose.svelte";

  export let open = false;
</script>

<div role="menu">
  <div class="inner" class:open on:click={() => (open = false)}>
    <button
      on:click={() => (open = false)}
      aria-label={$i18n.core.close}
      data-tid="menu-close"
      className="close icon-only"
    >
      <IconClose />
    </button>

    <slot />
  </div>
</div>

<style lang="scss">
  @use "../styles/mixins/interaction";
  @use "../styles/mixins/display";
  @use "../styles/mixins/media";

  div[role="menu"] {
    @include interaction.initial;

    z-index: var(--menu-z-index);
  }

  .inner {
    display: flex;
    flex-direction: column;

    background: var(--menu-background);
    color: var(--menu-background-contrast);
    box-shadow: var(--menu-box-shadow);

    width: 0;
    max-width: 100vw;
    height: 100%;

    overflow-y: auto;

    // On xlarge screen the menu is always open
    @include media.min-width(xlarge) {
      width: var(--menu-width);
    }

    // On smaller screen the menu is open on demand
    &.open {
      width: var(--menu-width);
    }

    transition: width var(--animation-time-normal) cubic-bezier(.17,.67,.93,.66);
  }

  .close {
    align-self: flex-start;
    display: flex;
    margin: 0 var(--padding-0_5x) var(--padding);

    :global(svg) {
      width: var(--padding-6x);
      height: var(--padding-6x);
    }
  }
</style>
