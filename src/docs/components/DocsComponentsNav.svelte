<script lang="ts">
  import DocsCardNav from "$docs/components/DocsCardNav.svelte";
  import Nav from "$lib/components/Nav.svelte";
</script>

<div>
  <Nav>
    <h3 slot="title">Pick a component</h3>

    <DocsCardNav url="/components/bottom-sheet">Bottom Sheet</DocsCardNav>

    <DocsCardNav url="/components/busy-screen">BusyScreen</DocsCardNav>

    <DocsCardNav url="/components/card">Card</DocsCardNav>

    <DocsCardNav url="/components/checkbox">Checkbox</DocsCardNav>

    <DocsCardNav url="/components/collapsible">Collapsible</DocsCardNav>

    <DocsCardNav url="/components/content">Content</DocsCardNav>

    <DocsCardNav url="/components/copy">Copy</DocsCardNav>

    <DocsCardNav url="/components/dropdown">Dropdown</DocsCardNav>

    <DocsCardNav url="/components/external-link">External Link</DocsCardNav>

    <DocsCardNav url="/components/header-title">Header Title</DocsCardNav>

    <DocsCardNav url="/components/html">Html</DocsCardNav>

    <DocsCardNav url="/components/infinite-scroll">Infinite Scroll</DocsCardNav>

    <DocsCardNav url="/components/input-range">Input Range</DocsCardNav>

    <DocsCardNav url="/components/island">Island</DocsCardNav>

    <DocsCardNav url="/components/key-value">Key Value</DocsCardNav>

    <DocsCardNav url="/components/key-value-info">Key Value Info</DocsCardNav>

    <DocsCardNav url="/components/layout">Layout</DocsCardNav>

    <DocsCardNav url="/components/modal">Modal</DocsCardNav>

    <DocsCardNav url="/components/popover">Popover</DocsCardNav>

    <DocsCardNav url="/components/progress-bar">Progress Bar</DocsCardNav>

    <DocsCardNav url="/components/skeleton-text">Skeleton Text</DocsCardNav>

    <DocsCardNav url="/components/spinner">Spinner</DocsCardNav>

    <DocsCardNav url="/components/tag">Tag</DocsCardNav>

    <DocsCardNav url="/components/toasts">Toasts</DocsCardNav>

    <DocsCardNav url="/components/theme-toggle">Theme Toggle</DocsCardNav>

    <DocsCardNav url="/components/toggle">Toggle</DocsCardNav>

    <DocsCardNav url="/components/value">Value</DocsCardNav>

    <DocsCardNav url="/components/wizard-modal">Wizard Modal</DocsCardNav>
  </Nav>
</div>

<style lang="scss">
  @use "../../lib/styles/mixins/media";

  h3 {
    padding: var(--padding-2x) 0 0;
  }

  div {
    :global(article:not(.selected)) {
      display: none;

      @include media.min-width(large) {
        display: block;
      }
    }
  }
</style>
