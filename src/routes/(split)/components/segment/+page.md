<script lang="ts">
    import Segment from "$lib/components/Segment.svelte";
    import SegmentButton from "$lib/components/SegmentButton.svelte";

    let firstSegmentId = Symbol();
    let secondSegmentId = Symbol();
    let thirdSegmentId = Symbol();
    let fourthSegmentId = Symbol();
    let fifthSegmentId = Symbol();
    let selected1 = secondSegmentId;
    let selected2 = secondSegmentId;
    let selected3 = fifthSegmentId;
</script>

# Segment

Segments display a group of related buttons, sometimes known as segmented controls, in a horizontal row. They can be displayed inside of a toolbar or the main content.

Their functionality is similar to tabs, where selecting one will deselect all others. Segments are useful for toggling between different views inside of the content.

```
<Segment bind:selectedSegmentId>
    <SegmentButton segmentId={firstSegmentId}>Default</SegmentButton>
    <SegmentButton segmentId={secondSegmentId}>Segment</SegmentButton>
    <SegmentButton segmentId={thirdSegmentId}>Other</SegmentButton>
</Segment>
```

### Notes

To implement a segment both `Segment` and `SegmentButton` components are required.

## Properties

### Segment

| Property            | Description                                                                              | Type         | Default |
| ------------------- | ---------------------------------------------------------------------------------------- | ------------ | ------- |
| `selectedSegmentId` | The selected segment.                                                                    | `symbol`     |         |
| `initIndicator`     | A function that can be called on demand to reinitialize the indicator position and size. | `() => void` |         |

### SegmentButton

| Property    | Description                                                   | Type     | Default |
| ----------- | ------------------------------------------------------------- | -------- | ------- |
| `segmentId` | The ID of the segment that will be use for selection purpose. | `symbol` |         |

## Showcase

<div data-tid="showcase">

<h4>Two entries</h4>
<Segment bind:selectedSegmentId={selected1}>
    <SegmentButton segmentId={firstSegmentId}>Actionable Proposals</SegmentButton>
    <SegmentButton segmentId={secondSegmentId}>All Proposals</SegmentButton>
</Segment>

<h4>More entries</h4>
<Segment bind:selectedSegmentId={selected2}>
    <SegmentButton segmentId={firstSegmentId}>Default</SegmentButton>
    <SegmentButton segmentId={secondSegmentId}>Segment</SegmentButton>
    <SegmentButton segmentId={thirdSegmentId}>Other</SegmentButton>
</Segment>

<h4>Even more entries</h4>
<Segment bind:selectedSegmentId={selected3}>
    <SegmentButton segmentId={firstSegmentId}>Lorem</SegmentButton>
    <SegmentButton segmentId={secondSegmentId}>Ipsum</SegmentButton>
    <SegmentButton segmentId={thirdSegmentId}>Dolor</SegmentButton>
    <SegmentButton segmentId={fourthSegmentId}>Sit amet</SegmentButton>
    <SegmentButton segmentId={fifthSegmentId}>Consectetur</SegmentButton>
</Segment>
</div>

<style>
  div {
    margin-bottom: 4rem;
  }
  h4 {
    margin-top: 4rem;
  }
</style>
