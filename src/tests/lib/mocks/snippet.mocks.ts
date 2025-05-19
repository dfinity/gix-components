import { createRawSnippet } from "svelte";

export const mockSnippet = createRawSnippet(() => ({
  render: () => `<span>Mock Snippet</span>`,
}));
