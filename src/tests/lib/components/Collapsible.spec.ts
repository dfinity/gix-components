import { fireEvent } from "@testing-library/dom";
import { render } from "@testing-library/svelte";
import { tick } from "svelte";
import CollapsibleTest from "./CollapsibleTest.svelte";

// props
const props = (props: {
  expandButton?: boolean;
  id?: string;
  initiallyExpanded?: boolean;
  maxContentHeight?: number;
  iconSize?: string;
  externalToggle?: boolean;
  wrapHeight?: boolean;
}) => ({
  props: {
    props,
  },
});

describe("Collapsible", () => {
  it("should render header, content and button", () => {
    const { getByText, queryByTestId } = render(CollapsibleTest);
    expect(getByText("Jack")).toBeInTheDocument();
    expect(getByText("Sparrow")).toBeInTheDocument();
    expect(queryByTestId("collapsible-expand-button")).toBeInTheDocument();
  });

  it("should not render button", () => {
    const { getByText, queryByTestId } = render(
      CollapsibleTest,
      props({ expandButton: false }),
    );
    expect(getByText("Jack")).toBeInTheDocument();
    expect(getByText("Sparrow")).toBeInTheDocument();
    expect(queryByTestId("collapsible-expand-button")).not.toBeInTheDocument();
  });

  it("should render ids", () => {
    const { container } = render(
      CollapsibleTest,
      props({
        id: "Captain",
        initiallyExpanded: true,
      }),
    );
    expect(
      container.querySelector('[id="headingCaptain"]'),
    ).toBeInTheDocument();
    expect(container.querySelector('[id="Captain"]')).toBeInTheDocument();
  });

  it("should render and update ARIA attributer", () => {
    const { container } = render(
      CollapsibleTest,
      props({
        id: "_",
      }),
    );
    expect(container.querySelector('[aria-controls="_"]')).toBeInTheDocument();
    expect(
      container.querySelector('[aria-labelledby="heading_"]'),
    ).toBeInTheDocument();
  });

  it("should update aria-expanded value", async () => {
    const { container, getByTestId } = render(CollapsibleTest);
    expect(
      container.querySelector('[aria-expanded="false"]'),
    ).toBeInTheDocument();

    fireEvent.click(getByTestId("collapsible-header"));
    await tick();

    expect(
      container.querySelector('[aria-expanded="true"]'),
    ).toBeInTheDocument();
  });

  it("should be initially collapsed", () => {
    const { container } = render(CollapsibleTest);
    expect(
      container.querySelector('[aria-expanded="false"]'),
    ).toBeInTheDocument();
  });

  it("should support initiallyExpanded param", () => {
    const { container } = render(
      CollapsibleTest,
      props({ initiallyExpanded: true }),
    );
    expect(
      container.querySelector('[aria-expanded="true"]'),
    ).toBeInTheDocument();
  });

  it("should toggle", async () => {
    const { getByTestId, container } = render(CollapsibleTest);

    fireEvent.click(getByTestId("collapsible-header"));
    await tick();
    expect(
      container.querySelector('[aria-expanded="true"]'),
    ).toBeInTheDocument();

    fireEvent.click(getByTestId("collapsible-header"));
    await tick();
    expect(
      container.querySelector('[aria-expanded="false"]'),
    ).toBeInTheDocument();
  });

  it("should not toggle if external toggle", async () => {
    const spyToggle = vi.fn();

    const { getByTestId, container } = render(CollapsibleTest, {
      ...props({ externalToggle: true }),
      events: {
        nnsToggle: spyToggle,
      },
    });

    fireEvent.click(getByTestId("collapsible-header"));
    await tick();
    expect(
      container.querySelector('[aria-expanded="false"]'),
    ).toBeInTheDocument();

    expect(spyToggle).not.toHaveBeenCalled();
  });

  it("should emit state update", () =>
    new Promise<void>((done) => {
      let callIndex = 0;

      const onToggle = ({ detail }: CustomEvent<{ expanded: boolean }>) => {
        expect(detail.expanded).toBe(callIndex++ % 2 === 0);
        if (callIndex >= 4) {
          done();
        }
      };

      const { getByTestId } = render(CollapsibleTest, {
        events: {
          nnsToggle: onToggle,
        },
      });

      fireEvent.click(getByTestId("collapsible-header"));
      fireEvent.click(getByTestId("collapsible-header"));
      fireEvent.click(getByTestId("collapsible-header"));
      fireEvent.click(getByTestId("collapsible-header"));
    }));
});
