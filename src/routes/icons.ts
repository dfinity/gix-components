import type { ResponseBody } from "@sveltejs/kit";
import {listIcons} from "$docs/plugins/slug.plugin";
import type {SlugIcon} from "$docs/types/slug";

export const GET = async (): Promise<ResponseBody> => {
  const icons: SlugIcon[] = listIcons();

  return {
    status: 200,
    headers: {},
    body: { icons: icons as unknown as Record<string, string>[] },
  };
};
