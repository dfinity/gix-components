<script lang="ts">
    import IconMenu from "$lib/icons/IconMenu.svelte";
</script>

# Buttons

All styles that can be applied to buttons.

## Showcase

<div class="card-grid">
    <div>
        <button class="primary">Button</button>
        <code>primary</code>
    </div>

    <div>
        <button class="secondary">Button</button>
        <code>secondary</code>
    </div>

    <div>
        <button class="success">Button</button>
        <code>success</code>
    </div>

    <div>
        <button class="danger">Button</button>
        <code>danger</code>
    </div>

    <div>
        <button class="text">Button</button>
        <code>text</code>
    </div>

    <div>
        <button class="ghost">Button</button>
        <code>ghost</code>
    </div>

    <div>
        <button class="icon-only"><IconMenu /></button>
        <code>icon-only</code>
    </div>

    <div>
        <button class="primary full-width">Button</button>
        <code>primary + full-width</code>
    </div>

    <div>
        <button class="primary small">Button</button>
        <code>primary + small</code>
    </div>

    <div>
        <button class="primary" disabled>Button</button>
        <code>primary & disabled</code>
    </div>

</div>

<style lang="scss">
    .card-grid > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--padding-2x);
    }
</style>
