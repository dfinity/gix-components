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
  stroke="currentColor"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
  data-tid="icon-error-outline"
>
  <path
    d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z"
  />
  <path d="M10 6L10 11" />
  <path d="M10 14L9.99 14" />
</svg>
