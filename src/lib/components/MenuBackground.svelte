<script lang="ts">
  import LogoNNS from "../assets/LogoNNS.svelte";
  import LogoOnChain from "../assets/LogoOnChain.svelte";
  import background from '$lib/assets/menu-background.png';

  export let open = false;
</script>

<div class:open>
  <LogoNNS />
  <LogoOnChain />

  <img src={background} role="presentation" alt="" loading="lazy" />
</div>

<style lang="scss">
  @use "../styles/mixins/media";
  @use "../styles/mixins/display";

  div {
    position: absolute;
    @include display.inset;

    pointer-events: none;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    overflow: hidden;

    transform: translate(-100%, 0);

    // On xlarge screen the menu is always open
    @include media.min-width(xlarge) {
      transform: translate(0, 0);
    }

    // On smaller screen the menu is open on demand
    &.open {
      transform: translate(0, 0);
    }

    transition: transform var(--animation-time-normal)
      var(--menu-animation-timing-function);

    :global(svg:first-of-type) {
      height: var(--menu-logo-height);
      zoom: 1.2;
    }

    :global(svg:nth-child(2)) {
      // We do not want to display the logo "on chain" behind the menu items
      display: none;
      padding: 0 0 var(--padding-4x);

      @media (min-height: 654px) {
        display: block;
      }
    }

    img {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
</style>
