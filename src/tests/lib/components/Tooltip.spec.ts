import { render } from "@testing-library/svelte";
import { tick } from "svelte";
import TooltipListTest from "./TooltipListTest.svelte";
import TooltipTest from "./TooltipTest.svelte";

describe("Tooltip", () => {
  const id = "tid";
  const idPrefix = "id-prefix";

  it("should render target content", () => {
    const { container } = render(TooltipTest, { text: "text", id });

    const element: HTMLParagraphElement | null = container.querySelector("p");

    expect(element).toBeInTheDocument();
    expect(element?.innerHTML).toBe("content");
  });

  it("should render target content without extra whitespace", () => {
    const { container } = render(TooltipTest, { text: "text", id });

    const element: HTMLParagraphElement | null = container.querySelector(
      "[data-tid='tooltip-component']",
    );

    expect(element).toBeInTheDocument();
    expect(`'${element?.textContent}'`).toBe("'content'");
  });

  it("should render tooltip text content", () => {
    const { container } = render(TooltipTest, { text: "text", id });

    const tooltipElement = container.querySelector(".tooltip");
    expect(tooltipElement).toBeInTheDocument();
    expect(tooltipElement.classList).not.toContain("not-rendered");
    expect(tooltipElement.innerHTML).toBe("text");
  });

  it("should render tooltip slot content", () => {
    const { container } = render(TooltipTest, { slotText: "slot text", id });

    const tooltipElement = container.querySelector(".tooltip");
    expect(tooltipElement).toBeInTheDocument();
    expect(tooltipElement.classList).not.toContain("not-rendered");
    expect(tooltipElement.innerHTML).toBe(
      '<div slot="tooltip-content">slot text</div>',
    );
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

  it("should render different ID per tooltip when not specifying any id or idPrefix", () => {
    render(TooltipTest, { text: "text" });
    const { container } = render(TooltipTest, { text: "text" });
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

  it("should keep tooltips directly in body when rearranged", async () => {
    const tooltip1 = { text: "tooltip1", id: "id1" };
    const tooltip2 = { text: "tooltip2", id: "id2" };
    const { container, component } = render(TooltipListTest, {
      list: [tooltip1, tooltip2],
    });

    {
      const tooltipElements = container.querySelectorAll(".tooltip");
      expect(tooltipElements).toHaveLength(2);
      expect(tooltipElements[0].parentElement).toBe(document.body);
      expect(tooltipElements[1].parentElement).toBe(document.body);
    }

    // After rearranging the components, the tooltips should still be direct
    // children of the body.
    component.$set({ list: [tooltip2, tooltip1] });
    await tick();

    {
      const tooltipElements = container.querySelectorAll(".tooltip");
      expect(tooltipElements).toHaveLength(2);
      expect(tooltipElements[0].parentElement).toBe(document.body);
      expect(tooltipElements[1].parentElement).toBe(document.body);
    }
  });
});
