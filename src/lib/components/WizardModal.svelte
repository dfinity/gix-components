<script lang="ts">
  import Modal from "$lib/components/Modal.svelte";
  import WizardTransition from "./WizardTransition.svelte";
  import { WizardStepsState } from "../stores/wizard.state";
  import type { WizardStep, WizardSteps } from "$lib/types/wizard";

  export let steps: WizardSteps;

  let stepState: WizardStepsState;
  $: stepState = new WizardStepsState(steps);

  export let currentStep: WizardStep | undefined;
  $: ({ currentStep } = stepState);

  let transition: { diff: number };
  $: transition = { diff: stepState.diff };

  export const next = () => (stepState = stepState.next());
  export const back = () => (stepState = stepState.back());
  export const set = (step: number) => (stepState = stepState.set(step));

  let presented = false;
</script>

<Modal on:nnsClose on:introend={() => (presented = true)}>
  <slot name="title" slot="title" />

  {#if presented}
    <WizardTransition {transition}>
      <slot />
    </WizardTransition>
  {/if}
</Modal>
