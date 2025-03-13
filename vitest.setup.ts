import "@testing-library/jest-dom/vitest";
import { configure } from "@testing-library/svelte";
// jsdom does not implement TextEncoder
// Polyfill the encoders with node
import { TextDecoder, TextEncoder } from "util";
import { IntersectionObserverPassive } from "./src/tests/lib/mocks/infinitescroll.mock";

global.TextEncoder = TextEncoder;
(global as { TextDecoder: typeof TextDecoder }).TextDecoder = TextDecoder;
(
  global as { IntersectionObserver: typeof IntersectionObserver }
).IntersectionObserver = IntersectionObserverPassive;

// We mock ResizeObserver and element.animate because neither JSDOM nor Happy DOM supports them, while Svelte v5 requires them.
// Interesting related thread: https://github.com/testing-library/svelte-testing-library/issues/284
global.ResizeObserver = class ResizeObserver {
  observe() {
    // do nothing
  }
  unobserve() {
    // do nothing
  }
  disconnect() {
    // do nothing
  }
};

Element.prototype.animate = vi
  .fn()
  .mockImplementation(() => ({ cancel: vi.fn(), finished: Promise.resolve() }));

// testing-library setup
configure({
  testIdAttribute: "data-tid",
});

// make `DOMPurify` available for unit tests
import DOMPurify from "dompurify";
const purify = DOMPurify();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: used for testing only
global.DOMPurify = purify;

global.ResizeObserver = class ResizeObserver {
  observe() {
    // do nothing
  }
  unobserve() {
    // do nothing
  }
  disconnect() {
    // do nothing
  }
};
