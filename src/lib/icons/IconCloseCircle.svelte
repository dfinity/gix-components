<!-- source: DFINITY foundation -->
<script lang="ts">
  interface Props {
    size?: string | number;
  }

  let { size = "24px" }: Props = $props();
</script>

<svg
  height={size}
  width={size}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    x="1.25"
    y="1.25"
    width="21.5"
    height="21.5"
    rx="10.75"
    fill="var(--icon-close-circle-background, transparent)"
  />
  <path
    fill="var(--icon-close-circle-color, currentColor)"
    d="M14.808 8.22a.75.75 0 1 1 1.06 1.06l-2.764 2.764 2.645 2.644a.75.75 0 0 1-1.06 1.061l-2.645-2.645-2.645 2.645a.75.75 0 0 1-1.06-1.06l2.644-2.645L8.22 9.28a.75.75 0 1 1 1.06-1.06l2.764 2.763 2.764-2.763Z"
  />
  <rect
    x="1.25"
    y="1.25"
    width="21.5"
    height="21.5"
    rx="10.75"
    stroke="var(--icon-close-circle-background, currentColor)"
    stroke-width="1.5"
  />
</svg>
