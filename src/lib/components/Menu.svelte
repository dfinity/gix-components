<script lang="ts">
  export let open = false;
</script>

<div role="menu">
  <div
    class="inner"
    data-tid="menu-inner"
    class:open
    on:click={() => (open = false)}
  >
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

    transition: width var(--animation-time-normal)
      cubic-bezier(0.55, 0.49, 0.44, 0.87);

    // On xlarge screen the header is not sticky but within the content that's why we align the inner menu start
    box-sizing: border-box;

    @include media.min-width(xlarge) {
      padding-top: var(--header-height);
    }
  }
</style>
