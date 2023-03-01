/**
 * @jest-environment jsdom
 */

import Toast from "$lib/components/Toast.svelte";
import type { ToastMsg } from "$lib/types/toast";
import { render } from "@testing-library/svelte";

describe("Toast", () => {
  const props: { msg: ToastMsg } = {
    msg: { id: Symbol("test"), text: "Test", level: "success" },
  };

  it("should render a text", async () => {
    const { container } = render(Toast, {
      props,
    });

    const p: HTMLParagraphElement | null = container.querySelector("p");

    expect(p?.textContent).toContain("Test");
  });

  it("should render a close button", async () => {
    const { container } = render(Toast, {
      props,
    });

    const button = container.querySelector("button.close");

    expect(button).toBeInTheDocument();
  });

  it("should render a title", async () => {
    const title = "A super title";

    const { container } = render(Toast, {
      props: {
        msg: {
          ...props.msg,
          title,
        },
      },
    });

    const span: HTMLSpanElement | null = container.querySelector(".title");

    expect(span?.textContent).toContain(title);
  });
});
