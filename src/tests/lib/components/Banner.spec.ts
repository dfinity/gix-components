import Banner from "$lib/components/Banner.svelte";
import { fireEvent, render } from "@testing-library/svelte";
import BannerTest from "./BannerTest.svelte";

describe("Banner", () => {
  it("should render the banner when visible is true", () => {
    const { container } = render(Banner);
    expect(container.querySelector(".banner")).not.toBeNull();
  });

  it("should not render the banner when visible is false", () => {
    const { container } = render(Banner, { props: { visible: false } });
    expect(container.querySelector(".banner")).toBeNull();
  });

  it("should render slotted content", () => {
    const { getByText } = render(BannerTest);
    expect(getByText("Test Icon")).toBeInTheDocument();
    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByText("Test Description")).toBeInTheDocument();
    expect(getByText("Test Action")).toBeInTheDocument();
  });

  it("should close the banner when close button is clicked", async () => {
    const { container, component } = render(Banner);

    const closeButton = container.querySelector(
      ".close-button",
    ) as HTMLButtonElement;
    expect(closeButton).not.toBeNull();

    const onClose = vi.fn();
    component.$on("nnsClose", onClose);

    await fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalled();
    expect(container.querySelector(".banner")).toBeNull();
  });

  it("should apply custom test ID", () => {
    const testId = "custom-banner-id";
    const { container } = render(Banner, { props: { testId } });

    const banner = container.querySelector(".banner");
    expect(banner).not.toBeNull();
    expect(banner?.getAttribute("data-tid")).toBe(testId);
  });
});
