/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/svelte";
import ComponentTest from "./ComponentTest.svelte";
import { BottomSheet } from "$lib";

describe("BottomSheet", () => {
  it("should render a slotted content", () => {
    const { getByTestId } = render(ComponentTest, {
      props: { cmp: BottomSheet, testId: "bottom-sheet-test-slot" },
    });
    expect(getByTestId("bottom-sheet-test-slot")).not.toBeNull();
  });
});
