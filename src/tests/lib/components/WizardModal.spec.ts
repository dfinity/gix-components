import WizardModal from "$lib/components/WizardModal.svelte";
import type { WizardStep, WizardSteps } from "$lib/types/wizard";
import { fireEvent, render, waitFor } from "@testing-library/svelte";
import type { Snippet } from "svelte";
import { mockSnippet } from "../mocks/snippet.mocks";
import WizardModalTest from "./WizardModalTest.svelte";

describe("WizardModal", () => {
  const steps: WizardSteps = [
    {
      title: "Step 1",
      name: "step1",
    },
  ];

  const props: {
    steps: WizardSteps;
    currentStep: WizardStep | undefined;
    children: Snippet;
  } = {
    steps,
    currentStep: undefined,
    children: mockSnippet,
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

  it("should trigger the next step when modal.next is called", async () => {
    const { getByTestId } = render(WizardModalTest);

    const nextButton = getByTestId("next-button");

    expect(nextButton).toBeInTheDocument();

    await fireEvent.click(nextButton);

    await waitFor(() => {
      const backButton = getByTestId("back-button");

      expect(nextButton).not.toBeInTheDocument();
      expect(backButton).toBeInTheDocument();
    });
  });

  it("should trigger the back step when modal.back is called", async () => {
    const { getByTestId } = render(WizardModalTest);

    const nextButton = getByTestId("next-button");

    await fireEvent.click(nextButton);

    await waitFor(() => {
      const backButton = getByTestId("back-button");

      expect(nextButton).not.toBeInTheDocument();
      expect(backButton).toBeInTheDocument();
    });

    const backButton = getByTestId("back-button");

    await fireEvent.click(backButton);

    await waitFor(() => {
      const nextButton = getByTestId("next-button");

      expect(nextButton).toBeInTheDocument();
      expect(backButton).not.toBeInTheDocument();
    });
  });

  it("should set a custom step when modal.set is called", async () => {
    const { getByTestId } = render(WizardModalTest);

    const stepButton = getByTestId("hidden-step-button");

    await fireEvent.click(stepButton);

    await waitFor(() => {
      expect(stepButton).not.toBeInTheDocument();
      expect(getByTestId("hidden-step")).toBeInTheDocument();
    });
  });
});
