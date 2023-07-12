/**
 * @jest-environment jsdom
 */

import BusyScreen from "$lib/components/BusyScreen.svelte";
import { startBusy } from "$lib/stores/busy.store";
import { render, waitFor } from "@testing-library/svelte";

describe("BusyScreen", () => {
  it("should show the spinner", async () => {
    const { container } = render(BusyScreen);
    startBusy({ initiator: "stake-neuron" });
    await waitFor(() =>
      expect(container.querySelector("svg")).toBeInTheDocument()
    );
  });
});
