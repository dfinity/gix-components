export const isPortrait = (): boolean => {
  if (!window) {
    return false;
  }

  return (
    window.matchMedia && window.matchMedia("(orientation: portrait)").matches
  );
};

export const isIOS = (): boolean => {
  if (!window || !navigator) {
    return false;
  }

  const a: string = userAgent();

  return /iPhone|iPod/i.test(a) || isIPad();
};

export const isIPad = (): boolean => {
  if (!window || !navigator) {
    return false;
  }

  const a: string = userAgent();

  // iOS 12 and below
  if (/iPad/i.test(a)) {
    return true;
  }

  // iOS 13+
  return /Macintosh/i.test(a) && isMobile();
};

export const isMobile = (): boolean => {
  if (!window) {
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
