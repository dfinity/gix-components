import { render } from "@testing-library/svelte";
import TooltipTest from "./TooltipTest.svelte";

describe("Tooltip", () => {
  const id = "tid";
  const idPrefix = "id-prefix";

  it("should render target content", () => {
    const { container } = render(TooltipTest, { text: "text", id });

    const element: HTMLParagraphElement | null = container.querySelector("p");

    expect(element).toBeInTheDocument();
    expect(element?.innerHTML).toBe("content");

    const tooltipElement = container.querySelector(".tooltip");
    expect(tooltipElement).toBeInTheDocument();
    expect(tooltipElement.classList).not.toContain("not-rendered");
  });

  it("should render aria-describedby and relevant id", () => {
    const { container } = render(TooltipTest, { text: "text", id });
    expect(
      container.querySelector("[aria-describedby='tid']"),
    ).toBeInTheDocument();
    expect(container.querySelector("[id='tid']")).toBeInTheDocument();
  });

  it("should render different ID per tooltip when using idPrefix", () => {
    render(TooltipTest, { text: "text", idPrefix });
    const { container } = render(TooltipTest, { text: "text", idPrefix });
    const tooltipTargets = container.querySelectorAll(".tooltip-target");
    expect(tooltipTargets).toHaveLength(2);
    const describedBy1 = tooltipTargets[0].getAttribute("aria-describedby");
    const describedBy2 = tooltipTargets[1].getAttribute("aria-describedby");
    expect(describedBy1).not.toEqual(describedBy2);
    expect(describedBy1).toMatch(new RegExp(`^${idPrefix}-\\d+$`));
    expect(describedBy2).toMatch(new RegExp(`^${idPrefix}-\\d+$`));
    expect(
      container.querySelector(`[id="${describedBy1}"]`),
    ).toBeInTheDocument();
    expect(
      container.querySelector(`[id="${describedBy2}"]`),
    ).toBeInTheDocument();
  });

  it("should render different ID per tooltip when not specifying any ID", () => {
    render(TooltipTest, { text: "text", idPrefix });
    const { container } = render(TooltipTest, { text: "text", idPrefix });
    const tooltipTargets = container.querySelectorAll(".tooltip-target");
    expect(tooltipTargets).toHaveLength(2);
    const describedBy1 = tooltipTargets[0].getAttribute("aria-describedby");
    const describedBy2 = tooltipTargets[1].getAttribute("aria-describedby");
    expect(describedBy1).not.toEqual(describedBy2);
    expect(
      container.querySelector(`[id="${describedBy1}"]`),
    ).toBeInTheDocument();
    expect(
      container.querySelector(`[id="${describedBy2}"]`),
    ).toBeInTheDocument();
  });

  it("should use id if both id and idPrefix are given", () => {
    const { container } = render(TooltipTest, { text: "text", id, idPrefix });
    const tooltipTarget = container.querySelector(".tooltip-target");
    const describedBy = tooltipTarget.getAttribute("aria-describedby");
    expect(describedBy).toBe(id);
    expect(
      container.querySelector(`[id="${describedBy}"]`),
    ).toBeInTheDocument();
  });

  it("should hide with empty text", () => {
    const { container } = render(TooltipTest, { text: "", id });

    // Content should still be rendered.
    const element: HTMLParagraphElement | null = container.querySelector("p");
    expect(element).toBeInTheDocument();
    expect(element?.innerHTML).toBe("content");

    // But no tooltip should be rendered.
    const tooltipElement = container.querySelector(".tooltip");
    expect(tooltipElement.classList).toContain("not-rendered");
  });

  it("should hide with undefined text", () => {
    const { container } = render(TooltipTest, { text: undefined, id });

    // Content should still be rendered.
    const element: HTMLParagraphElement | null = container.querySelector("p");
    expect(element).toBeInTheDocument();
    expect(element?.innerHTML).toBe("content");

    // But no tooltip should be rendered.
    const tooltipElement = container.querySelector(".tooltip");
    expect(tooltipElement.classList).toContain("not-rendered");
  });

  it("should place tooltip directly in body element to evade overflow:hidden", () => {
    const { container } = render(TooltipTest, { text: undefined, id });

    const tooltipElement = container.querySelector(".tooltip");
    expect(tooltipElement.parentElement).toBe(document.body);
  });
});
