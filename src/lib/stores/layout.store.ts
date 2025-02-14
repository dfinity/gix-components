import { derived, writable } from "svelte/store";

export const layoutBottomOffset = writable<number>(0);
export const layoutMenuOpen = writable<boolean>(false);
export const layoutContentScrollY = writable<"hidden" | "auto">("auto");
export const layoutContentScrollTop = (() => {
  const { subscribe, set, update } = writable<{
    scrollTop: number;
    lastScrollTop: number;
  }>({
    scrollTop: 0,
    lastScrollTop: 0,
  });

  return {
    subscribe,
    set,
    updateScrollTop: (newScrollTop: number) => {
      update((state) => ({
        scrollTop: newScrollTop,
        lastScrollTop: state.scrollTop, // Keep previous scroll position
      }));
    },
  };
})();
export const layoutContentScrollDirection = derived(
  layoutContentScrollTop,
  ({ scrollTop, lastScrollTop }) => (scrollTop > lastScrollTop ? "down" : "up"),
);
