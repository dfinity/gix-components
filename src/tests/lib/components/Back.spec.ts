/**
 * @jest-environment jsdom
 */

import { fireEvent, render } from "@testing-library/svelte";
import Back from "$lib/components/Back.svelte";

describe("Back", () => {
  it("should forward the click event", (done) => {
    const { getByTestId, component } = render(Back);

    component.$on("nnsBack", () => {
      done();
    });

    const button = getByTestId("back") as HTMLButtonElement;
    expect(button).not.toBeNull();
    fireEvent.click(button);
  });
});
