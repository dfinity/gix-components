import { Theme } from "$lib/types/theme";
import { enumFromStringExists } from "$lib/utils/enum.utils";

describe("enum-utils", () => {
  it("should return enum exists", () => {
    expect(
      enumFromStringExists<typeof Theme>({
        obj: Theme,
        value: "dark",
      })
    ).toBeTruthy();
  });

  it("should return enum does not exist", () => {
    expect(
      enumFromStringExists<typeof Theme>({
        obj: Theme,
        value: "yellow",
      })
    ).toBeFalsy();

    expect(
      enumFromStringExists<typeof Theme>({
        obj: Theme,
        value: null,
      })
    ).toBeFalsy();
  });
});
