<script lang="ts">
  import { page } from "$app/stores";
  import MenuItem from "$lib/components/MenuItem.svelte";

  let pathname: string;
  $: ({
    url: { pathname },
  } = $page);
</script>

<MenuItem href="/" selected={pathname === "/"} on:click>Home</MenuItem>
<MenuItem href="/start" selected={pathname === "/start"} on:click>
  Getting Started
</MenuItem>
<MenuItem
  href="/components"
  selected={pathname.startsWith("/components")}
  on:click
>
  Components
</MenuItem>
<MenuItem
  href="/utility-classes"
  selected={pathname.startsWith("/utility-classes")}
  on:click
>
  Utility Classes
</MenuItem>
<MenuItem href="/icons" selected={pathname.startsWith("/icons")} on:click>
  Icons
</MenuItem>
<MenuItem href="/resources" selected={pathname === "/resources"} on:click>
  Resources
</MenuItem>
