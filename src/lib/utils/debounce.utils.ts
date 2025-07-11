// TODO: copied from NNS-dapp and needs to be moved to utils
/* eslint-disable-next-line @typescript-eslint/ban-types */
import { nonNullish } from "@dfinity/utils";

export const debounce = (
  func: (...args: unknown[]) => unknown,
  timeout?: number,
) => {
  let timer: string | number | NodeJS.Timeout | undefined;

  return (...args: unknown[]) => {
    const next = () => func(...args);

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(
      next,
      nonNullish(timeout) && timeout > 0 ? timeout : 300,
    );
  };
};
