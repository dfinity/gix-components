import Back from "$lib/components/Back.svelte";
import { fireEvent } from "@testing-library/svelte";
import { renderWithEvents } from "../../utils/render.test-utils";

describe("Back", () => {
  it("should forward the click event", () =>
    new Promise<void>((done) => {
      const { getByTestId } = renderWithEvents(Back, {
        events: {
          nnsBack: () => done(),
        },
      });

      const button = getByTestId("back") as HTMLButtonElement;
      expect(button).not.toBeNull();
      fireEvent.click(button);
    }));
});
