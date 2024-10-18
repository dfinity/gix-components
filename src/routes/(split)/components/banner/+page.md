<script lang="ts">
  import Banner from "$lib/components/Banner.svelte";
  import IconInfo from "$lib/icons/IconInfo.svelte";
</script>

# Banner

A versatile component to render informative banners with customizable content, actions, and visibility control.

| Property  | Description                                                     | Type                    | Default     |
| --------- | --------------------------------------------------------------- | ----------------------- | ----------- |
| `testId`  | Add a `data-tid` attribute to the DOM, useful for test purpose. | `string` or `undefined` | `undefined` |
| `visible` | Controls the visibility of the banner.                          | `boolean`               | `true`      |

## Slots

| Slot name     | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| `icon`        | Icon appearing at the start of the banner.                                  |
| `title`       | Title of the banner.                                                        |
| `description` | Description text below the title. It should explain the banner's purpose.   |
| `action`      | Located on the right side of the banner. Useful for call-to-action buttons. |

## Events

| Event      | Description                                  |
| ---------- | -------------------------------------------- |
| `nnsClose` | Dispatched when the close button is clicked. |

## Showcase

The component has its own background color and visibility control, which can be customized using props and CSS variables.

### Example

<Banner>
  <IconInfo slot="icon" />
  <span slot="title" class='title'>Your ICP Wallet</span>
  <span slot="description" class="description">
    Create and link accounts, transfer ICP, participate in governance, and earn
    rewards.
  </span>
  <button class="secondary" slot="action">Connect with Internet Identity</button>
</Banner>

<br />

<style lang="scss">
  @use "../../../../lib/styles/mixins/fonts";

  .title {
    @include fonts.small(true);
  }
  .description {
    @include fonts.small(false);
  }
</style>

#### Code

```text
<Banner>
<IconInfo slot="icon" />
<span slot="title">Your ICP Wallet</span>
<span slot="description" class="description">
Create and link accounts, transfer ICP, participate in governance, and earn
rewards.
</span>
<button class="primary" slot="action">Connect Wallet</button>
</Banner>

<style lang="scss">
  @use "../../../../lib/styles/mixins/fonts";

  .title {
    @include fonts.small(true);
  }
  .description {
    @include fonts.small(false);
  }
</style>

```

## Visibility Control

The Banner component includes built-in visibility control:

- The `visible` prop controls the visibility of the banner.
- When the close button is clicked, the `visible` prop is set to `false` and an `nnsClose` event is dispatched.

## Customization

You can customize the appearance of the Banner component using CSS variables:

| CSS Variable                   | Description                          | Default Value                  |
| ------------------------------ | ------------------------------------ | ------------------------------ |
| `--banner-background`          | Background color of the banner       | `var(--input-background)`      |
| `--banner-radius`              | Border radius of the banner          | `var(--border-radius)`         |
| `--banner-top-bottom-padding`  | Vertical padding inside the banner   | `var(--padding)`               |
| `--banner-left-right-padding`  | Horizontal padding inside the banner | `var(--padding-1_5x)`          |
| `--banner-column-gap`          | Gap between banner elements          | `var(--padding-1_5x)`          |
| `--icon-background-padding`    | Padding around the icon              | `6px`                          |
| `--icon-background-color`      | Background color of the icon wrapper | `var(--dropdown-border-color)` |
| `--icon-border-radius`         | Border radius of the icon wrapper    | `50%`                          |
| `--icon-color`                 | Color of the icon                    | `var(--elements-icons)`        |
| `--close-button-padding`       | Padding of the close button          | `10px`                         |
| `--close-button-border-radius` | Border radius of the close button    | `var(--border-radius)`         |
| `--close-button-background`    | Background color of the close button | `var(--card-background)`       |

Example of customization:

```svelte
<Banner>
  <!-- Banner content -->
</Banner>

<style lang="scss">
  :global(.banner) {
    --banner-background: #f0f8ff;
    --banner-radius: 10px;
    --banner-top-bottom-padding: 12px;
    --banner-left-right-padding: 18px;
    --banner-column-gap: 18px;
    --icon-background-color: #e6f3ff;
    --icon-color: #0056b3;
    --close-button-background: #ffffff;
  }
</style>
```

This customization will apply a light blue theme to the banner and adjust the padding, border radius, and colors.
