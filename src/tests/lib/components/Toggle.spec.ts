import Toggle from "$lib/components/Toggle.svelte";
import { fireEvent, render, waitFor } from "@testing-library/svelte";

describe("Toggle", () => {
  const props = {
    checked: false,
    ariaLabel: "test",
  };

  it("should render an input checkbox", () => {
    const { container } = render(Toggle, { props });

    const input = container.querySelector("input") as HTMLInputElement;
    expect(input).not.toBeNull();
    expect(input.getAttribute("type")).toEqual("checkbox");
  });

  it("should render a checkbox enabled", () => {
    const { container } = render(Toggle, { props });

    const input = container.querySelector("input") as HTMLInputElement;
    expect(input?.hasAttribute("disabled")).toBeFalsy();
  });

  it("should render a checkbox disabled", () => {
    const { container } = render(Toggle, {
      props: {
        ...props,
        disabled: true,
      },
    });

    const input = container.querySelector("input") as HTMLInputElement;
    expect(input?.hasAttribute("disabled")).toBeTruthy();
  });

  it("should render an aria label", () => {
    const { container } = render(Toggle, { props });

    const input = container.querySelector("input") as HTMLInputElement;
    expect(input.getAttribute("aria-label")).toEqual(props.ariaLabel);
  });

  it("should toggle checked", () => {
    const { component, container } = render(Toggle, { props });

    const input = container.querySelector("input") as HTMLInputElement;

    const onToggle = vi.fn();
    component.$on("nnsToggle", onToggle);

    fireEvent.click(input);

    expect(onToggle).toBeCalled();
  });

  it("should toggle checked with keyboard", () => {
    const { component, container } = render(Toggle, { props });

    const toggle = container.querySelector("div.toggle") as HTMLDivElement;

    const onToggle = vi.fn();
    component.$on("nnsToggle", onToggle);

    fireEvent.keyDown(toggle, { code: "Space" });

    expect(onToggle).toBeCalled();
  });

  it("should reflect toggle state on aria pressed", async () => {
    const { container } = render(Toggle, { props });

    const toggle = container.querySelector("div.toggle") as HTMLDivElement;

    expect(toggle.getAttribute("aria-pressed")).toEqual("false");

    fireEvent.keyDown(toggle, { code: "Space" });

    await waitFor(() =>
      expect(toggle.getAttribute("aria-pressed")).toEqual("true"),
    );
  });

  it("should have an accessible toggle", () => {
    const { container } = render(Toggle, { props });

    const toggle = container.querySelector("div.toggle") as HTMLDivElement;

    expect(toggle.getAttribute("role")).toEqual("button");
    expect(toggle.getAttribute("tabindex")).toEqual("0");
  });
});
