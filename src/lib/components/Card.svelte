<script lang="ts">
  import IconArrowRight from "$lib/icons/IconArrowRight.svelte";

  export let role: "link" | "button" | "checkbox" | undefined = undefined;
  export let ariaLabel: string | undefined = undefined;
  export let selected = false;
  export let disabled: boolean | undefined = undefined;
  export let testId = "card";
  export let highlighted: boolean | undefined = undefined;
  export let withArrow: boolean | undefined = undefined;
  export let transparent = false;

  let clickable = false;

  $: clickable =
    role !== undefined ? ["button", "link", "checkbox"].includes(role) : false;

  let showHeadline: boolean;
  $: showHeadline = $$slots.start !== undefined || $$slots.end !== undefined;

  let ariaChecked: boolean | undefined = undefined;
  $: ariaChecked = role === "checkbox" ? selected : undefined;
</script>

<article
  data-tid={testId}
  {role}
  on:click
  class="card"
  class:clickable
  class:withArrow
  class:selected
  class:disabled
  class:highlighted
  class:transparent
  aria-disabled={disabled}
  aria-checked={ariaChecked}
  aria-label={ariaLabel}
>
  {#if withArrow === true}
    <IconArrowRight />
  {/if}

  {#if showHeadline}
    <div class="meta">
      <slot name="start" />
      <slot name="end" />
    </div>
  {/if}

  <slot />
</article>

<style lang="scss">
  @use "../styles/mixins/interaction";
  @use "../styles/mixins/media";
  @use "../styles/mixins/display";
  @use "../styles/mixins/card";

  article {
    display: flex;
    flex-direction: column;

    text-decoration: none;

    background: var(--card-background);
    box-shadow: var(--box-shadow);

    transition: color var(--animation-time-normal);

    padding: var(--padding-2x);
    margin: var(--padding-2x) 0;
    border-radius: var(--border-radius);

    outline: 2px solid transparent;

    &.selected {
      outline: 2px solid var(--primary);
    }

    &.transparent {
      background: transparent;
      box-shadow: none;
    }

    &.disabled {
      background: var(--input-background);
      color: rgba(var(--disable-contrast-rgb), 0.8);

      :global(*) {
        color: inherit;
      }
    }

    &.highlighted {
      background: var(--primary-gradient-fallback);
      background: var(--primary-gradient);

      color: rgba(var(--primary-contrast-rgb), var(--light-opacity));

      // TODO: find a better solution (a mixin?)
      :global(h3) {
        color: var(--primary-contrast);
      }
      :global(.value) {
        color: var(--primary-contrast);
      }
      :global(.label) {
        color: rgba(var(--primary-contrast-rgb), var(--light-opacity));
      }
      :global(.description) {
        color: rgba(var(--primary-contrast-rgb), var(--very-light-opacity));
      }
    }

    &.withArrow {
      position: relative;
      padding-right: var(--padding-6x);

      :global(svg:first-child) {
        position: absolute;

        height: var(--padding-3x);
        width: auto;

        right: var(--padding-2x);
        top: 50%;
        margin-top: calc(-1 * var(--padding-1_5x));

        opacity: var(--light-opacity);
      }
    }
  }

  .clickable {
    @include interaction.tappable;

    &.disabled {
      @include interaction.disabled;
    }
  }

  .clickable.transparent {
    &:not([disabled]):hover,
    &:not([disabled]):focus {
      background: var(--card-background-shade);
    }
  }

  .clickable.selected {
    &:not([disabled]):hover,
    &:not([disabled]):focus {
      background: var(--focus-background);
    }
  }

  .meta {
    @include card.meta;
  }
</style>
