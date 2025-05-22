<script lang="ts">
  import { BottomSheet } from "$lib";

  export let testId: string;
</script>

<BottomSheet>
  <p data-tid={`${testId}-header`} slot="header">TEST HEADER</p>
  <p data-tid={`${testId}-content`}>TEST CONTENT</p>
  <p data-tid={`${testId}-footer`} slot="footer">TEST FOOTER</p>
</BottomSheet>
