import { goto } from "$app/navigation";
import type { Navigation } from "@sveltejs/kit";

export const goBack = async ({
  defaultRoute = "/",
  navHistory,
}: {
  defaultRoute?: string;
  navHistory: Navigation[];
}) =>
  navHistory.length === 1
    ? goto(defaultRoute, { replaceState: true })
    : history.back();

export const canGoBack = (routeId: string | null): boolean =>
  (routeId ?? "").split("/").filter((match) => match !== "").length > 2;
