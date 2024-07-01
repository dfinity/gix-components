import WizardModal from "$lib/components/WizardModal.svelte";
import type { WizardStep, WizardSteps } from "$lib/types/wizard";
import { render } from "@testing-library/svelte";

describe("WizardModal", () => {
  const steps: WizardSteps = [
    {
      title: "Step 1",
      name: "step1",
    },
  ];

  const props: { steps: WizardSteps; currentStep: WizardStep | undefined } = {
    steps,
    currentStep: undefined,
  };

  it("should not have a data-tid attribute", () => {
    const { container } = render(WizardModal, {
      props: {
        ...props,
      },
    });

    const modal = container.querySelector("div.modal");
    expect(modal?.getAttribute("data-tid")).toBeNull();
  });

  it("should have a single root with data-tid attribute", () => {
    const testId = "my-test-id";
    const { baseElement } = render(WizardModal, {
      props: {
        ...props,
        testId,
      },
    });

    // Make sure the data-tid encloses everything in the component.
    expect(baseElement.firstElementChild?.children.length).toBe(1);
    const modal = baseElement.firstElementChild?.firstElementChild;
    expect(modal?.className).toContain("modal");
    expect(modal?.getAttribute("data-tid")).toBe(testId);
  });

  it("should contains a container for the animation", () => {
    const { container } = render(WizardModal, {
      props: {
        ...props,
      },
    });

    const div = container.querySelector("div.transition");
    expect(div).not.toBeNull();
  });
});
