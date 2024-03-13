<script lang="ts">
  export let href: string;
  export let selected = false;
  export let testId: string | undefined = undefined;
  export let rel: string | undefined = undefined;
  export let target: "_blank" | undefined = undefined;
  export let title: string | undefined = undefined;
</script>

<a
  role="menuitem"
  {href}
  {rel}
  {target}
  {title}
  class:selected
  data-tid={testId}
  on:click
>
  <slot name="icon" />
  <span><slot /></span>
  <div><slot name="statusIcon" /></div>
</a>

<style lang="scss">
  @use "../styles/mixins/media";
  @use "../styles/mixins/fonts";

  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    color: var(--menu-color);
    transition: color var(--animation-time-short) ease-in;

    z-index: calc(var(--menu-z-index) + 1);

    @include fonts.h5;

    text-decoration: none;
    outline: none;

    &:focus,
    &:hover {
      text-decoration: none;
    }

    padding: var(--padding);

    &.selected {
      background: var(--menu-selected-background);
      color: var(--menu-select-color);

      border-radius: var(--padding);
    }

    &:not(.selected):focus,
    &:not(.selected):hover {
      color: var(--menu-select-color);
    }

    :global(& > :first-child) {
      // preserve icon size
      flex: none;
    }

    :global(svg) {
      width: var(--padding-3x);
      min-width: var(--padding-3x);
      height: var(--padding-3x);
    }
  }

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    margin: 0 var(--padding) 0 var(--padding-2x);
  }
</style>
