import SystemThemeListener from "$lib/components/SystemThemeListener.svelte";
import { render } from "@testing-library/svelte";
import { vi } from "vitest";
import { Theme, themeStore } from "$lib";
import { get } from "svelte/store";

describe("SystemThemeListener", () => {
  // Mock match media window events
  const listeners: {[key: string]: (() => void) | undefined} = {};

  const mockMatchMedia = vi.fn((query) => ({
    matches: query === '(prefers-color-scheme: dark)',
    media: query,
    addEventListener: (name: string, handler: () => void) => listeners[name] = handler,
    removeEventListener: (name: string) => listeners[name] = undefined,
    dispatchEvent: (event: Event) => listeners[event.type]?.(),
  }));

  vi.stubGlobal('matchMedia', mockMatchMedia);


  it("should set theme to dark if no theme selected", () => {
    render(SystemThemeListener);

    // Init change event
    const changeEvent = new Event('change', {
      bubbles: true,
      cancelable: true
    });

    // Modify the event object to simulate the new theme state (e.g., matches = true for dark mode)
    Object.defineProperty(changeEvent, 'matches', {
      value: true, // Simulate dark mode
    });

    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQueryList.dispatchEvent(changeEvent);

    expect(get(themeStore)).toEqual(Theme.DARK);
  });

  it("should leave theme on light if light theme explicitly selected", () => {
    render(SystemThemeListener);

    // Set theme to light initially
    themeStore.select(Theme.LIGHT);

    // Init change event
    const changeEvent = new Event('change', {
      bubbles: true,
      cancelable: true
    });

    // Modify the event object to simulate the new theme state (e.g., matches = true for dark mode)
    Object.defineProperty(changeEvent, 'matches', {
      value: true, // Simulate dark mode
    });

    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQueryList.dispatchEvent(changeEvent);

    expect(get(themeStore)).toEqual(Theme.LIGHT);
  });


  it("should not change theme and run custom event handler", () => {
    const initialTestValue = "unchanged";
    const expectedTestValue = "changed";
    let testValue = initialTestValue;

    render(SystemThemeListener, {props: {
      nnsOnChange: () => {
        testValue = expectedTestValue;
      }
      }});

    // Set theme to light initially
    themeStore.select(Theme.LIGHT);

    // Init change event
    const changeEvent = new Event('change', {
      bubbles: true,
      cancelable: true
    });

    // Modify the event object to simulate the new theme state (e.g., matches = true for dark mode)
    Object.defineProperty(changeEvent, 'matches', {
      value: true, // Simulate dark mode
    });

    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQueryList.dispatchEvent(changeEvent);

    expect(get(themeStore)).toEqual(Theme.LIGHT);
    expect(testValue).toEqual(expectedTestValue);
  });

});
