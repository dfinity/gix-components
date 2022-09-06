<script lang="ts">
    import BottomSheet from "$lib/components/BottomSheet.svelte";
</script>

# Bottom Sheet

Bottom sheets are surfaces containing supplementary content that are anchored to the bottom of the screen.

In GIX components, such dialogs are displayed with a `fixed` position on **mobile** devices only. On wider devices, their position is reverted to `relative` to integrate the content flow.

## Showcase

<BottomSheet>
    <div class="buttons">
        <button class="success small">Adopt</button>
        <button class="danger small">Reject</button>
    </div>
    
    <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lorem ipsum. Morbi id pulvinar tellus. Pellentesque iaculis tempor nunc. Maecenas ut pellentesque purus, sit amet fermentum velit.</p>
</BottomSheet>

<style lang="scss">
    .buttons {
        display: flex;
        justify-content: center;
        gap: var(--padding);
    }
</style>
