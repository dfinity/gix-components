/**
 * @jest-environment jsdom
 */

import Tag from "$lib/components/Tag.svelte";
import { render } from "@testing-library/svelte";
import TagTest from "./TagTest.svelte";

describe("Tag", () => {
  it("should render a span element by default", () => {
    const { container } = render(Tag);

    expect(container.querySelector("span")).not.toBeNull();
  });

  it("should render the passed tagname", () => {
    const { container } = render(Tag, {
      props: { tagName: "h3" },
    });

    expect(container.querySelector("h3")).not.toBeNull();
  });

  it("should render the slot of the Tag", () => {
    const { getByText } = render(TagTest);

    expect(getByText("Test_Tag")).toBeInTheDocument();
  });
});
