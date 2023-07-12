import "@testing-library/jest-dom";
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

// testing-library setup
configure({
  testIdAttribute: "data-tid",
});

// make `DOMPurify` available for unit tests
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
const { window } = new JSDOM("<!DOCTYPE html>");
const purify = DOMPurify(window as unknown as Window);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: used for testing only
global.DOMPurify = purify;
