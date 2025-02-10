import {
  fade as svelteFade,
  fly as svelteFly,
  scale as svelteScale,
  slide as svelteSlide,
  type FadeParams,
  type FlyParams,
  type ScaleParams,
  type SlideParams,
  type TransitionConfig,
} from "svelte/transition";

/**
 * A wrapper around Svelte's `fade` transition that disables itself in test mode.
 *
 * Prevents the test error "Cannot set properties of undefined (setting 'onfinish')".
 *
 * @param {HTMLElement} node - The HTML element to apply the transition to.
 * @param {FadeParams} [params] - Optional parameters for the fade transition.
 * @returns {TransitionConfig} The transition configuration, or an empty object in test mode.
 */
export const testSafeFade = (
  node: HTMLElement,
  params?: FadeParams | undefined,
): TransitionConfig => {
  if (process.env.NODE_ENV === "test") {
    return {};
  }

  return svelteFade(node, params);
};

/**
 * A wrapper around Svelte's `fly` transition that disables itself in test mode.
 *
 * Prevents the test error "Cannot set properties of undefined (setting 'onfinish')".
 *
 * @param {HTMLElement} node - The HTML element to apply the transition to.
 * @param {FlyParams} [params] - Optional parameters for the fly transition.
 * @returns {TransitionConfig} The transition configuration, or an empty object in test mode.
 */
export const testSafeFly = (
  node: HTMLElement,
  params?: FlyParams | undefined,
): TransitionConfig => {
  if (process.env.NODE_ENV === "test") {
    return {};
  }

  return svelteFly(node, params);
};

/**
 * A wrapper around Svelte's `scale` transition that disables itself in test mode.
 *
 * Prevents the test error "Cannot set properties of undefined (setting 'onfinish')".
 *
 * @param {HTMLElement} node - The HTML element to apply the transition to.
 * @param {ScaleParams} [params] - Optional parameters for the scale transition.
 * @returns {TransitionConfig} The transition configuration, or an empty object in test mode.
 */
export const testSafeScale = (
  node: HTMLElement,
  params?: ScaleParams | undefined,
): TransitionConfig => {
  if (process.env.NODE_ENV === "test") {
    return {};
  }

  return svelteScale(node, params);
};

/**
 * A wrapper around Svelte's `slide` transition that disables itself in test mode.
 *
 * Prevents the test error "Cannot set properties of undefined (setting 'onfinish')".
 *
 * @param {HTMLElement} node - The HTML element to apply the transition to.
 * @param {SlideParams} [params] - Optional parameters for the slide transition.
 * @returns {TransitionConfig} The transition configuration, or an empty object in test mode.
 */
export const testSafeSlide = (
  node: HTMLElement,
  params?: SlideParams | undefined,
): TransitionConfig => {
  if (process.env.NODE_ENV === "test") {
    return {};
  }

  return svelteSlide(node, params);
};
