/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/svelte";
import TwoColumnsTest from "./TwoColumnsTest.svelte";

describe("TwoColumns", () => {
  it("should render slots", () => {
    const { getByTestId } = render(TwoColumnsTest);

    expect(getByTestId("two-columns-test-start-slot")).not.toBeNull();
    expect(getByTestId("two-columns-test-end-slot")).not.toBeNull();

    expect(
      getByTestId(
        "two-columns-test-start-slot"
      )?.parentElement?.classList.contains("start")
    ).toBeTruthy();
    expect(
      getByTestId(
        "two-columns-test-end-slot"
      )?.parentElement?.classList.contains("end")
    ).toBeTruthy();
  });

  it("should style two columns with classes", () => {
    const { getByTestId } = render(TwoColumnsTest);

    expect(
      getByTestId(
        "two-columns-test-start-slot"
      )?.parentElement?.classList.contains("start")
    ).toBeTruthy();
    expect(
      getByTestId(
        "two-columns-test-end-slot"
      )?.parentElement?.classList.contains("end")
    ).toBeTruthy();
  });
});
