import Modal from "$lib/components/Modal.svelte";
import { fireEvent, render } from "@testing-library/svelte";
import ModalTest from "./ModalTest.svelte";

describe("Modal", () => {
  const props: { visible: boolean } = { visible: true };

  it("should display modal", () => {
    const { container, rerender } = render(Modal, {
      props: { visible: false },
    });

    expect(container.querySelector("div.modal")).toBeNull();

    rerender({
      props: { visible: true },
    });

    expect(container.querySelector("div.modal")).not.toBeNull();
  });

  it("should display an alert modal", () => {
    const { container } = render(Modal, {
      props: { visible: true, role: "alert" },
    });

    const alert: HTMLElement | null = container.querySelector('[role="alert"]');

    expect(alert).not.toBeNull();
  });

  it("should be an accessible modal", () => {
    const { container } = render(ModalTest, {
      props,
    });

    const dialog: HTMLElement | null =
      container.querySelector('[role="dialog"]');

    expect(
      dialog?.getAttribute("aria-labelledby")?.includes("modal-title-")
    ).toBeTruthy();
    expect(
      dialog?.getAttribute("aria-describedby")?.includes("modal-content-")
    ).toBeTruthy();

    const modalTitleId = dialog?.getAttribute("aria-labelledby") as string;
    const modalContentId = dialog?.getAttribute("aria-describedby") as string;

    expect(container.querySelector(`#${modalTitleId}`)).not.toBeNull();
    expect(container.querySelector(`#${modalContentId}`)).not.toBeNull();
  });

  it("should render a backdrop", () => {
    const { container } = render(Modal, {
      props,
    });

    const backdrop: HTMLDivElement | null =
      container.querySelector("div.backdrop");

    expect(backdrop).not.toBeNull();
  });

  it("should render a wrapper", () => {
    const { container } = render(Modal, {
      props,
    });

    const wrapper: HTMLDivElement | null =
      container.querySelector("div.wrapper");

    expect(wrapper).not.toBeNull();
  });

  it("should render a subtitle", () => {
    const subTitle = "My subtitle";
    const { getByText } = render(ModalTest, {
      props: {
        ...props,
        subTitle,
      },
    });

    expect(getByText(subTitle)).not.toBeNull();
  });

  it("should render a toolbar", () => {
    const { container } = render(Modal, {
      props,
    });

    const toolbar: HTMLDivElement | null =
      container.querySelector("div.toolbar");

    expect(toolbar?.querySelector("h3")).not.toBeNull();
    expect(toolbar?.querySelector("button")).not.toBeNull();
  });

  it("should render a content", () => {
    const { container } = render(Modal, {
      props,
    });

    const content: HTMLDivElement | null =
      container.querySelector("div.content");

    expect(content).not.toBeNull();
  });

  it("should trigger close modal on click on backdrop", () =>
    new Promise<void>((done) => {
      const { container, component } = render(Modal, {
        props,
      });

      component.$on("nnsClose", () => {
        done();
      });

      const backdrop: HTMLDivElement | null =
        container.querySelector("div.backdrop");
      backdrop && fireEvent.click(backdrop);
    }));

  it("should not have a data-tid attribute", () => {
    const { container } = render(Modal, {
      props: {
        ...props,
      },
    });

    const modal = container.querySelector("div.modal");
    expect(modal?.getAttribute("data-tid")).toBeNull();
  });

  it("should have a single root with data-tid attribute", () => {
    const testId = "my-test-id";
    const { container } = render(Modal, {
      props: {
        ...props,
        testId,
      },
    });

    // Make sure the data-tid encloses everything in the component.
    expect(container.firstElementChild?.children.length).toBe(1);
    const modal = container.firstElementChild?.firstElementChild;
    expect(modal?.className).toContain("modal");
    expect(modal?.getAttribute("data-tid")).toBe(testId);
  });

  it("should trigger close modal on click on close button", () =>
    new Promise<void>((done) => {
      const { getByTestId, component } = render(ModalTest, {
        props,
      });

      component.$on("nnsClose", () => {
        done();
      });

      const button: HTMLElement | null = getByTestId("close-modal");

      button && fireEvent.click(button);
    }));

  it("should not trigger close modal on click on backdrop", () => {
    const { getByTestId } = render(ModalTest, {
      props: {
        ...props,
        disablePointerEvents: true,
      },
    });

    expect(() => getByTestId("close-modal")).toThrow();
  });
});
