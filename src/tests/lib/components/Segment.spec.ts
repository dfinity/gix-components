import {
  fireEvent,
  render,
  waitFor,
  type RenderResult,
} from "@testing-library/svelte";
import SegmentTest from "./SegmentTest.svelte";

describe("Segment", () => {
  const firstSegmentId = Symbol();
  const secondSegmentId = Symbol();
  const thirdSegmentId = Symbol();

  const renderSegment = (): RenderResult<SegmentTest> =>
    render(SegmentTest, {
      firstSegmentId,
      secondSegmentId,
      thirdSegmentId,
    });

  it("should render three segments", () => {
    const { getAllByTestId } = renderSegment();

    expect(getAllByTestId("segment-button")).toHaveLength(3);
  });

  it("should have first segment selected", () => {
    const { container } = renderSegment();

    const button = container.querySelector(
      '[data-tid="segment-button"]:first-of-type',
    );

    expect(button).not.toBeNull();
    expect(button?.classList.contains("selected")).toBeTruthy();
  });

  it("should select second button", async () => {
    const { container } = renderSegment();

    const button = container.querySelector(
      "div.segment-button:nth-of-type(3) button",
    ) as HTMLButtonElement;

    expect(button).not.toBeNull();

    await fireEvent.click(button);

    await waitFor(() =>
      expect(button?.classList.contains("selected")).toBeTruthy(),
    );
  });

  it("should select the segment that the parent sets", async () => {
    const { getAllByTestId, rerender } = renderSegment();

    const [firstButton, , thirdButton] = getAllByTestId("segment-button");

    expect(firstButton.classList.contains("selected")).toBeTruthy();
    expect(thirdButton.classList.contains("selected")).toBeFalsy();

    await rerender({ selectedSegmentId: thirdSegmentId });

    expect(firstButton.classList.contains("selected")).toBeFalsy();
    expect(thirdButton.classList.contains("selected")).toBeTruthy();
  });
});
