<script lang="ts">
  import { page } from "$app/stores";
  import { afterNavigate } from "$app/navigation";
  import DocsAccountMenu from "$docs/components/DocsAccountMenu.svelte";
  import type { AfterNavigate } from "@sveltejs/kit";
  import Content from "$lib/components/Content.svelte";
  import { canGoBack, goBack } from "$docs/utils/docs.utils";

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
