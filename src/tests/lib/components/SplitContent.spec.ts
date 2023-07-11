import { render } from "@testing-library/svelte";
import { layoutMenuOpen } from "../../../lib/stores/layout.store";
import SplitContentTest from "./SplitContentTest.svelte";

describe("SplitContent", () => {
  it("should render slotted elements", () => {
    const { getByTestId } = render(SplitContentTest);

    expect(getByTestId("content-test-start-slot")).not.toBeNull();
    expect(getByTestId("content-test-end-slot")).not.toBeNull();
    expect(getByTestId("content-test-title-slot")).not.toBeNull();
    expect(getByTestId("content-test-toolbar-end-slot")).not.toBeNull();
  });

  it("should render two backdrops", () => {
    layoutMenuOpen.set(true);

    const { getAllByTestId } = render(SplitContentTest);
    expect(getAllByTestId("backdrop").length).toEqual(2);
  });

  it("should render a header", () => {
    const { container } = render(SplitContentTest);
    expect(container.querySelector("header")).not.toBeNull();
  });
});
