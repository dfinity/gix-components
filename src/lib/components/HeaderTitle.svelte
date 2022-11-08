<h4><slot /></h4>

<style lang="scss">
  @use "../styles/mixins/text";

  h4 {
    margin: 0;
    color: var(--content-background-contrast);

    @include text.truncate;

    text-align: center;
    line-height: inherit;
  }
</style>
