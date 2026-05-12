import { pickPopoverDirection } from "$lib/utils/popover.utils";

describe("pickPopoverDirection", () => {
  const viewportWidth = 1000;
  const viewportPadding = 8;

  it("returns the preferred direction when the panel has not been measured yet", () => {
    expect(
      pickPopoverDirection({
        anchorLeft: 900,
        anchorRight: 950,
        panelWidth: 0,
        viewportWidth,
        viewportPadding,
        preferredDirection: "ltr",
      }),
    ).toBe("ltr");

    expect(
      pickPopoverDirection({
        anchorLeft: 10,
        anchorRight: 60,
        panelWidth: 0,
        viewportWidth,
        viewportPadding,
        preferredDirection: "rtl",
      }),
    ).toBe("rtl");
  });

  it("keeps the preferred ltr direction when there is enough room on the right", () => {
    expect(
      pickPopoverDirection({
        anchorLeft: 100,
        anchorRight: 150,
        panelWidth: 300,
        viewportWidth,
        viewportPadding,
        preferredDirection: "ltr",
      }),
    ).toBe("ltr");
  });

  it("keeps the preferred rtl direction when there is enough room on the left", () => {
    expect(
      pickPopoverDirection({
        anchorLeft: 800,
        anchorRight: 850,
        panelWidth: 300,
        viewportWidth,
        viewportPadding,
        preferredDirection: "rtl",
      }),
    ).toBe("rtl");
  });

  it("flips from ltr to rtl when the preferred side overflows the viewport", () => {
    expect(
      pickPopoverDirection({
        anchorLeft: 900,
        anchorRight: 950,
        panelWidth: 300,
        viewportWidth,
        viewportPadding,
        preferredDirection: "ltr",
      }),
    ).toBe("rtl");
  });

  it("flips from rtl to ltr when the preferred side overflows the viewport", () => {
    expect(
      pickPopoverDirection({
        anchorLeft: 10,
        anchorRight: 60,
        panelWidth: 300,
        viewportWidth,
        viewportPadding,
        preferredDirection: "rtl",
      }),
    ).toBe("ltr");
  });

  it("falls back to the side with the most room when the panel fits on neither side", () => {
    expect(
      pickPopoverDirection({
        anchorLeft: 200,
        anchorRight: 300,
        panelWidth: 950,
        viewportWidth,
        viewportPadding,
        preferredDirection: "ltr",
      }),
    ).toBe("ltr");

    expect(
      pickPopoverDirection({
        anchorLeft: 700,
        anchorRight: 800,
        panelWidth: 950,
        viewportWidth,
        viewportPadding,
        preferredDirection: "rtl",
      }),
    ).toBe("rtl");
  });

  it("respects the viewport padding when checking fit", () => {
    expect(
      pickPopoverDirection({
        anchorLeft: 700,
        anchorRight: 750,
        panelWidth: 200,
        viewportWidth,
        viewportPadding,
        preferredDirection: "ltr",
      }),
    ).toBe("ltr");

    expect(
      pickPopoverDirection({
        anchorLeft: 700,
        anchorRight: 750,
        panelWidth: 200,
        viewportWidth,
        viewportPadding: 150,
        preferredDirection: "ltr",
      }),
    ).toBe("rtl");
  });
});
