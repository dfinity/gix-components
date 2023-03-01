import type { SvelteComponent } from "svelte";

export type ToastLevel = "success" | "warn" | "error" | "info";

export type ToastPosition = "bottom" | "top";

export interface ToastMsg {
  id: symbol;
  title?: string;
  text: string;
  level: ToastLevel;
  spinner?: boolean;
  duration?: number;
  position?: ToastPosition;
  truncate?: boolean;
  icon?: SvelteComponent;
}
