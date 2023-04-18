<script lang="ts">
  import Back from "$lib/components/Back.svelte";
  import TestIdWrapper from "$lib/components/TestIdWrapper.svelte";

  export let testId: string | undefined = undefined;
  export let childTestId: string | undefined = undefined;
</script>

<TestIdWrapper {testId}>
  <div data-tid={childTestId} />
</TestIdWrapper>
