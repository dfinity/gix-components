import ChipGroup from "$lib/components/ChipGroup.svelte";
import { fireEvent } from "@testing-library/dom";
import { tick } from "svelte";
import { render } from "../../utils/render.test-utils";

describe("ChipGroup", () => {
  const testChips = [
    { id: "stake", label: "Stake", selected: false },
    { id: "maturity", label: "Maturity", selected: false },
    { id: "state", label: "State", selected: false },
    { id: "dissolve delay", label: "Dissolve Delay", selected: false },
  ];

  it("should render Chips", () => {
    const { getAllByTestId, getByTestId } = render(ChipGroup, {
      props: { chips: testChips },
    });

    expect(getByTestId("gix-cmp-chip-group-component")).not.toBeNull();

    const chipElements = getAllByTestId("chip-component");

    expect(chipElements).toHaveLength(testChips.length);

    chipElements.forEach((chip, index) => {
      expect(chip.textContent).toEqual(testChips[index].label);
    });
  });

  it("should support initial selection", () => {
    const chips = [...testChips];
    const selectedIndex = 2;
    chips[selectedIndex] = { ...chips[selectedIndex], selected: true };
    const { getAllByTestId } = render(ChipGroup, {
      props: { chips },
    });
    const chipElements = getAllByTestId("chip-component");
    chipElements.forEach((chip, index) => {
      if (index === selectedIndex) {
        expect(chip).toHaveClass("selected");
      } else {
        expect(chip).not.toHaveClass("selected");
      }
    });
  });

  it("should update selection on click", async () => {
    const selectedIndex = 2;
    const { getAllByTestId } = render(ChipGroup, {
      props: { chips: testChips },
    });

    const chipElements = getAllByTestId("chip-component");
    chipElements.forEach((chip) => expect(chip).not.toHaveClass("selected"));

    fireEvent.click(chipElements[selectedIndex]);
    await tick();
    chipElements.forEach((chip, index) => {
      if (index === selectedIndex) {
        expect(chip).toHaveClass("selected");
      } else {
        expect(chip).not.toHaveClass("selected");
      }
    });
  });

  it("should use onSelect", () => {
    const spySelect = vi.fn();
    const { getAllByTestId } = render(ChipGroup, {
      props: { chips: testChips, onSelect: spySelect },
    });

    expect(spySelect).toHaveBeenCalledTimes(0);

    const chipElements = getAllByTestId("chip-component");

    fireEvent.click(chipElements[1]);

    expect(spySelect).toHaveBeenCalledExactlyOnceWith(testChips[1].id);
  });
});
