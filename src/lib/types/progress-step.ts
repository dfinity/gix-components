export interface ProgressStep {
  id: symbol;
  text: string;
  state: "next" | "in_progress" | "completed";
}
