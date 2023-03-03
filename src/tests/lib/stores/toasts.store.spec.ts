import { get } from "svelte/store";
import { toastsStore } from "../../../lib";

describe("toasts-store", () => {
  it("should reset selected toast", () => {
    toastsStore.show({
      level: "success",
      text: "test",
    });

    toastsStore.show({
      level: "success",
      text: "test",
    });

    toastsStore.show({
      level: "warn",
      text: "test",
    });

    toastsStore.show({
      level: "warn",
      text: "test",
    });

    toastsStore.show({
      level: "error",
      text: "test",
    });

    toastsStore.show({
      level: "info",
      text: "test",
    });

    toastsStore.reset(["error", "warn"]);

    const msgs = get(toastsStore);

    expect(msgs.length).toEqual(3);
  });
});
