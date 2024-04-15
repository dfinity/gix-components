import { render } from "@testing-library/svelte";
import TooltipTest from "./TooltipTest.svelte";

describe("Tooltip", () => {
  it("should render target content", () => {
    const { container } = render(TooltipTest, { text: "text" });

    const element: HTMLParagraphElement | null = container.querySelector("p");

    expect(element).toBeInTheDocument();
    expect(element?.innerHTML).toBe("content");

    const tooltipElement = container.querySelector(".tooltip");
    expect(tooltipElement).toBeInTheDocument();
    expect(tooltipElement.classList).not.toContain("not-rendered");
  });

  it("should render aria-describedby and relevant id", () => {
    const { container } = render(TooltipTest, { text: "text" });
    expect(
      container.querySelector("[aria-describedby='tid']"),
    ).toBeInTheDocument();
    expect(container.querySelector("[id='tid']")).toBeInTheDocument();
  });

  it("should hide with empty text", () => {
    const { container } = render(TooltipTest, { text: "" });

    // Content should still be rendered.
    const element: HTMLParagraphElement | null = container.querySelector("p");
    expect(element).toBeInTheDocument();
    expect(element?.innerHTML).toBe("content");

    // But no tooltip should be rendered.
    const tooltipElement = container.querySelector(".tooltip");
    expect(tooltipElement.classList).toContain("not-rendered");
  });

  it("should hide with undefined text", () => {
    const { container } = render(TooltipTest, { text: undefined });

    // Content should still be rendered.
    const element: HTMLParagraphElement | null = container.querySelector("p");
    expect(element).toBeInTheDocument();
    expect(element?.innerHTML).toBe("content");

    // But no tooltip should be rendered.
    const tooltipElement = container.querySelector(".tooltip");
    expect(tooltipElement.classList).toContain("not-rendered");
  });

  it("should place tooltip directly in body element to evade overflow:hidden", () => {
    const { container } = render(TooltipTest, { text: undefined });

    const tooltipElement = container.querySelector(".tooltip");
    expect(tooltipElement.parentElement).toBe(document.body);
  });
});
