import BottomSheet from "$lib/components/BottomSheet.svelte";
import { render } from "@testing-library/svelte";
import BottomSheetTest from "./BottomSheetTest.svelte";
import ComponentTest from "./ComponentTest.svelte";

describe("BottomSheet", () => {
  it("should render a slotted content", () => {
    const { getByTestId, queryByTestId } = render(ComponentTest, {
      props: { cmp: BottomSheet, testId: "bottom-sheet-test-slot" },
    });

    expect(getByTestId("bottom-sheet-test-slot")).not.toBeNull();
    expect(
      queryByTestId("bottom-sheet-test-slot-header"),
    ).not.toBeInTheDocument();
    expect(
      queryByTestId("bottom-sheet-test-slot-footer"),
    ).not.toBeInTheDocument();
  });

  it("should render a header and footer slot as well", () => {
    const { getByTestId } = render(BottomSheetTest, {
      props: { testId: "bottom-sheet-test-slot" },
    });

    expect(getByTestId("bottom-sheet-test-slot-content")).not.toBeNull();
    expect(getByTestId("bottom-sheet-test-slot-header")).not.toBeNull();
    expect(getByTestId("bottom-sheet-test-slot-footer")).not.toBeNull();
  });
});
