import Html from "$lib/components/Html.svelte";
import { sanitize } from "$lib/utils/html.utils";
import { render } from "@testing-library/svelte";
import type { MockedFunction } from "vitest";

vi.mock("$lib/utils/html.utils", () => {
  return {
    sanitize: vi.fn().mockImplementation((text: string) => text),
  };
});

describe("Html", () => {
  beforeEach((sanitize as MockedFunction<typeof sanitize>).mockClear);

  afterAll(vi.clearAllMocks);

  it("should render plane text", () => {
    const { getByText } = render(Html, {
      props: {
        text: "test",
      },
    });

    expect(getByText("test")).toBeInTheDocument();
  });

  it("should render HTML content", () => {
    const { container, getByText } = render(Html, {
      props: {
        text: "<a href='#'>test link</a>",
      },
    });

    expect(getByText("test link")).toBeInTheDocument();
    expect(container.querySelector("a")).toBeInTheDocument();
    expect(container.querySelector("a")?.getAttribute("href")).toEqual("#");
  });

  it("should call sanitize", async () => {
    render(Html, {
      props: {
        text: "test",
      },
    });

    expect(sanitize).toBeCalledTimes(1);
  });
});
