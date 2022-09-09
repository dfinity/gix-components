/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/svelte";
import Toast from "$lib/components/Toast.svelte";
import type { ToastMsg } from "$lib/types/toast";

describe("Toast", () => {
  const props: { msg: ToastMsg } = {
    msg: { text: "Test", level: "success" },
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
});
