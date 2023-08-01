<script lang="ts">
  import { nonNullish } from "@dfinity/utils";

  export let role: "link" | "button" | "checkbox" | "radio" | undefined =
    undefined;
  export let ariaLabel: string | undefined = undefined;
  export let selected = false;
  export let disabled: boolean | undefined = undefined;
  export let testId = "card";
  export let theme: "transparent" | "framed" | "highlighted" | undefined =
    undefined;

  let clickable = false;

  $: clickable = nonNullish(role)
    ? ["button", "link", "checkbox", "radio"].includes(role)
    : false;

  let showHeadline: boolean;
  $: showHeadline = nonNullish($$slots.start) || nonNullish($$slots.end);

  let ariaChecked: boolean | undefined = undefined;
  $: ariaChecked = role === "checkbox" ? selected : undefined;
</script>

<article
  data-tid={testId}
  {role}
  on:click
  class={`card ${theme ?? ""}`}
  class:clickable
  class:selected
  class:disabled
  aria-disabled={disabled}
  aria-checked={ariaChecked}
  aria-label={ariaLabel}
>
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

    padding: calc(var(--padding-2x) - var(--card-border-size));
    margin: var(--padding-2x) 0;
    border-radius: var(--border-radius);

    box-sizing: border-box;

    border: var(--card-border-size) solid transparent;

    &.selected {
      border: 2px solid var(--primary);
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

      margin: var(--card-border-size) 0;
      border: 0;

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
  }

  .clickable {
    @include interaction.tappable;

    &.disabled {
      @include interaction.disabled;
    }
  }

  .transparent {
    background: transparent;
    box-shadow: none;

    &.selected {
      background: var(--card-background);
    }

    &.clickable {
      &:not([disabled]):hover,
      &:not([disabled]):focus {
        background: var(--card-background-shade);

        &.selected {
          background: var(--focus-background);
        }
      }
    }
  }

  .framed {
    background: var(--background);
    color: var(--background-contrast);
    box-shadow: none;
    border: 2px solid var(--line);

    &.selected {
      background: var(--background);
      border: 2px solid var(--primary);
    }

    &.clickable {
      &:not([disabled]):hover,
      &:not([disabled]):focus {
        background: var(--input-background);

        &.selected {
          background: var(--input-background);
        }

        &:not(.selected) {
          border: 2px solid rgba(var(--disable-contrast-rgb), 0.4);

          &.icon {
            > :global(svg:first-child) {
              color: rgba(var(--disable-contrast-rgb), 0.8);
            }
          }
        }
      }
    }

    &.icon:not(.selected) {
      > :global(svg:first-child) {
        color: var(--line);
      }
    }
  }

  .meta {
    @include card.meta;
  }
</style>
