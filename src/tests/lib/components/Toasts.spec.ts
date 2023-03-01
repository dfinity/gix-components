/**
 * @jest-environment jsdom
 */

import { toastsStore } from "$lib/stores/toasts.store";
import { fireEvent, render, waitFor } from "@testing-library/svelte";
import ToastsTest from "./ToastsTest.svelte";

describe("Toasts", () => {
  afterEach(() => {
    toastsStore.reset();
  });

  it("should not display any toast per default", () => {
    const { container } = render(ToastsTest);

    expect(container.querySelector("div.toast")).toBeNull();
  });

  const waitForDialog = async (container: HTMLElement) =>
    await waitFor(() =>
      expect(container.querySelector("div.toast")).not.toBeNull()
    );

  it("should display a toast", async () => {
    const { container } = render(ToastsTest);

    const id = toastsStore.show({ text: "Test", level: "success" });

    await waitForDialog(container);

    toastsStore.hide(id);
  });

  it("should display an informative toast", async () => {
    const { container } = render(ToastsTest);

    const id = toastsStore.show({ text: "Test", level: "success" });

    await waitForDialog(container);

    const dialog: HTMLDivElement | null = container.querySelector("div.toast");
    expect(dialog?.classList.contains("error")).toBeFalsy();

    toastsStore.hide(id);
  });

  it("should display an error toast", async () => {
    const { container } = render(ToastsTest);

    const id = toastsStore.show({ text: "Test", level: "error" });

    await waitForDialog(container);

    const icon: HTMLDivElement | null =
      container.querySelector("div.toast .icon");
    expect(icon?.classList.contains("error")).toBeTruthy();

    toastsStore.hide(id);
  });

  it("should display multiple toasts", async () => {
    const { container } = render(ToastsTest);

    toastsStore.show({ text: "Test", level: "error" });
    toastsStore.show({ text: "Test", level: "error" });
    toastsStore.show({ text: "Test", level: "error" });

    await waitFor(() =>
      expect(container.querySelectorAll("div.toast").length).toEqual(3)
    );
  });

  it("should display multiple toasts and user is able to close one", async () => {
    const { container } = render(ToastsTest);

    toastsStore.show({ text: "Test", level: "error" });
    toastsStore.show({ text: "Test", level: "error" });
    toastsStore.show({ text: "Test", level: "error" });

    await waitFor(() =>
      expect(container.querySelectorAll("div.toast").length).toEqual(3)
    );

    const button: HTMLButtonElement | null =
      container.querySelector("button.close");
    button && (await fireEvent.click(button));

    await waitFor(() =>
      expect(container.querySelectorAll("div.toast").length).toEqual(2)
    );
  });

  it("should close toast", async () => {
    const { container } = render(ToastsTest);

    toastsStore.show({ text: "Test", level: "success" });

    await waitForDialog(container);

    const button: HTMLButtonElement | null =
      container.querySelector("button.close");
    button && (await fireEvent.click(button));

    await waitFor(() =>
      expect(container.querySelector("div.toast")).toBeNull()
    );
  });

  it("should return a shown toast id", async () => {
    const id = toastsStore.show({ text: "Test", level: "success" });

    expect(id).toBeDefined();
    expect(typeof id).toBe("symbol");
    expect(id.description).toBe("toast");
  });

  it("should display multiple toasts for the bottom position", async () => {
    const { container } = render(ToastsTest);

    toastsStore.show({ text: "Test", level: "error", position: "bottom" });
    toastsStore.show({ text: "Test", level: "error" });
    toastsStore.show({ text: "Test", level: "error", position: "top-end" });

    await waitFor(() =>
      expect(container.querySelectorAll("div.toast").length).toEqual(2)
    );
  });

  it("should display multiple toasts for the top-end position", async () => {
    const { container } = render(ToastsTest, {
      props: {
        position: "top-end",
      },
    });

    toastsStore.show({ text: "Test", level: "error", position: "bottom" });
    toastsStore.show({ text: "Test", level: "error", position: "top-end" });
    toastsStore.show({ text: "Test", level: "error", position: "top-end" });
    toastsStore.show({ text: "Test", level: "error" });
    toastsStore.show({ text: "Test", level: "error", position: "top-end" });

    await waitFor(() =>
      expect(container.querySelectorAll("div.toast").length).toEqual(3)
    );
  });
});
