/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/svelte";
import { layoutMenuOpen } from "../../../lib/stores/layout.store";
import ContentTest from "./ContentTest.svelte";

describe("Content", () => {
  it("should render slotted elements", () => {
    const { getByTestId } = render(ContentTest);

    expect(getByTestId("content-test-slot")).not.toBeNull();
    expect(getByTestId("content-test-title-slot")).not.toBeNull();
    expect(getByTestId("content-test-toolbar-end-slot")).not.toBeNull();
  });

  it("should render backdrop", () => {
    layoutMenuOpen.set(true);

    const { getByTestId } = render(ContentTest);
    expect(getByTestId("backdrop")).not.toBeNull();
  });
});
