<script lang="ts">
  import { page } from "$app/stores";
  import DocsIconMenu from "$docs/components/DocsIconMenu.svelte";
  import MenuItem from "$lib/components/MenuItem.svelte";

  let pathname: string;
  $: ({
    url: { pathname },
  } = $page);
</script>

<MenuItem href="/" selected={pathname === "/"} on:click>
  <DocsIconMenu text="H" slot="icon" />
  Home</MenuItem
>
<MenuItem href="/start" selected={pathname === "/start"} on:click>
  <DocsIconMenu text="G" slot="icon" />
  Getting Started
</MenuItem>
<MenuItem
  href="/components"
  selected={pathname.startsWith("/components")}
  on:click
>
  <DocsIconMenu text="C" slot="icon" />
  Components
</MenuItem>
<MenuItem
  href="/utility-classes"
  selected={pathname.startsWith("/utility-classes")}
  on:click
>
  <DocsIconMenu text="U" slot="icon" />
  Utility Classes
</MenuItem>
<MenuItem
  href="/utility-functions"
  selected={pathname.startsWith("/utility-functions")}
  on:click
>
  <DocsIconMenu text="F" slot="icon" />
  Utility Functions
</MenuItem>
<MenuItem href="/styling" selected={pathname.startsWith("/styling")} on:click>
  <DocsIconMenu text="S" slot="icon" />
  Styling
</MenuItem>
<MenuItem href="/icons" selected={pathname.startsWith("/icons")} on:click>
  <DocsIconMenu text="I" slot="icon" />
  Icons
</MenuItem>
<MenuItem href="/resources" selected={pathname === "/resources"} on:click>
  <DocsIconMenu text="R" slot="icon" />
  Resources
</MenuItem>
