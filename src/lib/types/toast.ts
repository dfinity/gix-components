export type ToastLevel = "success" | "warn" | "error" | "info";

export interface ToastMsg {
  id: symbol;
  text: string;
  level: ToastLevel;
  spinner?: boolean;
  duration?: number;
}
