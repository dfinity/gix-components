<script lang="ts">
  import IconCheckCircle from "$lib/icons/IconCheckCircle.svelte";
  import Spinner from "$lib/components/Spinner.svelte";
  import type { ProgressStep } from "$lib/types/progress-step";
  import { i18n } from "$lib/stores/i18n";

  export let steps: [ProgressStep, ...ProgressStep[]];
</script>

{#each steps as { step, text, state }, i}
  {@const last = i === steps.length - 1}
  <div class={`step ${state} ${last ? "last" : ""}`}>
    {#if state === "completed"}
      <IconCheckCircle />
    {:else if state === "in_progress"}
      <div class="spinner">
        <span class="checkmark">{i + 1}</span>
        <Spinner />
      </div>
    {:else}
      <span class="checkmark round">{i + 1}</span>
    {/if}

    <span class="text">{text}</span>

    <div class:line={!last} />

    {#if state === "completed"}
      <span class="state">{$i18n.progress.completed}</span>
    {:else if state === "in_progress"}
      <div class="state">
        <span>{$i18n.progress.in_progress}</span>
      </div>
    {/if}
  </div>
{/each}

<style lang="scss">
  @use "../styles/mixins/fonts";

  .step {
    display: grid;
    grid-template-columns: max-content auto;
    grid-template-rows: repeat(2, auto);

    align-items: center;

    column-gap: var(--padding-2x);
    row-gap: var(--padding);

    padding: 0 0 var(--padding);

    --icon-check-circle-background: var(--positive-emphasis);
    --icon-check-circle-color: white;

    color: var(--value-color);
    transition: color var(--animation-time-normal) ease-out;
  }

  .line,
  .state {
    align-self: flex-start;
  }

  .in_progress,
  .next {
    .line {
      --line-color: var(--tertiary);
    }
  }

  .in_progress {
    color: var(--progress-color);

    --icon-check-circle-background: var(--progress-color);
    --icon-check-circle-color: var(--progress-color-contrast);

    .state {
      color: var(--progress-color);
      background: rgba(var(--progress-color-rgb), 0.3);
    }

    .checkmark {
      --checkmark-color: var(--progress-color);
    }
  }

  .next {
    color: var(--tertiary);

    --icon-check-circle-background: transparent;
    --icon-check-circle-color: var(--tertiary);
    --icon-check-circle-border-color: var(--tertiary);
  }

  .state {
    display: inline-flex;
    gap: var(--padding-0_5x);

    @include fonts.small;

    color: var(--positive-emphasis);
    background: rgba(var(--positive-emphasis-rgb), 0.3);

    width: fit-content;

    padding: var(--padding-0_5x) var(--padding);
    border-radius: var(--border-radius-0_5x);

    div {
      position: relative;
    }
  }

  .line {
    height: calc(5 * var(--padding));
    --line-color: var(--positive-emphasis);
    background: linear-gradient(var(--line-color), var(--line-color)) no-repeat
      center/1.5px 100%;
  }

  .checkmark {
    @include fonts.small;

    --checkmark-color: var(--tertiary);
  }

  .spinner {
    width: 24px;
    height: 24px;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .round {
    width: 22px;
    height: 22px;

    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--checkmark-color);
  }
</style>
