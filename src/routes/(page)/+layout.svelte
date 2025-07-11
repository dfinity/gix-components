<script lang="ts">
  import type { AfterNavigate } from "@sveltejs/kit";
  import { afterNavigate } from "$app/navigation";
  import { page } from "$app/stores";
  import DocsAccountMenu from "$docs/components/DocsAccountMenu.svelte";
  import { canGoBack, goBack } from "$docs/utils/docs.utils";
  import Content from "$lib/components/Content.svelte";

  let navHistory: AfterNavigate[] = [];

  afterNavigate((navigation) => (navHistory = [navigation, ...navHistory]));

  $: onBack = canGoBack($page.route.id)
    ? async () => await goBack({ navHistory })
    : undefined;
</script>

<Content {onBack}>
  {#snippet toolbarEnd()}
    <DocsAccountMenu />
  {/snippet}

  <main>
    <slot />
  </main>
</Content>
