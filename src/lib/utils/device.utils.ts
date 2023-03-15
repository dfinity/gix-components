import { isNode } from "$lib/utils/env.utils";

export const isPortrait = (): boolean => {
  if (isNode()) {
    return false;
  }

  return (
    window.matchMedia && window.matchMedia("(orientation: portrait)").matches
  );
};

export const isIOS = (): boolean => {
  if (isNode()) {
    return false;
  }

  const agent = userAgent();

  return /iPhone|iPod/i.test(agent) || isIPad();
};

export const isIPad = (): boolean => {
  if (isNode()) {
    return false;
  }

  const agent = userAgent();

  // iOS 12 and below
  if (/iPad/i.test(agent)) {
    return true;
  }

  // iOS 13+
  return /Macintosh/i.test(agent) && isMobile();
};

export const isMobile = (): boolean => {
  if (isNode()) {
    return false;
  }

  const isTouchScreen: boolean = window.matchMedia(
    "(any-pointer:coarse)"
  ).matches;
  const isMouseScreen: boolean =
    window.matchMedia("(any-pointer:fine)").matches;

  return isTouchScreen && !isMouseScreen;
};

const userAgent = (): string => navigator.userAgent;
