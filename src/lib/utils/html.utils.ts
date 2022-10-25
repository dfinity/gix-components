import DOMPurify from "dompurify";

/**
 * Sanitize a text with DOMPurify.
 *
 * Note: this library needs a workaround to work in the NodeJS context - i.e. for our jest test suite.
 * See the jest-setup.ts for details.
 */
export const sanitize = (text: string): string => {
  const domPurify =
    typeof DOMPurify === "function" ? DOMPurify : global.DOMPurify;
  return domPurify.sanitize(text);
};
