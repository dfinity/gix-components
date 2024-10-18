<script lang="ts">
  import Banner from "$lib/components/Banner.svelte";
</script>

<Banner>
  <span slot="icon">Test Icon</span>
  <span slot="title">Test Title</span>
  <span slot="description">Test Description</span>
  <button slot="action">Test Action</button>
</Banner>
