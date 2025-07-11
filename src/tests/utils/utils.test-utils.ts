import { fireEvent } from "@testing-library/dom";

// eslint-disable-next-line local-rules/prefer-object-params
export const clickByTestId = (
  queryByTestId: (matcher: string) => HTMLElement | null,
  testId: string,
) => {
  const element = queryByTestId(testId);

  expect(element).toBeInTheDocument();

  element && fireEvent.click(element);
};
