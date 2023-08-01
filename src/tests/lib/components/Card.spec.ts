import Card from "$lib/components/Card.svelte";
import { fireEvent, render } from "@testing-library/svelte";

describe("Card", () => {
  it("should render an article", () => {
    const { container } = render(Card);

    const article = container.querySelector("article");
    expect(article).not.toBeNull();
  });

  it("should render a link", () => {
    const { container } = render(Card, {
      props: {
        href: "https://nns.internetcomputer.org",
      },
    });

    const link = container.querySelector("a");
    expect(link).not.toBeNull();
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

  it("should has a clickable style", () => {
    const { container } = render(Card, {
      props: { role: "button" },
    });

    const article = container.querySelector(".clickable");
    expect(article).not.toBeNull();
  });

  it("should has a clickable style for link too", () => {
    const { container } = render(Card, {
      props: { href: "https://nns.internetcomputer.org" },
    });

    const a = container.querySelector(".clickable");
    expect(a).not.toBeNull();
  });

  it("should apply a theme style", () => {
    const { container } = render(Card, {
      props: { theme: "transparent" },
    });

    const article = container.querySelector(".transparent");
    expect(article).not.toBeNull();
  });
});
