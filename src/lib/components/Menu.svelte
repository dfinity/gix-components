<script lang="ts">
  import MenuBackground from "$lib/assets/MenuBackground.svelte";

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

  <MenuBackground {open} />
</div>

<style lang="scss">
  @use "../styles/mixins/interaction";
  @use "../styles/mixins/display";
  @use "../styles/mixins/media";

  div[role="menu"] {
    @include interaction.initial;

    z-index: var(--menu-z-index);

    // Shift the menu on xlarge screen e.g. if a banner is displayed
    @include media.min-width(xlarge) {
      padding-top: var(--header-offset, 0px);
    }
  }

  .inner {
    display: flex;
    flex-direction: column;

    width: 0;
    max-width: 100vw;
    height: 100%;

    overflow-x: hidden;
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
      var(--menu-animation-timing-function);

    // On xlarge screen the header is not sticky but within the content that's why we align the inner menu start
    box-sizing: border-box;

    @include media.min-width(xlarge) {
      padding-top: var(--header-height);
    }
  }
</style>
