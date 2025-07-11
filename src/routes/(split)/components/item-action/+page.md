<script lang="ts">
    import ItemAction from "$lib/components/ItemAction.svelte";
    import IconLockOpen from "$lib/icons/IconLockOpen.svelte";
    import icpLogo from "$docs/assets/icp-rounded.svg";
</script>

# Item Action

Used to render multiple items with some information, an icon and actions for each of them.

Mainly used in settings pages to render the properties and the actions alongside.

```javascript
<ItemAction>
  {#snippet icon()}<img src="{icpLogo}" class="start" />{/snippet}
  <div class="content">
    <p>Unlocking</p>
    <p class="description">No age bonus</p>
  </div>
  {#snippet actions()}
    <button class="secondary">
      One action
    </button>
  {/snippet}
</ItemAction>
```

## Properties

| Property  | Description                                                     | Type                    | Default     |
| --------- | --------------------------------------------------------------- | ----------------------- | ----------- |
| `tagName` | The tagName of the parent element.                              | `"li"` or `"div"`       | `"li"`      |
| `testId`  | Add a `data-tid` attribute to the DOM, useful for test purpose. | `string` or `undefined` | `undefined` |

## Snippets

| Snippet name    | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| Default snippet | The main content of the item.                                   |
| `logo`          | The logo of the item. Recommended to use 100% width and height. |
| `actions`       | Snippet to add the item actions.                                |

## Usage Recommendation

### Square Icon

The icon should be square and take all the item height.

The item has a set height of the button height plus some padding. The icon snippet is square of the whole item height and the same size for the width.

Therefore, the icon snippet should take the whole width and height to be square.

### Full Width Actions Mobile

In mobile, the actions are rendered below the content. It's recommended that the buttons take the full width.

If it's just on button, then stretch it or set the snippet to the button. If it's two buttons, make sure they cover the full width together.

## Showcase

The component is within a `div` with background to highlight the component exactly as it is.

**IMPORTANT: The component has no internal padding nor external margin. The spacing with the other components is responsibility of the parent using this component.**

### Showcase Logo as Div

<div class="wrapper">
  <ItemAction tagName="div">
    {#snippet icon()}<img src="{icpLogo}" class="start" />{/snippet}
    <div class="content">
      <p>Unlocking</p>
      <p class="description">No age bonus</p>
    </div>
    {#snippet actions()}<button class="secondary">One action</button>{/snippet}
  </ItemAction>
</div>

### Showcase Icon Inside UL

<ul class="wrapper">
  <ItemAction>
    {#snippet icon()}
        <div class="start icon">
          <IconLockOpen size="24px" />
        </div>
    {/snippet}
    <div class="content">
      <p>Unlocking</p>
      <p class="description">No age bonus</p>
    </div>
    {#snippet actions()}
        <div class="actions">
          <button class="secondary">One action</button>
          <button class="secondary">Another action</button>
        </div>
    {/snippet}
  </ItemAction>
</ul>

<style lang="scss">
  @use "../../../../lib/styles/mixins/media";

  ul {
    padding: 0;
  }

  .wrapper {
    background-color: var(--card-background);
    margin: var(--padding-3x) 0;

    p {
      margin: 0;
    }

    .start {
      width: 100%;
      height: 100%;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: var(--border-radius);
      background: var(--content-background);
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: var(--padding);
    }

    .actions {
      display: flex;
      gap: var(--padding);

      button {
        width: 100%;

        @include media.min-width(large) {
          width: auto;
        }
      }

    }
  }
</style>
