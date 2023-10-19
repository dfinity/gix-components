<script lang="ts">
  import { page } from "$app/stores";
  import MenuItem from "$lib/components/MenuItem.svelte";
  import IconLaunchpad from "$lib/icons/IconLaunchpad.svelte";

  let pathname: string;
  $: ({
    url: { pathname },
  } = $page);
</script>

<MenuItem href="/" selected={pathname === "/"} on:click>
  <IconLaunchpad slot="icon" />
  Home</MenuItem
>
<MenuItem href="/start" selected={pathname === "/start"} on:click>
  <IconLaunchpad slot="icon" />
  Getting Started
</MenuItem>
<MenuItem
  href="/components"
  selected={pathname.startsWith("/components")}
  on:click
>
  <IconLaunchpad slot="icon" />
  Components
</MenuItem>
<MenuItem
  href="/utility-classes"
  selected={pathname.startsWith("/utility-classes")}
  on:click
>
  <IconLaunchpad slot="icon" />
  Utility Classes
</MenuItem>
<MenuItem href="/styling" selected={pathname.startsWith("/styling")} on:click>
  <IconLaunchpad slot="icon" />
  Styling
</MenuItem>
<MenuItem href="/icons" selected={pathname.startsWith("/icons")} on:click>
  <IconLaunchpad slot="icon" />
  Icons
</MenuItem>
<MenuItem href="/resources" selected={pathname === "/resources"} on:click>
  <IconLaunchpad slot="icon" />
  Resources
</MenuItem>
