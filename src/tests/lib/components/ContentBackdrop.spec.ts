import ContentBackdrop from "$lib/components/ContentBackdrop.svelte";
import { layoutMenuOpen } from "$lib/stores/layout.store";
import { render } from "@testing-library/svelte";

describe("ContentBackdrop", () => {
  it("should be displayed if menu open", async () => {
    layoutMenuOpen.set(true);

    const { getByTestId } = render(ContentBackdrop);

    expect(getByTestId("backdrop")).not.toBeNull();
  });

  it("should not be displayed if menu closed", () => {
    layoutMenuOpen.set(false);

    const { getByTestId } = render(ContentBackdrop);

    expect(() => getByTestId("backdrop")).toThrow();
  });
});
