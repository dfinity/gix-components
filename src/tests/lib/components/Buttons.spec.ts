import Back from "$lib/components/Back.svelte";
import Chip from "$lib/components/Chip.svelte";
import Collapsible from "$lib/components/Collapsible.svelte";
import Copy from "$lib/components/Copy.svelte";
import KeyValuePairInfo from "$lib/components/KeyValuePairInfo.svelte";
import Menu from "$lib/components/Menu.svelte";
import MenuButton from "$lib/components/MenuButton.svelte";
import Modal from "$lib/components/Modal.svelte";
import Popover from "$lib/components/Popover.svelte";
import ThemeToggleButton from "$lib/components/ThemeToggleButton.svelte";
import Toast from "$lib/components/Toast.svelte";
import { fireEvent, render } from "@testing-library/svelte";
import type { Component } from "svelte";
import { mockSnippet } from "../mocks/snippet.mocks";
import FormTest from "./FormTest.svelte";
import SegmentTest from "./SegmentTest.svelte";

describe("Buttons", () => {
  beforeEach(() => {
    Object.assign(window.navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  const components: {
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: Component<any>;
    props: Record<string, unknown>;
  }[] = [
    { name: "Back", component: Back, props: { onBack: vi.fn() } },
    {
      name: "Chip",
      component: Chip,
      props: { id: "chip", label: "Chip", selected: false, onClick: vi.fn() },
    },
    {
      name: "Collapsible",
      component: Collapsible,
      props: { header: mockSnippet, children: mockSnippet },
    },
    { name: "Copy", component: Copy, props: { value: "test-copy" } },
    {
      name: "KeyValuePairInfo",
      component: KeyValuePairInfo,
      props: { key: mockSnippet, value: mockSnippet, info: mockSnippet },
    },
    {
      name: "KeyValuePairInfo with the icon on the right",
      component: KeyValuePairInfo,
      props: {
        key: mockSnippet,
        value: mockSnippet,
        info: mockSnippet,
        alignIconRight: true,
      },
    },
    { name: "Menu", component: Menu, props: {} },
    { name: "MenuButton", component: MenuButton, props: {} },
    {
      name: "Modal",
      component: Modal,
      props: { title: mockSnippet, children: mockSnippet, onClose: vi.fn() },
    },
    {
      name: "Popover",
      component: Popover,
      props: { visible: true, closeButton: true },
    },
    {
      name: "SegmentButton",
      component: SegmentTest,
      props: {
        firstSegmentId: Symbol(),
        secondSegmentId: Symbol(),
        thirdSegmentId: Symbol(),
      },
    },
    { name: "ThemeToggleButton", component: ThemeToggleButton, props: {} },
    {
      name: "Toast",
      component: Toast,
      props: { msg: { id: Symbol(), text: "Toast", level: "success" } },
    },
  ];

  it.each(components)(
    "$name should not submit a parent form",
    async ({ component, props }) => {
      const onSubmit = vi.fn();

      const { container } = render(FormTest, {
        props: { component, props, onSubmit },
      });

      const buttons = Array.from(container.querySelectorAll("form button"));

      expect(buttons.length).toBeGreaterThan(0);

      for (const button of buttons) {
        expect(button).toHaveAttribute("type", "button");

        await fireEvent.click(button);
      }

      expect(onSubmit).not.toHaveBeenCalled();
    },
  );
});
