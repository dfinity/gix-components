<h4><slot /></h4>

<style lang="scss">
  @use "../styles/mixins/text";
  @use "../styles/mixins/media";

  h4 {
    margin: 0;
    color: var(--body-color);

    @include media.min-width(xlarge) {
      color: var(--content-color);
    }

    @include text.truncate;

    text-align: center;
    line-height: inherit;
  }
</style>
