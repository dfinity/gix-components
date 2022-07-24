<script lang="ts">
    import { page } from "$app/stores";
    import MenuItem from "$lib/components/MenuItem.svelte";

    let pathname: string;
    $: ({url: {pathname}} = $page);
</script>

<MenuItem href="/" selected={pathname === "/"}>
    Home
</MenuItem>
<MenuItem href="/start" selected={pathname === "/start"}>
    Getting Started
</MenuItem>
<MenuItem href="/resources" selected={pathname === "/resources"}>
    Resources
</MenuItem>
