<script lang="ts" generics="T extends string = string">
  import Modal from "$lib/components/Modal.svelte";
  import WizardTransition from "./WizardTransition.svelte";
  import { WizardStepsState } from "$lib/stores/wizard.state";
  import type { WizardStep, WizardSteps } from "$lib/types/wizard";
  import type { Snippet } from "svelte";

  interface Props {
    // eslint-disable-next-line no-undef -- The still linter does not understand the Svelte generics type
    steps: WizardSteps<T>;
    disablePointerEvents?: boolean;
    testId?: string;
    // eslint-disable-next-line no-undef -- The still linter does not understand the Svelte generics type
    currentStep?: WizardStep<T>;
    title?: Snippet;
    children: Snippet;
    onClose?: () => void;
  }

  let {
    steps,
    disablePointerEvents = false,
    testId,
    currentStep = $bindable(),
    title,
    children,
    onClose,
  }: Props = $props();

  // eslint-disable-next-line no-undef -- The still linter does not understand the Svelte generics type
  let stepState = $derived(new WizardStepsState<T>(steps));

  let transition = $derived({ diff: stepState.diff });

  $effect(() => {
    ({ currentStep } = stepState);
  });

  export const next = () => (stepState = stepState.next());
  export const back = () => (stepState = stepState.back());
  export const set = (step: number) => (stepState = stepState.set(step));

  // onDestroy is not always called when repetitively opened/closed in NNS-dapp.
  // This might be linked to Svelte issue https://github.com/sveltejs/svelte/issues/5268.
  // We use to display the content of the wizard modal according to the modal intro state (see GIT history), but this happens to be visually glitchy.
  // That is why we rather enforce not rendering any content in the DOM when the modal is closed, which solves both issues.
  let visible = $state(true);
  const close = () => {
    visible = false;
    onClose?.();
  };
</script>

{#if visible}
  <Modal on:nnsClose={close} {testId} {disablePointerEvents}>
    <svelte:fragment slot="title">
      {@render title?.()}
    </svelte:fragment>

    <WizardTransition {transition}>
      {@render children()}
    </WizardTransition>
  </Modal>
{/if}
