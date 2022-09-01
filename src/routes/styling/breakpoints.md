# Breakpoints

The layout is defined for following viewport's breakpoints:

| Breakpoint | Value    | Description         |
| ---------- | -------- | ------------------- |
| `xsmall`   | `320px`  | Extra small devices |
| `small`    | `576px`  | Small               |
| `medium`   | `768px`  | Medium              |
| `large`    | `1024px` | Large               |
| `xlarge`   | `1300px` | Extra large         |

## Usage

The breakpoints are used internally and can be used in your projects too. For such purpose we expose a `mixin` that can be used as following:

```scss
@use "@dfinity/gix-components/styles/mixins/media";

@include media.min-width(large) {
  div:after {
    content: "A style that should happen only as of large screen.";
  }
}
```
