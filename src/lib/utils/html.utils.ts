import DOMPurify from "dompurify";

/**
 * Sanitize a text with DOMPurify.
 *
 * Note: this library needs a workaround to work in the NodeJS context - i.e. for our jest test suite.
 * See the jest-setup.ts for details.
 */
export const sanitize = (text: string): string => {
  try {
    if (typeof DOMPurify.sanitize === "function") {
      return DOMPurify.sanitize(text);
    }

    if (typeof global.DOMPurify.sanitize === "function") {
      // utilize jest version
      return global.DOMPurify.sanitize(text);
    }
  } catch (err) {
    console.error(err);
  }

  console.error('no DOMPurify support');

  return '';
};
