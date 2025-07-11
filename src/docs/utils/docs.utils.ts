import { goto } from "$app/navigation";
import type { AfterNavigate } from "@sveltejs/kit";

export const goBack = ({
  defaultRoute = "/",
  navHistory,
}: {
  defaultRoute?: string;
  navHistory: AfterNavigate[];
}) =>
  navHistory.length === 1
    ? goto(defaultRoute, { replaceState: true })
    : history.back();

export const canGoBack = (routeId: string | null): boolean =>
  (routeId ?? "").split("/").filter((match) => match !== "").length > 2;
