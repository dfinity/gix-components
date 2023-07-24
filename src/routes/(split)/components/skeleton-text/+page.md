<script lang="ts">
    import SkeletonText from "$lib/components/SkeletonText.svelte";
</script>

# Skeleton Text

Skeleton Text is a component for rendering placeholder content. The element will render a gray block with an optional background animation.

```javascript
<SkeletonText />
<SkeletonText animated="{false}" />
<SkeletonText tagName="h1" />
```

## Properties

| Property   | Description                                        | Type                                  | Default |
| ---------- | -------------------------------------------------- | ------------------------------------- | ------- |
| `animated` | A background animation from left to right.         | `boolean`                             | `true`  |
| `tagName`  | The HTML element that will be rendered to the DOM. | `span` or `p` or `h1` or `h2` or `h3` | `span`  |

## Showcase

<div class="card-grid">
    <div>
        <SkeletonText />
        <SkeletonText />
        <SkeletonText />
    </div>

    <div>
        <SkeletonText tagName="h1" />
        <SkeletonText tagName="h2" />
        <SkeletonText tagName="h3" />
        <SkeletonText tagName="p"/>
        <SkeletonText />
    </div>

    <div>
        <SkeletonText tagName="h1" animated={false} />
        <SkeletonText animated={false} />
        <SkeletonText animated={false} />
    </div>

</div>
