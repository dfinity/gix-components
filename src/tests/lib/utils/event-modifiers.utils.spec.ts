import { stopPropagation } from "$lib/utils/event-modifiers.utils";
import { describe } from "vitest";

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
  });
});
