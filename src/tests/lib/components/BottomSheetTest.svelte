<script lang="ts">
  import { BottomSheet } from "$lib";

  export let testId: string;
</script>

<BottomSheet>
  <p slot="header" data-tid={`${testId}-header`}>TEST HEADER</p>
  <p data-tid={`${testId}-content`}>TEST CONTENT</p>
  <p slot="footer" data-tid={`${testId}-footer`}>TEST FOOTER</p>
</BottomSheet>
