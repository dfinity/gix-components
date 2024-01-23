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
| <a href="#" class="button primary">Button Primary link</a>                        |
| <a href="#" class="button secondary">Button Secondary link</a>                    |
| <a href="#" class="button primary full-width">Button full-width link</a>          |
| <a href="#" class="button primary with-icon"><IconAdd />Button with-icon link</a> |

</div>

<style>
    .container table td {
        font-size: var(--font-size-standard);
    }
</style>
