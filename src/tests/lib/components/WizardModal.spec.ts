/**
 * @jest-environment jsdom
 */

import WizardModal from "$lib/components/WizardModal.svelte";
import type { WizardStep } from "$lib/types/wizard";
import { render } from "@testing-library/svelte";

describe("WizardModal", () => {
  const steps: WizardStep[] = [
    {
      title: "Step 1",
      name: "step1",
    },
  ];

  const props: { steps: WizardStep[] } = { steps };

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
    const { container } = render(WizardModal, {
      props: {
        ...props,
        testId,
      },
    });

    // Make sure the data-tid encloses everything in the component.
    expect(container.firstElementChild?.children.length).toBe(1);
    const modal = container.firstElementChild?.firstElementChild;
    expect(modal?.classList).toContain("modal");
    expect(modal?.getAttribute("data-tid")).toBe(testId);
  });
});
