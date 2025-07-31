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
  <DocsIconMenu slot="icon" text="H" />
  Home</MenuItem
>
<MenuItem href="/start" selected={pathname === "/start"} on:click>
  <DocsIconMenu slot="icon" text="G" />
  Getting Started
</MenuItem>
<MenuItem
  href="/components"
  selected={pathname.startsWith("/components")}
  on:click
>
  <DocsIconMenu slot="icon" text="C" />
  Components
</MenuItem>
<MenuItem
  href="/utility-classes"
  selected={pathname.startsWith("/utility-classes")}
  on:click
>
  <DocsIconMenu slot="icon" text="U" />
  Utility Classes
</MenuItem>
<MenuItem
  href="/utility-functions"
  selected={pathname.startsWith("/utility-functions")}
  on:click
>
  <DocsIconMenu slot="icon" text="F" />
  Utility Functions
</MenuItem>
<MenuItem href="/styling" selected={pathname.startsWith("/styling")} on:click>
  <DocsIconMenu slot="icon" text="S" />
  Styling
</MenuItem>
<MenuItem href="/icons" selected={pathname.startsWith("/icons")} on:click>
  <DocsIconMenu slot="icon" text="I" />
  Icons
</MenuItem>
<MenuItem href="/resources" selected={pathname === "/resources"} on:click>
  <DocsIconMenu slot="icon" text="R" />
  Resources
</MenuItem>
