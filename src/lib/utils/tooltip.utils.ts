type translateTooltipParams = {
  containerRect: DOMRect;
  targetRect: DOMRect;
  tooltipRect: DOMRect;
  scrollbarWidth: number;
  top?: boolean;
  center?: boolean;
};

/**
 * Returns how much the tooltip should be translated in the x and y directions.
 * {x: 0, y: 0} means no translation and results in tooltip appearing where it
 * would normally appear, below the target, potentially with some margin in
 * between, depending on how the target is styled.
 *
 * The translation should be such that the tooltip remains within the bounds of
 * the container, centered on the target if possible.
 */
export const translateTooltip = (
  params: translateTooltipParams,
): { x: number; y: number } => {
  const newTooltipPosition = getNewTooltipPosition(params);
  return {
    x: newTooltipPosition.x - params.tooltipRect.x,
    y: newTooltipPosition.y - params.tooltipRect.y,
  };
};

const getNewTooltipPosition = ({
  containerRect,
  targetRect,
  tooltipRect,
  scrollbarWidth,
  top = false,
  center = false,
}: translateTooltipParams): { x: number; y: number } => {
  let newTooltipY = targetRect.bottom;
  if (top) {
    newTooltipY = targetRect.y - tooltipRect.height;
  }
  // By default the tooltip center is aligned with the target center.
  const targetCenter = targetRect.x + targetRect.width / 2;
  let newTooltipX = targetCenter - tooltipRect.width / 2;
  if (center) {
    return {
      x: newTooltipX,
      y: newTooltipY,
    };
  }

  // If the the tooltip falls outside the container, we need to adjust.
  const containerRight = containerRect.x + containerRect.width - scrollbarWidth;
  if (newTooltipX < containerRect.x) {
    newTooltipX = containerRect.x;
  } else if (newTooltipX + tooltipRect.width > containerRight) {
    newTooltipX = containerRight - tooltipRect.width;
  }

  return {
    x: newTooltipX,
    y: newTooltipY,
  };
};
