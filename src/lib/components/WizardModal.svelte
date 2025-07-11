<script lang="ts" generics="T extends string = string">
  import { createEventDispatcher } from "svelte";
  import WizardTransition from "./WizardTransition.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import { WizardStepsState } from "$lib/stores/wizard.state";
  import type { WizardStep, WizardSteps } from "$lib/types/wizard";

  export let steps: WizardSteps<T>;
  export let disablePointerEvents = false;
  export let testId: string | undefined = undefined;

  let stepState: WizardStepsState<T>;

  $: stepState = new WizardStepsState<T>(steps);

  export let currentStep: WizardStep<T> | undefined;
  $: ({ currentStep } = stepState);

  let transition: { diff: number };
  $: transition = { diff: stepState.diff };

  export const next = () => (stepState = stepState.next());
  export const back = () => (stepState = stepState.back());
  export const set = (step: number) => (stepState = stepState.set(step));

  // onDestroy is not always called when repetitively opened/closed in NNS-dapp.
  // This might be linked to Svelte issue https://github.com/sveltejs/svelte/issues/5268.
  // We use to display the content of the wizard modal according the modal intro state (see GIT history) but, this happens to be visually glitchy.
  // That is why we rather enforce not rendering any content in the DOM when the modal is closed which solve both issue.
  const dispatch = createEventDispatcher();
  let visible = true;
  const close = () => {
    visible = false;
    dispatch("nnsClose");
  };
</script>

{#if visible}
  <Modal on:nnsClose={close} {testId} {disablePointerEvents}>
    <slot name="title" slot="title" />

    <WizardTransition {transition}>
      <slot />
    </WizardTransition>
  </Modal>
{/if}
