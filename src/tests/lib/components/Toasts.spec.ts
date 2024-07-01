import { toastsStore } from "$lib/stores/toasts.store";
import { render, waitFor } from "@testing-library/svelte";
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
      expect(container.querySelector("div.toast")).not.toBeNull(),
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
      expect(container.querySelectorAll("div.toast").length).toEqual(3),
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
    toastsStore.show({ text: "Test", level: "error", position: "top" });

    await waitFor(() =>
      expect(container.querySelectorAll("div.toast").length).toEqual(2),
    );
  });

  it("should display the maximum number of toasts", async () => {
    const { container } = render(ToastsTest, { props: { maxVisible: 2 } });

    toastsStore.show({ text: "Test", level: "error" });
    toastsStore.show({ text: "Test", level: "error" });
    toastsStore.show({ text: "Test", level: "error" });

    await waitFor(() =>
      expect(container.querySelectorAll("div.toast").length).toEqual(2),
    );
  });

  it("should display up to maximum number of toasts until user has close all toasts", async () => {
    const props = { props: { maxVisible: 2 } };

    const toast1 = Symbol();
    const toast2 = Symbol();
    const toast3 = Symbol();

    toastsStore.show({ text: "Test1", level: "error", id: toast1 });
    toastsStore.show({ text: "Test2", level: "error", id: toast2 });
    toastsStore.show({ text: "Test3", level: "error", id: toast3 });

    const { container: container1 } = render(ToastsTest, props);

    await waitFor(() =>
      expect(container1.querySelectorAll("div.toast").length).toEqual(2),
    );

    toastsStore.hide(toast3);

    const { container: container2 } = render(ToastsTest, props);

    await waitFor(() =>
      expect(container2.querySelectorAll("div.toast").length).toEqual(2),
    );

    toastsStore.hide(toast2);

    const { container: container3 } = render(ToastsTest, props);

    await waitFor(() =>
      expect(container3.querySelectorAll("div.toast").length).toEqual(1),
    );

    toastsStore.hide(toast1);

    const { container: container4 } = render(ToastsTest, props);

    await waitFor(() =>
      expect(container4.querySelectorAll("div.toast").length).toEqual(0),
    );
  });
});
