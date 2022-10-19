<script lang="ts">
  import Toasts from "$lib/components/Toasts.svelte";
</script>

<!-- We need the wrapper to avoid having an error in the tests -->
<!-- TypeError: Cannot read properties of null (reading 'removeChild') -->
<!-- https://github.com/sveltejs/svelte/issues/6037 -->
<div>
  <Toasts />
</div>
