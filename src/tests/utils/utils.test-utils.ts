import { fireEvent } from "@testing-library/dom";

// eslint-disable-next-line local-rules/prefer-object-params
export const clickByTestId = async (
  queryByTestId: (matcher: string) => HTMLElement | null,
  testId: string,
  // eslint-disable-next-line require-await
) => {
  const element = queryByTestId(testId);

  expect(element).toBeInTheDocument();

  element && fireEvent.click(element);
};
