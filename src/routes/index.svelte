<script lang="ts">
  import Demo from "$lib/Demo.svelte";
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<Demo color="yellow" on:nnsDemo={() => alert("Demo")} />
