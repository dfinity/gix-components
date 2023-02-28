/**
 * @jest-environment jsdom
 */

import ProgressSteps from "$lib/components/ProgressSteps.svelte";
import { render } from "@testing-library/svelte";

describe("Progress Steps", () => {
  const steps = [
    {
      step: "1",
      text: "Connection with sale canister",
      state: "completed",
    },
    {
      step: "2",
      text: "Sending tokens",
      state: "in_progress",
    },
    {
      step: "3",
      text: "Confirming your participation...",
      state: "next",
    },
    {
      step: "4",
      text: "Updating your data",
      state: "next",
    },
  ];

  it("should render steps", () => {
    const { container } = render(ProgressSteps, {
      props: {
        steps,
      },
    });

    expect(container.querySelectorAll(".step").length).toEqual(steps.length);
  });

  it("should render proper states", () => {
    const { container } = render(ProgressSteps, {
      props: {
        steps,
      },
    });

    const elements = container.querySelectorAll(".step");

    steps.forEach((step, i) =>
      expect(elements[i].classList.contains(step.state)).toBeTruthy()
    );
  });
});
