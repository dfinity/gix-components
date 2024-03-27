<div><slot name="title" /></div>

<nav>
  <slot />
</nav>

<style lang="scss">
  @use "../styles/mixins/layout";
  @use "../styles/mixins/media";

  div {
    // title is hidden on small devices
    display: none;

    margin: 0;
    // Observed aligned value in NNS-dapp
    padding: var(--nav-padding-top) var(--padding-4x)
      calc(var(--padding-2x) - 3px);
    --nav-padding-top: var(--padding-2x);

    @include media.min-width(large) {
      display: block;
    }
  }

  nav {
    @include layout.main;

    margin: 0;
    padding: 0 var(--padding-2x);
  }
</style>
