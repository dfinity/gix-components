import { translateTooltip } from "$lib/utils/tooltip.utils";

describe("translateTooltip", () => {
  const containerRect = {
    x: 100,
    y: 200,
    width: 400,
    height: 600,
    top: 200,
    left: 100,
    bottom: 800,
    right: 500,
  };

  const targetWidth = 50;
  const targetHeight = 30;

  const tooltipWidth = 200;
  const tooltipHeight = 40;

  const createTargetAndTooltipRects = ({ x, y }) => ({
    targetRect: {
      x,
      y,
      width: targetWidth,
      height: targetHeight,
      top: y,
      left: x,
      bottom: y + targetHeight,
      right: x + targetWidth,
    },
    tooltipRect: {
      x,
      y,
      width: tooltipWidth,
      height: tooltipHeight,
      top: y,
      left: x,
      bottom: y + tooltipHeight,
      right: x + tooltipWidth,
    },
  });

  describe("when the target isn't close to any edge", () => {
    const { targetRect, tooltipRect } = createTargetAndTooltipRects({
      x: containerRect.x + 200,
      y: containerRect.y + 200,
    });
    const scrollbarWidth = 0;

    it("should position the tooltip centered below the target", () => {
      expect(
        translateTooltip({
          containerRect,
          targetRect,
          tooltipRect,
          scrollbarWidth,
        }),
      ).toEqual({
        x: (targetRect.width - tooltipRect.width) / 2,
        y: targetRect.height,
      });
    });

    it("should position the tooltip centered above the target when 'top' is true", () => {
      expect(
        translateTooltip({
          containerRect,
          targetRect,
          tooltipRect,
          scrollbarWidth,
          top: true,
        }),
      ).toEqual({
        x: (targetRect.width - tooltipRect.width) / 2,
        y: -tooltipRect.height,
      });
    });
  });

  describe("when the target is close to the left edge", () => {
    const { targetRect, tooltipRect } = createTargetAndTooltipRects({
      x: containerRect.x + 10,
      y: containerRect.y + 200,
    });
    const scrollbarWidth = 0;

    it("should position the tooltip touching the left edge", () => {
      expect(
        translateTooltip({
          containerRect,
          targetRect,
          tooltipRect,
          scrollbarWidth,
        }),
      ).toEqual({
        x: -10,
        y: targetRect.height,
      });
    });

    it("should position the tooltip centered when 'center' is true", () => {
      expect(
        translateTooltip({
          containerRect,
          targetRect,
          tooltipRect,
          scrollbarWidth,
          center: true,
        }),
      ).toEqual({
        x: (targetRect.width - tooltipRect.width) / 2,
        y: targetRect.height,
      });
    });
  });

  describe("when the target is close to the right edge", () => {
    const { targetRect, tooltipRect } = createTargetAndTooltipRects({
      x: containerRect.right - tooltipWidth + 100,
      y: containerRect.y + 200,
    });

    it("should position the tooltip touching the right edge", () => {
      const scrollbarWidth = 0;
      expect(
        translateTooltip({
          containerRect,
          targetRect,
          tooltipRect,
          scrollbarWidth,
        }),
      ).toEqual({
        x: -100,
        y: targetRect.height,
      });
    });

    it("should position the tooltip centered when 'center' is true", () => {
      const scrollbarWidth = 0;
      expect(
        translateTooltip({
          containerRect,
          targetRect,
          tooltipRect,
          scrollbarWidth,
          center: true,
        }),
      ).toEqual({
        x: (targetRect.width - tooltipRect.width) / 2,
        y: targetRect.height,
      });
    });

    it("should position the tooltip touching the scrollbar", () => {
      const scrollbarWidth = 10;
      expect(
        translateTooltip({
          containerRect,
          targetRect,
          tooltipRect,
          scrollbarWidth,
        }),
      ).toEqual({
        x: -100 - scrollbarWidth,
        y: targetRect.height,
      });
    });
  });
});
