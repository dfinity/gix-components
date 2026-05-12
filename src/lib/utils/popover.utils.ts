import type { PopoverDirection } from "$lib/types/popover";

export interface PickPopoverDirectionParams {
  /** Anchor's left edge relative to the viewport (e.g. `getBoundingClientRect().left`). */
  anchorLeft: number;
  /** Anchor's right edge relative to the viewport (e.g. `getBoundingClientRect().right`). */
  anchorRight: number;
  /** Measured width of the popover panel. Pass `0` when not yet measured. */
  panelWidth: number;
  /** Viewport width excluding the vertical scrollbar (`document.documentElement.clientWidth`). */
  viewportWidth: number;
  /** Minimum margin (in px) we want to keep between the panel and the viewport edge. */
  viewportPadding: number;
  /** Consumer-requested side; treated as a preference and honored when it fits. */
  preferredDirection: PopoverDirection;
}

/**
 * Returns the side the popover panel should grow towards.
 *
 * The `preferredDirection` is honored when the panel fits within the viewport
 * on that side. If it would overflow, we flip to the opposite side when that
 * one fits. When neither side can contain the panel in full, we fall back to
 * the side that leaves the most room so the existing `max-width` clamping
 * keeps the panel inside the viewport.
 *
 * When `panelWidth` is `0` (not measured yet) we return the preferred side
 * unchanged so that the first paint matches today's behavior.
 */
export const pickPopoverDirection = ({
  anchorLeft,
  anchorRight,
  panelWidth,
  viewportWidth,
  viewportPadding,
  preferredDirection,
}: PickPopoverDirectionParams): PopoverDirection => {
  if (panelWidth <= 0) {
    return preferredDirection;
  }

  const ltrFits = anchorLeft + panelWidth <= viewportWidth - viewportPadding;
  const rtlFits = anchorRight - panelWidth >= viewportPadding;

  if (preferredDirection === "ltr") {
    if (ltrFits) {
      return "ltr";
    }
    if (rtlFits) {
      return "rtl";
    }
  } else {
    if (rtlFits) {
      return "rtl";
    }
    if (ltrFits) {
      return "ltr";
    }
  }

  const ltrRoom = viewportWidth - viewportPadding - anchorLeft;
  const rtlRoom = anchorRight - viewportPadding;
  return rtlRoom > ltrRoom ? "rtl" : "ltr";
};
