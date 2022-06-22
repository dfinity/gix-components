/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/svelte";
import Demo from '../../lib/components/Demo.svelte';

describe("Demo", () => {
    it("should render a button", () => {
        const { getByRole } = render(Demo);
        expect(getByRole('button')).not.toBeNull();
    });
});
