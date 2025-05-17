import { stopPropagation } from "$lib/utils/event-modifiers.utils";
import { fireEvent, render } from "@testing-library/svelte";
import StopPropagationTest from "./StopPropagationTest.svelte";

describe("event-modifiers-utils", () => {
  describe("stopPropagation", () => {
    const stopPropagationMock = vi.fn();
    const callbackMock = vi.fn();

    const mockEvent = {
      stopPropagation: stopPropagationMock,
      currentTarget: {} as EventTarget & HTMLButtonElement,
    } as unknown as MouseEvent & {
      currentTarget: EventTarget & HTMLButtonElement;
    };

    beforeEach(() => {
      vi.clearAllMocks();
    });

    it("should stop event propagation", async () => {
      const handler = stopPropagation(callbackMock);

      await handler(mockEvent);

      expect(stopPropagationMock).toHaveBeenCalledOnce();
    });

    it("should call the callback", async () => {
      const handler = stopPropagation(callbackMock);

      await handler(mockEvent);

      expect(callbackMock).toHaveBeenCalledOnce();
    });

    it("should still call callback even if event is undefined", async () => {
      const handler = stopPropagation(callbackMock);

      await handler(undefined);

      expect(callbackMock).toHaveBeenCalledOnce();
    });

    it("should throw if callback throws an error", async () => {
      const error = new Error("Test error");
      const handler = stopPropagation(() => {
        throw error;
      });

      await expect(handler(mockEvent)).rejects.toThrow(error);
    });

    it("should throw if callback is not a function", async () => {
      // @ts-expect-error Testing this on purpose
      const handler = stopPropagation(undefined);

      await expect(handler(mockEvent)).rejects.toThrow(
        new TypeError("fn is not a function"),
      );
    });

    it("should call only the child handler and stop propagation to parent", async () => {
      const onParentClick = vi.fn();
      const onChildClick = vi.fn();
      const childTestId = "child-button";

      const { getByTestId } = render(StopPropagationTest, {
        props: { onParentClick, onChildClick, childTestId },
      });

      const button = getByTestId(childTestId);
      await fireEvent.click(button);

      expect(onChildClick).toHaveBeenCalledOnce();
      expect(onParentClick).not.toHaveBeenCalled();
    });
  });
});
