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
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2.5 6.25C2.5 4.17893 4.17893 2.5 6.25 2.5H13.75C15.8211 2.5 17.5 4.17893 17.5 6.25V8.5V11.5V13.75C17.5 15.8211 15.8211 17.5 13.75 17.5H6.25C4.17893 17.5 2.5 15.8211 2.5 13.75V6.25ZM16 6.25V7H12.25C10.5931 7 9.25 8.34315 9.25 10C9.25 11.6569 10.5931 13 12.25 13H16V13.75C16 14.9926 14.9926 16 13.75 16H6.25C5.00736 16 4 14.9926 4 13.75V6.25C4 5.00736 5.00736 4 6.25 4H13.75C14.9926 4 16 5.00736 16 6.25ZM12.25 8.5H16V11.5H12.25C11.4216 11.5 10.75 10.8284 10.75 10C10.75 9.17157 11.4216 8.5 12.25 8.5ZM12.25 9.25C11.8358 9.25 11.5 9.58579 11.5 10C11.5 10.4142 11.8358 10.75 12.25 10.75H12.325C12.7392 10.75 13.075 10.4142 13.075 10C13.075 9.58579 12.7392 9.25 12.325 9.25H12.25Z"
    fill="currentColor"
  />
</svg>
