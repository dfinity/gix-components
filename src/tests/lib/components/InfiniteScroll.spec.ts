import InfiniteScroll from "$lib/components/InfiniteScroll.svelte";
import { render } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";
import {
  IntersectionObserverActive,
  IntersectionObserverPassive,
} from "../mocks/infinitescroll.mock";
import InfiniteScrollTest from "./InfiniteScrollTest.svelte";

describe("InfiniteScroll", () => {
  beforeAll(() => {
    Object.defineProperty(window, "IntersectionObserver", {
      writable: true,
      configurable: true,
      value: IntersectionObserverActive,
    });
  });

  afterAll(() => (global.IntersectionObserver = IntersectionObserverPassive));

  it("should render a container", () => {
    const mockSnippet = createRawSnippet(() => ({
      render: () => `<span>Mock Snippet</span>`,
    }));

    const { container } = render(InfiniteScroll, {
      props: {
        onintersect: () => {},
        children: mockSnippet,
      },
    });

    expect(container.querySelector("ul")).not.toBeNull();
  });

  it("should trigger an intersect event", () => {
    const spyIntersect = vi.fn();

    render(InfiniteScrollTest, {
      props: {
        elements: new Array(100),
        spy: spyIntersect,
      },
    });

    expect(spyIntersect).toHaveBeenCalled();
  });

  it("should not trigger an intersect event", () => {
    const spyIntersect = vi.fn();

    render(InfiniteScrollTest, {
      props: {
        elements: new Array(100),
        disabled: true,
        spy: spyIntersect,
      },
    });

    expect(spyIntersect).not.toHaveBeenCalled();
  });
});
