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
It sets the reference after each re-render of the list. **Pay attention to not trigger unnecessary updates**.

## Properties

| Property    | Description                                    | Type     | Detail                              |
|-------------|------------------------------------------------|----------|-------------------------------------|
| `pageLimit` | How many items each pagination group contains? | `number` | `DEFAULT_LIST_PAGINATION_LIMIT=100` |

## Events

| Event          | Description                                                                                                | Detail    |
|----------------|------------------------------------------------------------------------------------------------------------|-----------|
| `nnsIntersect` | Triggered each time the next observed item is intersecting. The event that can be use to call your action. | No detail |

## Slots

| Slot name     | Description                                 |
| ------------- |---------------------------------------------|
| Defautl slot  | The list of elements. Should be `li` nodes. |
