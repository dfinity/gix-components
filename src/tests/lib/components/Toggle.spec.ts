import Toggle from "$lib/components/Toggle.svelte";
import { fireEvent, render } from "@testing-library/svelte";

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
});
