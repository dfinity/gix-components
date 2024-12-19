import {
  render as svelteRender,
  type RenderResult,
} from "@testing-library/svelte";
import {
  type Component,
  type ComponentProps,
  type SvelteComponent as LegacyComponent,
} from "svelte";

// Duplicate Testing-library ComponentType which is not exposed
type ComponentType<C> = C extends LegacyComponent
  ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (...args: any[]) => C
  : C;

export const render = <C extends Component>(
  cmp: ComponentType<C>,
  options?: {
    props?: ComponentProps<C>;
    events?: Record<string, ($event: CustomEvent) => void>;
  },
): RenderResult<C> => {
  return svelteRender(cmp, {
    props: options?.props,
    // TODO: remove once events are migrated to callback props
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    events: options?.events,
  });
};
