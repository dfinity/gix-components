<script lang="ts">
  import { page } from "$app/stores";
  import { afterNavigate } from "$app/navigation";
  import HeaderTitle from "$lib/components/HeaderTitle.svelte";
  import DocsAccountMenu from "$docs/components/DocsAccountMenu.svelte";
  import type { AfterNavigate } from "@sveltejs/kit";
  import Content from "$lib/components/Content.svelte";
  import { canGoBack, goBack } from "$docs/utils/docs.utils";

  let navHistory: AfterNavigate[] = [];
  let back = false;

  afterNavigate((navigation) => (navHistory = [navigation, ...navHistory]));

  $: back = canGoBack($page.route.id);
</script>

<Content {back} on:nnsBack={async () => await goBack({ navHistory })}>
  <DocsAccountMenu slot="toolbar-end" />

  <main>
    <slot />
  </main>
</Content>
