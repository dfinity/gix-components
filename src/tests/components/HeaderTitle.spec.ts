/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/svelte";
import HeaderTitleTest from "./HeaderTitleTest.svelte";

describe("HeaderTitle", () => {
  it("should render a slotted content", () => {
    const { getByText } = render(HeaderTitleTest);
    expect(getByText("test title")).toBeInTheDocument();
  });
});
