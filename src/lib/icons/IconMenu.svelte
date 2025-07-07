<!-- Source DFINITY Foundation -->
<script lang="ts">
  import { DEFAULT_ICON_SIZE } from "$lib/constants/constants";

  interface Props {
    size?: string | number;
  }

  let { size = `${DEFAULT_ICON_SIZE}px` }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  height={size}
  viewBox="0 0 20 20"
  width={size}
  fill="none"
  stroke="currentColor"
>
  <path
    d="M3 14H17M3 10H17M3 6H17"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
