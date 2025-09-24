export type OnEventParam<
  E extends Event = Event,
  T extends EventTarget = EventTarget,
> = E & {
  currentTarget: EventTarget & T;
};

export type OnEventCallback<T extends EventTarget = EventTarget> = (
  $event: OnEventParam<T>,
) => void | Promise<void>;

export type OptionalOnEventCallback< 
  E extends Event = Event,
  T extends EventTarget = EventTarget,
                                   > =
  | OnEventCallback<T>
  | null
  | undefined;
