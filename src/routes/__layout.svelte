<script lang="ts">
  import Layout from "$lib/components/Layout.svelte";
  import DocsMenu from "$docs/components/DocsMenu.svelte";
  import Back from "$lib/components/Back.svelte";
  import { page } from "$app/stores";
  import { goto, afterNavigate } from "$app/navigation";

  let navHistory: { from: URL | null; to: URL }[] = [];
  let back = false;

  const goBack = async (defaultRoute = "/") =>
    navHistory.length === 1
      ? goto(defaultRoute, { replaceState: true })
      : history.back();

  afterNavigate((navigation) => (navHistory = [navigation, ...navHistory]));

  $: back = ($page.routeId ?? "").includes("/");
</script>

<Layout {back}>
  <Back slot="back" on:nnsBack={async () => await goBack()} />

  <h4 slot="title">GIX Components</h4>

  <DocsMenu slot="menu-items" on:click />

  <slot />
</Layout>

<style lang="scss" global>
  @import "../lib/styles/global.scss";
  @import "../../node_modules/prismjs/themes/prism-tomorrow.css";
  @import "../docs/styles/docs-global.scss";

  // Custom sizes for docs

  main {
    & > h1:first-of-type {
      font-size: var(--font-size-huge);
    }

    & > h2,
    & > .grid {
      margin-top: var(--padding-4x);

      &:not(:first-of-type) {
        margin-top: var(--padding-6x);
      }
    }

    & > h3,
    & > ul {
      margin-top: var(--padding-3x);
    }

    table,
    pre[class*="language-"] {
      margin: var(--padding-3x) 0;
    }
  }

  a {
    font-size: inherit;
    text-decoration: underline;

    &:focus,
    &:hover {
      color: var(--primary);
    }
  }

  p code {
    font-size: var(--font-size-small);
    background: #2d2d2d;
    padding: var(--padding-0_5x);
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  }
</style>
