import type { WizardStep } from "$lib/types/wizard";

export const wizardStepIndex = ({
  name: stepName,
  steps,
}: {
  name: string;
  steps: WizardStep[];
}) => steps.findIndex(({ name }: WizardStep) => name === stepName);
