import Back from "$lib/components/Back.svelte";
import { fireEvent, render } from "@testing-library/svelte";

describe("Back", () => {
  it("should forward the click event", () =>
    new Promise<void>((done) => {
      const { getByTestId } = render(Back, {
        // TODO: remove once events are migrated to callback props
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        events: {
          nnsBack: () => done(),
        },
      });

      const button = getByTestId("back") as HTMLButtonElement;
      expect(button).not.toBeNull();
      fireEvent.click(button);
    }));
});
