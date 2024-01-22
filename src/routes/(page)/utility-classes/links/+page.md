<script lang="ts">
    import IconMenu from "$lib/icons/IconMenu.svelte";
    import IconAdd from "$lib/icons/IconAdd.svelte";
</script>

# Links

All styles that can be applied to anchor tags.

## Showcase

### Default

<div class="container" data-tid="showcase">

| Styles                                                                            |
| --------------------------------------------------------------------------------- |
| <a href="#">Default Link</a>                                                      |
| <button class="primary">Primary Button</button>                                   |
| <a href="#" class="button primary">Button link Primary</a>                        |
| <a href="#" class="button primary full-width">Button link full width</a>          |
| <a href="#" class="button primary with-icon"><IconAdd />Button link with icon</a> |

</div>

<style>
    .container table td {
        font-size: var(--font-size-standard);
    }
</style>
