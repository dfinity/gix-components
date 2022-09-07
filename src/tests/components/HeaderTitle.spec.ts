/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/svelte";
import ComponentTest from "./ComponentTest.svelte";
import { HeaderTitle } from "$lib";

describe("HeaderTitle", () => {
  it("should render a slotted content", () => {
    const { getByText } = render(ComponentTest, {
      props: { cmp: HeaderTitle, testId: "header-test-slot" },
    });
    expect(getByText("TEST TITLE")).toBeInTheDocument();
  });
});
