import RadioToggle from "$lib/components/RadioToggle.svelte";
import { fireEvent, render } from "@testing-library/svelte";

describe("RadioToggle", () => {
  const props = {
    name: "radio-toggle",
    labels: ["First", "Second"],
    values: ["0", "1"],
    value: "1",
  };

  const selectedInput = (container: HTMLElement) =>
    container.querySelector(
      'input[name="radio-toggle"]:checked',
    ) as HTMLInputElement;

  it("should render an input per option", () => {
    const { container } = render(RadioToggle, { props });
    const inputs = container.querySelectorAll("input");
    expect(inputs).not.toBeNull();
    expect(inputs.length).toEqual(2);
    expect(inputs[0].getAttribute("type")).toEqual("radio");
  });

  it("should render labels", () => {
    const { getByText } = render(RadioToggle, { props });
    expect(getByText("First")).not.toBeNull();
    expect(getByText("Second")).not.toBeNull();
  });

  it("should have name attribute", () => {
    const { container } = render(RadioToggle, { props });
    expect(container.querySelector('[name="radio-toggle"]')).not.toBeNull();
  });

  it("should generate a name attribute", () => {
    const { container } = render(RadioToggle, {
      props: {
        ...props,
        name: undefined,
      },
    });
    const name = container.querySelector("input")?.getAttribute("name");
    expect(name).not.toBeNull();
  });

  it("should set pre-selected value", () => {
    const { container } = render(RadioToggle, { props });
    expect(selectedInput(container)).not.toBeNull();
    expect(selectedInput(container).value).toEqual("1");
  });

  it("should update selected value", () => {
    const { container, getByText } = render(RadioToggle, { props });
    const firstEntry = getByText("First");

    fireEvent.click(firstEntry);

    expect(selectedInput(container)).not.toBeNull();
    expect(selectedInput(container).value).toEqual("0");
  });

  it("should emit nnsChange event", () => {
    const onChange = vi.fn();
    const { getByText, component } = render(RadioToggle, { props });
    const firstEntry = getByText("First");
    expect(firstEntry).not.toBeNull();

    component.$on("nnsChange", onChange);

    fireEvent.click(firstEntry);

    expect(onChange).toBeCalledTimes(1);
  });
});
