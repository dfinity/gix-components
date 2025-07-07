<script lang="ts">
  import TestIdWrapper from "$lib/components/TestIdWrapper.svelte";

  export let testId: string;
  export let childTestId: string | undefined = undefined;
</script>

<TestIdWrapper {testId}>
  <div data-tid={childTestId}></div>
</TestIdWrapper>
