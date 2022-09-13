/**
 * @jest-environment jsdom
 */

import { fireEvent, render } from "@testing-library/svelte";
import Modal from "$lib/components/Modal.svelte";
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

  it("should display a medium size modal", () => {
    const { container } = render(Modal, {
      props: { visible: true, size: "medium" },
    });

    expect(container.querySelector("div.wrapper.medium")).not.toBeNull();
  });

  it("should be an accessible modal", () => {
    const { container } = render(ModalTest, {
      props,
    });

    const dialog: HTMLElement | null =
      container.querySelector('[role="dialog"]');

    expect(dialog?.getAttribute("aria-labelledby")).toEqual("modalTitle");
    expect(dialog?.getAttribute("aria-describedby")).toEqual("modalContent");

    expect(container.querySelector("#modalTitle")).not.toBeNull();
    expect(container.querySelector("#modalContent")).not.toBeNull();
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

  it("should trigger close modal on click on backdrop", (done) => {
    const { container, component } = render(Modal, {
      props,
    });

    component.$on("nnsClose", () => {
      done();
    });

    const backdrop: HTMLDivElement | null =
      container.querySelector("div.backdrop");
    backdrop && fireEvent.click(backdrop);
  });

  it("should trigger close modal on click on close button", (done) => {
    const { getByTestId, component } = render(ModalTest, {
      props,
    });

    component.$on("nnsClose", () => {
      done();
    });

    const button: HTMLElement | null = getByTestId("close-modal");

    button && fireEvent.click(button);
  });
});
