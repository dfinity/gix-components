/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/svelte";
import TitleTest from "./TitleTest.svelte";

describe("Title", () => {
  it("should render a slotted content", () => {
    const { getByText } = render(TitleTest);
    expect(getByText("test title")).toBeInTheDocument();
  });
});
