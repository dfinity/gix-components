// TODO: copied from NNS-dapp and needs to be moved to utils
import { nonNullish } from "@dfinity/utils";

// eslint-disable-next-line local-rules/prefer-object-params
export const debounce = (
  func: (...args: unknown[]) => unknown,
  timeout?: number,
) => {
  let timer: NodeJS.Timer | undefined;

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
