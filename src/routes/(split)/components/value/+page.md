<script lang="ts">
    import Value from "$lib/components/Value.svelte";
</script>

# Value

Text blocks are highlighted with various [text opacity](/utility-classes/text-opacity). As the `value` is a common use case, this simplistic component wrapper is provided to render types of text.

```html
<Value>Hello World</Value>
```

## Properties

| Property    | Description                                                      | Type     | Default |
| ----------- | ---------------------------------------------------------------- | -------- | ------- |
| `ariaLabel` | An accessible label for the `span` that gets rendered in the DOM | `string` |         |

## Showcase

<Value>Hello World</Value>
