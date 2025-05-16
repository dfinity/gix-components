import type { WizardStep } from "$lib/types/wizard";

export const wizardStepIndex = <T extends string = string>({
  name: stepName,
  steps,
}: {
  name: string;
  steps: WizardStep<T>[];
}) => steps.findIndex(({ name }: WizardStep) => name === stepName);
