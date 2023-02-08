<script lang="ts">
    import Segment from "$lib/components/Segment.svelte";
    import SegmentButton from "$lib/components/SegmentButton.svelte";

    let firstSegmentId = Symbol();
    let secondSegmentId = Symbol();
    let thirdSegmentId = Symbol();
    let selectedSegmentId = firstSegmentId;
</script>

# Segment

Segments display a group of related buttons, sometimes known as segmented controls, in a horizontal row. They can be displayed inside of a toolbar or the main content.

Their functionality is similar to tabs, where selecting one will deselect all others. Segments are useful for toggling between different views inside of the content.

## Showcase

<Segment bind:selectedSegmentId>
    <SegmentButton segmentId={firstSegmentId}>Default</SegmentButton>
    <SegmentButton segmentId={secondSegmentId}>Segment</SegmentButton>
    <SegmentButton segmentId={thirdSegmentId}>Other</SegmentButton>
</Segment>