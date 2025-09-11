export type OnEventParam<T extends EventTarget = EventTarget> = MouseEvent & {
  currentTarget: EventTarget & T;
};

export type OnEventCallback<T extends EventTarget = EventTarget> = (
  $event: OnEventParam<T>,
) => void | Promise<void>;

export type OptionalOnEventCallback<T extends EventTarget = EventTarget> =
  | OnEventCallback<T>
  | null
  | undefined;
