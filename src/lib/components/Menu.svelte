<script lang="ts">
  import MenuBackground from "./MenuBackground.svelte";

  export let open = false;
</script>

<div role="menu">
  <MenuBackground {open} />

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

    --menu-logo-height: 68px;

    @include media.min-width(xlarge) {
      --menu-logo-height: calc(68px + var(--padding-4x));
    }

    padding-top: calc(
      var(--menu-logo-height) + var(--padding-4x) + var(--header-offset, 0px)
    );

    // Shift the menu on xlarge screen e.g. if a banner is displayed
    @include media.min-width(xlarge) {
      padding-top: calc(var(--menu-logo-height) + var(--header-offset, 0px));
    }

    position: relative;
  }

  .inner {
    display: flex;
    flex-direction: column;

    width: 0;
    max-width: 100vw;
    height: 100%;

    overflow-x: hidden;
    overflow-y: auto;

    transform: translate(-100%, 0);

    // On xlarge screen the menu is always open
    @include media.min-width(xlarge) {
      width: var(--menu-width);
      transform: translate(0, 0);
    }

    // On smaller screen the menu is open on demand
    &.open {
      width: var(--menu-width);
      transform: translate(0, 0);
    }

    transition: transform var(--animation-time-normal)
        var(--menu-animation-timing-function),
      width var(--animation-time-normal) var(--menu-animation-timing-function);

    // On xlarge screen the header is not sticky but within the content that's why we align the inner menu start
    box-sizing: border-box;

    @include media.min-width(xlarge) {
      padding-top: var(--padding-4x);
    }
  }
</style>
