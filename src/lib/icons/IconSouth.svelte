<!-- source: DFINITY foundation -->
<script lang="ts">
  import {
    DEFAULT_ICON_SIZE,
    DEFAULT_STROKE_WIDTH,
  } from "$lib/constants/constants";

  interface Props {
    size?: string | number;
    strokeWidth?: string | number;
  }

  let {
    size = `${DEFAULT_ICON_SIZE}px`,
    strokeWidth = DEFAULT_STROKE_WIDTH,
  }: Props = $props();
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  stroke="currentColor"
>
  <path
    d="M10 1L10 18"
    stroke-width={strokeWidth}
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M2 11L10 19L18 11"
    stroke-width={strokeWidth}
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
