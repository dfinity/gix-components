import { Theme } from "$lib/types/theme";
import { enumFromStringExists } from "$lib/utils/enum.utils";

describe("enum-utils", () => {
  it("should return enum exists", () => {
    expect(
      enumFromStringExists<Theme>({
        obj: Theme as unknown as Theme,
        value: "dark",
      })
    ).toBeTruthy();
  });

  it("should return enum does not exist", () => {
    expect(
      enumFromStringExists<Theme>({
        obj: Theme as unknown as Theme,
        value: "yellow",
      })
    ).toBeFalsy();

    expect(
      enumFromStringExists<Theme>({
        obj: Theme as unknown as Theme,
        value: null,
      })
    ).toBeFalsy();
  });
});
