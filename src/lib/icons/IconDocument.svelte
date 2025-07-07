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
  stroke="currentColor"
  xmlns="http://www.w3.org/2000/svg"
  data-tid="document"
  ><path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    d="M11.666 1.666H5a1.667 1.667 0 0 0-1.667 1.667v13.333A1.667 1.667 0 0 0 5 18.333h10a1.667 1.667 0 0 0 1.666-1.667v-10l-5-5Z"
  /><path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    d="M11.667 1.666v5h5M13.334 10.834H6.667M13.334 14.166H6.667M8.334 7.5H6.667"
  /></svg
>
