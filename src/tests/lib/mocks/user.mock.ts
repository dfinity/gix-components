import type { waitForOptions } from "@testing-library/dom/types/wait-for";

// In comparison to Jest, vitest requires a slightly longer delay for re-rendering after the user performs a fireEvent.click action.
export const WAIT_FOR_USER_EVENT: waitForOptions = { timeout: 5000 };
