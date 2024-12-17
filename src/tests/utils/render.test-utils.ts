import { render, type RenderResult } from "@testing-library/svelte";
import type { ComponentProps, ComponentType, SvelteComponent } from "svelte";

export const renderWithEvents = <C extends SvelteComponent>(
  cmp: ComponentType<C>,
  options: {
    props?: ComponentProps<C>;
    events: Record<string, ($event: CustomEvent) => void>;
  },
): RenderResult<C> => {
  const { component, ...rest } = render(cmp, { props: options.props });

  const events = Object.entries(options.events);

  events.forEach(([event, fn]) => {
    component.$on(event, fn);
  });

  return { component, ...rest };
};
