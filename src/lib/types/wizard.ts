export interface WizardStep {
  readonly name: string;
  readonly title: string;
}

export type WizardSteps = [WizardStep, ...WizardStep[]];
