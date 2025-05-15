<script lang="ts">
    import InfiniteScroll from "$lib/components/InfiniteScroll.svelte";
    import Tag from "$lib/components/Tag.svelte";

    const generate = (index: number): number[] =>  [ ...Array(100).keys().map(i => i + index) ];
    
    let scrollDisabled = false;
    let elements = generate(0);

    const onIntersect = () => {
        if (elements.length >= 300) {
            scrollDisabled = true;
            return;
        }

        setTimeout(() => elements = [...elements, ...generate(elements.length)], 500);
    }
</script>

# Infinite Scroll

The Infinite Scroll component calls an action to be performed when the user scrolls a specified distance of the list presented in the page.

```javascript
<InfiniteScroll>
  {#each array as data}
    <li>{data}</li>
  {/each}
</InfiniteScroll>
```

## Usage

The component renders a `ul` and observe the elements of the list using the [IntersectionObserver](https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API).
It sets the reference to the last element of the list after each re-render. **Pay attention to not trigger unnecessary updates**.

## Properties

| Property   | Description                                                                                                                  | Type             | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------- |
| `layout`   | Display of the rendered items. Defined by a class set on `ul` container.                                                     | `list` or `grid` | `list`  |
| `disabled` | If `true`, the infinite scroll stops observing for intersection and therefore, will stop calling the action to be performed. | `boolean`        | `false` |

## Slots

| Slot name    | Description                                 |
| ------------ | ------------------------------------------- |
| Default slot | The list of elements. Should be `li` nodes. |

## Events

| Event          | Description                                                                                                | Detail    |
| -------------- | ---------------------------------------------------------------------------------------------------------- | --------- |
| `nnsIntersect` | Triggered each time the next observed item is intersecting. The event that can be use to call your action. | No detail |

## Showcase

<InfiniteScroll onintersect={onIntersect} disabled={scrollDisabled} testId="showcase-infinite-scroll">
    {#each elements as _element, i}
        <li><Tag>Element {i}</Tag></li>
    {/each}

    {#if scrollDisabled}
        <li data-tid="infinite-scroll-end"><Tag intent="success">Maximum pagination reached</Tag></li>
    {/if}

</InfiniteScroll>

<style lang="scss">
    li {
        margin: 0 0 var(--padding);
    }
</style>
