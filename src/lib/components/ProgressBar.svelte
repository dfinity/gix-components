<script lang="ts">
  // Html default is 1 anyway
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress?retiredLocale=ca#attr-max
  export let max = 1;
  export let value: number;
  export let color: "warning" | "primary" = "primary";
</script>

<div class="wrapper">
  <slot name="top" />
  <progress
    {max}
    {value}
    class={color}
    aria-valuemax={max}
    aria-valuenow={value}
  />
  <slot name="bottom" />
</div>

<style lang="scss">
  @use "../styles/mixins/display";

  div {
    --current-height: var(--padding);
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--padding-0_5x);
  }

  // Target only FF
  @supports (-moz-appearance: none) {
    progress {
      background-color: var(--background);

      height: var(--current-height);
      border-radius: var(--current-height);
      box-shadow: var(--input-box-shadow);
      border: 0;

      &::-moz-progress-bar {
        border-radius: var(--current-height);
        box-shadow: var(--input-box-shadow);
      }

      &.warning {
        &::-moz-progress-bar {
          background: var(--warning-emphasis);
        }
      }

      &.primary {
        &::-moz-progress-bar {
          background: var(--primary-gradient-fallback);
          background: var(--primary-gradient);
        }
      }
    }
  }

  progress {
    width: 100%;

    @include display.appearance-none;

    height: var(--current-height);

    // Progress bar styles
    &::-webkit-progress-bar {
      background-color: #fff;

      height: var(--current-height);
      border-radius: var(--current-height);
      box-shadow: var(--input-box-shadow);
    }

    &::-webkit-progress-value {
      border-radius: var(--current-height);
      box-shadow: var(--input-box-shadow);
    }

    &.warning {
      &::-webkit-progress-value {
        background: var(--warning-emphasis);
      }
    }

    &.primary {
      &::-webkit-progress-value {
        background: var(--primary-gradient-fallback);
        background: var(--primary-gradient);
      }
    }
  }
</style>
