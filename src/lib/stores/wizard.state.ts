export interface WizardStep {
  readonly name: string;
  readonly title: string;
}

export type WizardSteps = [WizardStep, ...WizardStep[]];

export class WizardStepsState {
  public currentStep: WizardStep | undefined;
  public currentStepIndex = 0;
  public previousStepIndex = 0;
  private readonly steps: WizardStep[];

  constructor(steps: WizardSteps) {
    this.steps = steps;
    this.currentStep = this.steps[0];
  }

  public next(): WizardStepsState {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.move(this.currentStepIndex + 1);
    }
    return this;
  }

  public get diff(): number {
    return this.currentStepIndex - this.previousStepIndex;
  }

  public back(): WizardStepsState {
    if (this.currentStepIndex > 0) {
      this.move(this.currentStepIndex - 1);
    }
    return this;
  }

  public set(newStep: number): WizardStepsState {
    this.move(newStep);
    return this;
  }

  private move(nextStep: number) {
    this.previousStepIndex = this.currentStepIndex;
    this.currentStepIndex = nextStep;
    this.currentStep = this.steps[this.currentStepIndex];
  }
}
