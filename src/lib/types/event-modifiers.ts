export type OnEventParam<T extends EventTarget> = MouseEvent & {
  currentTarget: EventTarget & T;
};

export type OnEventCallback<T extends EventTarget> = (
  $event: OnEventParam<T>,
) => void | Promise<void>;
