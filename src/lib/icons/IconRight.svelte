<!-- source: DFINITY foundation -->
<script lang="ts">
  import { DEFAULT_ICON_SIZE } from "$lib/constants/constants";

  interface Props {
    size?: string | number;
  }

  let { size = `${DEFAULT_ICON_SIZE}px` }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 20 20"
  fill="none"
>
  <path
    d="M8 14L12 10L8 6"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
