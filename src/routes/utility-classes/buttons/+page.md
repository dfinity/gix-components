<script lang="ts">
    import IconMenu from "$lib/icons/IconMenu.svelte";
</script>

# Buttons

All styles that can be applied to buttons.

## Note

In Figma file the `success` and `danger` are named `positive` and `negative` buttons.

## Showcase

### Default

| Styles                                              | Disabled                                                       |
| --------------------------------------------------- | -------------------------------------------------------------- |
| <button class="primary">Primary Button</button>     | <button class="primary" disabled>Primary Disabled</button>     |
| <button class="secondary">Secondary Button</button> | <button class="secondary" disabled>Secondary Disabled</button> |
| <button class="ghost">Ghost Button</button>         | <button class="ghost" disabled>Ghost Disabled</button>         |
| <button class="success">Success Button</button>     | <button class="success" disabled>Success Disabled</button>     |
| <button class="danger">Danger Button</button>       | <button class="danger" disabled>Danger Disabled</button>       |

### Others

| Styles                                          | Disabled                                                 |
| ----------------------------------------------- | -------------------------------------------------------- |
| <button class="icon-only"><IconMenu /></button> | <button class="icon-only" disabled><IconMenu /></button> |

### `.full-width`

| Styles                                                         | Disabled                                                                  |
| -------------------------------------------------------------- | ------------------------------------------------------------------------- |
| <button class="primary full-width">Primary Button</button>     | <button class="primary full-width" disabled>Primary Disabled</button>     |
| <button class="secondary full-width">Secondary Button</button> | <button class="secondary full-width" disabled>Secondary Disabled</button> |
| <button class="ghost full-width">Ghost Button</button>         | <button class="ghost full-width" disabled>Ghost Disabled</button>         |
| <button class="success full-width">Success Button</button>     | <button class="success full-width" disabled>Success Disabled</button>     |
| <button class="danger full-width">Danger Button</button>       | <button class="danger full-width" disabled>Danger Disabled</button>       |
