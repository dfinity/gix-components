<!-- source: DFINITY foundation -->
<script lang="ts">
  import { DEFAULT_ICON_SIZE } from "$lib/constants/constants";

  interface Props {
    size?: string | number;
  }

  let { size = `${DEFAULT_ICON_SIZE}px` }: Props = $props();
</script>

<svg
  height={size}
  width={size}
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    x="14.4194"
    y="4.52441"
    width="1.5"
    height="14"
    rx="0.75"
    transform="rotate(45 14.4194 4.52441)"
    fill="currentColor"
  />
  <rect
    x="4.5199"
    y="5.58496"
    width="1.5"
    height="14"
    rx="0.75"
    transform="rotate(-45 4.5199 5.58496)"
    fill="currentColor"
  />
</svg>
