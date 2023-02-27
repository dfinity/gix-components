<script>
  import IconCheckCircle from "$lib/icons/IconCheckCircle.svelte";
  import Spinner from "$lib/components/Spinner.svelte";
</script>

<div class="step">
  <IconCheckCircle />
  <span class="text">Connection with sale canister</span>
  <div class="line" />
  <span class="state">Completed</span>
</div>

<div class="step">
  <IconCheckCircle />
  <span class="text">Sending tokens</span>
  <div class="line" />
  <span class="state">Completed</span>
</div>

<div class="step in-progress">
  <span class="checkmark">3</span>
  <span class="text">Confirming your participation...</span>
  <div class="line" />
  <div class="state">
    <span>In progress</span>
    <div><Spinner inline size="tiny" /></div>
  </div>
</div>

<div class="step last">
  <span class="checkmark">4</span>
  <span class="text">Updating your data</span>
</div>

<style lang="scss">
  @use "../styles/mixins/fonts";

  .step {
    display: grid;
    grid-template-columns: max-content auto;
    grid-template-rows: repeat(2, 1fr);

    align-items: center;

    column-gap: var(--padding-2x);
    row-gap: var(--padding-0_25x);

    padding: 0 0 var(--padding-0_25x);

    --icon-check-circle-background: var(--positive-emphasis);
    --icon-check-circle-color: white;

    color: var(--value-color);
  }

  .line,
  .state {
    align-self: flex-start;
  }

  .in-progress {
    color: var(--primary);

    --icon-check-circle-background: var(--primary);
    --icon-check-circle-color: var(--primary-contrast);

    .state {
      color: var(--primary);
      background: rgba(var(--primary-rgb), 0.3);
    }

    .line {
      --line-color: var(--tertiary);
    }

    .checkmark {
      --checkmark-color: var(--primary);
    }
  }

  .last {
    color: var(--tertiary);

    --icon-check-circle-background: transparent;
    --icon-check-circle-color: var(--tertiary);
    --icon-check-circle-border-color: var(--tertiary);

    padding: var(--padding) 0 0;
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

    width: 24px;
    height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    --checkmark-color: var(--tertiary);
    border: 1px solid var(--checkmark-color);
  }
</style>
