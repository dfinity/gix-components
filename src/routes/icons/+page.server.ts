import { listIcons } from "$docs/plugins/slug.plugin";
import type { SlugIcon } from "$docs/types/slug";

export const load = async (): Promise<{ icons: SlugIcon[] }> => {
  const icons: SlugIcon[] = listIcons();

  return { icons };
};
