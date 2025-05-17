export type OnEventCallback = () => void | Promise<void>;

export type OnMouseEventHandler = (
  $event?: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement },
) => Promise<void>;
