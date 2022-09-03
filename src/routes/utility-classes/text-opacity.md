# Text Opacity

The opacity is used to emphasize the importance of text blocks on the page.

## Usage

| Text Type   | Opacity                | CSS variable          | CSS class     | Svelte Component |
| ----------- | ---------------------- | --------------------- | ------------- | ---------------- |
| value       | no opacity             | `--value-color`       | `value`       | `<Value>`        |
| label       | `--light-opacity`      | `--label-color`       | `label`       | n/a              |
| description | `--very-light-opacity` | `--description-color` | `description` | n/a              |

## Note

_This is not a strict rule. For example the descriptional text can be displayed in `label` style if there is no `label` styled block next to the main block._
