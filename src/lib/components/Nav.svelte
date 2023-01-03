<div><slot name="title" /></div>

<nav>
  <slot />
</nav>

<style lang="scss">
  @use "../styles/mixins/layout";
  @use "../styles/mixins/media";

  div {
    padding: var(--padding-2x) var(--padding-2x) 0;
    margin: 0;

    @include media.min-width(large) {
      padding: var(--padding-4x) var(--padding-4x) calc(var(--padding-6x) + var(--padding-0_25x));
    }
  }

  nav {
    @include layout.main;

    margin: 0;
    padding: 0 var(--padding-2x);
  }

  nav {
    :global(article:first-of-type) {
      margin-top: 0;
    }

    :global(article:not(.selected)) {
      display: none;

      @include media.min-width(large) {
        display: block;
      }
    }
  }
</style>
