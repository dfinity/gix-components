<div><slot name="title" /></div>

<nav>
  <slot />
</nav>

<style lang="scss">
  @use "../styles/mixins/layout";
  @use "../styles/mixins/media";

  div {
    padding: var(--padding-4x) var(--padding-4x) var(--padding-2x);
    margin: 0;
  }

  nav {
    @include layout.main;

    margin: 0;
    padding: var(--padding-2x);

    @include media.min-width(medium) {
      padding: 0 var(--padding-2x);
    }
  }

  nav {
    :global(article:not(.selected)) {
      display: none;

      @include media.min-width(large) {
        display: block;
      }
    }
  }
</style>
