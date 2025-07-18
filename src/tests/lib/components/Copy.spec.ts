import Copy from "$lib/components/Copy.svelte";
import { fireEvent, render } from "@testing-library/svelte";

describe("Copy", () => {
  const value = "test-copy";
  const props: { value: string } = { value };

  it("should render an accessible button", () => {
    const { queryByRole } = render(Copy, {
      props,
    });

    const button = queryByRole("button");

    expect(button?.getAttribute("aria-label")).toEqual(
      `Copy to clipboard: ${value}`,
    );
  });

  it("should copy value to clipboard", () => {
    const { getByRole } = render(Copy, {
      props,
    });

    Object.assign(window.navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });

    const button = getByRole("button");
    fireEvent.click(button);

    expect(window.navigator.clipboard.writeText).toHaveBeenCalledWith(value);
  });
});
