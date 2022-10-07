export const enumFromStringExists = <T>({
  obj,
  value,
}: {
  obj: T;
  value: string | null;
}): boolean => Object.values(obj).includes(value);
