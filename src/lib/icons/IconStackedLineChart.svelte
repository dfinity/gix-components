<!-- Source https://fonts.google.com/icons?selected=Material%20Icons%20Outlined%3Astacked_line_chart%3A -->
<script lang="ts">
  import { DEFAULT_ICON_SIZE } from "$lib/constants/constants";

  interface Props {
    size?: string | number;
  }

  let { size = `${DEFAULT_ICON_SIZE}px` }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  enable-background="new 0 0 24 24"
  data-tid="stacked-line-chart"
  height={size}
  viewBox="0 0 24 24"
  width={size}
  fill="currentColor"
  ><rect fill="none" height="24" width="24" /><path
    d="M2,19.99l7.5-7.51l4,4l7.09-7.97L22,9.92l-8.5,9.56l-4-4l-6,6.01L2,19.99z M3.5,15.49l6-6.01l4,4L22,3.92l-1.41-1.41 l-7.09,7.97l-4-4L2,13.99L3.5,15.49z"
  /></svg
>
