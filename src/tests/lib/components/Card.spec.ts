import Card from "$lib/components/Card.svelte";
import { fireEvent, render } from "@testing-library/svelte";

describe("Card", () => {
  it("should render an article", () => {
    const { container } = render(Card);

    const article = container.querySelector("article");
    expect(article).not.toBeNull();
  });

  it("should article with role and aria-label", () => {
    const role = "button";
    const ariaLabel = "go away";
    const { container } = render(Card, {
      props: { role, ariaLabel },
    });

    const article = container.querySelector("article");
    expect(article?.getAttribute("role")).toBe(role);
    expect(article?.getAttribute("aria-label")).toBe(ariaLabel);
  });

  it("should forward the click event", () =>
    new Promise<void>((done) => {
      const { container, component } = render(Card);

      component.$on("click", () => {
        done();
      });

      const article = container.querySelector("article");
      expect(article).not.toBeNull();
      article && fireEvent.click(article);
    }));

  it("should render an icon", () => {
    const { container } = render(Card, {
      props: { icon: "arrow" },
    });

    const arrow = container.querySelector("svg");
    expect(arrow).not.toBeNull();
  });

  it("should has a clickable style", () => {
    const { container } = render(Card, {
      props: { role: "radio" },
    });

    const article = container.querySelector(".clickable");
    expect(article).not.toBeNull();
  });

  it("should apply a theme style", () => {
    const { container } = render(Card, {
      props: { theme: "transparent" },
    });

    const article = container.querySelector(".transparent");
    expect(article).not.toBeNull();
  });
});
