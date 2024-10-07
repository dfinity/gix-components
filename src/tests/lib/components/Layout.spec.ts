import Layout from "$lib/components/Layout.svelte";
import { render } from "@testing-library/svelte";

describe("Layout", () => {
  it("should render split-pane", async () => {
    const { container } = render(Layout, {
      props: {
        layout: "split",
      },
    });

    expect(container.querySelector(".split-pane")).not.toBeNull();
  });

  it("should render stretch-pane", async () => {
    const { container } = render(Layout, {
      props: {
        layout: "stretch",
      },
    });

    expect(container.querySelector(".stretch-pane")).not.toBeNull();
  });
});
