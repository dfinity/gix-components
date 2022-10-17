import type { WizardStep } from "$lib/stores/wizard.state";

export const wizardStepIndex = ({
  name: stepName,
  steps,
}: {
  name: string;
  steps: WizardStep[];
}) => steps.findIndex(({ name }: WizardStep) => name === stepName);
