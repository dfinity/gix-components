export const onEnter = ({
  $event: { key },
  callback,
}: {
  $event: KeyboardEvent;
  callback: () => void;
}) => {
  if ("Enter" !== key) {
    return;
  }

  callback();
};
