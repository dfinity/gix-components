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
  height={size}
  viewBox="0 0 20 20"
  width={size}
  stroke="currentColor"
  fill="none"
>
  <path
    d="M12.5 9.16667L10 11.6667L7.5 9.16667M17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10Z"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
