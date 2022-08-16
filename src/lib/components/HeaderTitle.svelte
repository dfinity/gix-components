<h4><slot /></h4>

<style lang="scss">
  @use "../styles/mixins/text";

  h4 {
    margin: 0;
    color: white;

    @include text.clamp(2);

    text-align: center;
    line-height: inherit;
  }
</style>
