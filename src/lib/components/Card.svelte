<script lang="ts">
  import IconArrowRight from "$lib/icons/IconArrowRight.svelte";
  import type { SvelteComponent } from "svelte";
  import IconExpandMore from "$lib/icons/IconExpandMore.svelte";
  import IconCheckCircle from "$lib/icons/IconCheckCircle.svelte";
  import { nonNullish } from "@dfinity/utils";

  export let ariaLabel: string | undefined = undefined;
  export let selected = false;
  export let disabled: boolean | undefined = undefined;
  export let testId = "card";
  export let icon: "arrow" | "expand" | "check" | undefined = undefined;
  export let theme: "transparent" | "framed" | "highlighted" | undefined =
    undefined;
  export let clickable = true;
  export let href: string | undefined;

  let container: "article" | "a" = "article";
  $: container = nonNullish(href) ? "a" : "article";

  let showHeadline: boolean;
  $: showHeadline = nonNullish($$slots.start) || nonNullish($$slots.end);

  let iconCmp: typeof SvelteComponent | undefined = undefined;

  $: (() => {
    switch (icon) {
      case "arrow":
        iconCmp = IconArrowRight;
        break;
      case "expand":
        iconCmp = IconExpandMore;
        break;
      case "check":
        iconCmp = IconCheckCircle;
        break;
    }
  })();
</script>

<svelte:element
  this={container}
  {href}
  data-tid={testId}
  on:click
  class={`card ${theme ?? ""}`}
  class:clickable
  class:icon={nonNullish(icon)}
  class:selected
  class:disabled
  aria-disabled={disabled}
  aria-label={ariaLabel}
>
  {#if nonNullish(iconCmp)}
    <svelte:component this={iconCmp} />
  {/if}

  {#if showHeadline}
    <div class="meta">
      <slot name="start" />
      <slot name="end" />
    </div>
  {/if}

  <slot />
</svelte:element>

<style lang="scss">
  @use "../styles/mixins/interaction";
  @use "../styles/mixins/media";
  @use "../styles/mixins/display";
  @use "../styles/mixins/card";

  .card {
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

    &.icon {
      position: relative;
      padding-right: var(--padding-6x);

      > :global(svg:first-child) {
        position: absolute;

        height: var(--padding-3x);
        width: auto;

        right: var(--padding-2x);
        top: 50%;
        margin-top: calc(-1 * var(--padding-1_5x));

        color: var(--tertiary);
      }

      &.selected {
        --icon-check-circle-background: var(--primary);
        --icon-check-circle-color: var(--primary-contrast);
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
