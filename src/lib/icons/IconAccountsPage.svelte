<!-- source: DFINITY foundation -->
<script lang="ts">
  interface Props {
    size?: string | number
  }

  // Default to 100% size to make sure Safari renders the SVG correctly
  let { size = "100%" }: Props = $props();
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 144 144"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    opacity="0.2"
    x="35.354"
    y="20.0669"
    width="102.698"
    height="102.698"
    rx="18.0713"
    transform="rotate(7 35.354 20.0669)"
    fill="#436FF5"
  />
  <rect
    x="9.54785"
    y="49.604"
    width="76.0212"
    height="79.062"
    rx="18.2338"
    transform="rotate(-6.73734 9.54785 49.604)"
    fill="url(#paint0_linear_2_6638)"
    fill-opacity="0.4"
  />
  <rect
    x="8.31201"
    y="65.0596"
    width="91.2254"
    height="69.9394"
    rx="16"
    transform="rotate(-6.73734 8.31201 65.0596)"
    fill="url(#paint1_linear_2_6638)"
  />
  <rect
    x="67.8301"
    y="76.4004"
    width="39.531"
    height="24.3268"
    rx="12.1634"
    transform="rotate(-6.73734 67.8301 76.4004)"
    fill="url(#paint2_linear_2_6638)"
  />
  <rect
    x="86.6621"
    y="80.2998"
    width="12.1634"
    height="12.1634"
    rx="6.08169"
    transform="rotate(83.2627 86.6621 80.2998)"
    fill="url(#paint3_linear_2_6638)"
  />
  <defs>
    <linearGradient
      id="paint0_linear_2_6638"
      x1="-93.498"
      y1="22.7993"
      x2="63.4409"
      y2="-0.191148"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#AFC3FF" stop-opacity="0" />
      <stop offset="1" stop-color="#1851FF" />
    </linearGradient>
    <linearGradient
      id="paint1_linear_2_6638"
      x1="8.31201"
      y1="36.4062"
      x2="112.585"
      y2="72.9954"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#C4D3FF" />
      <stop offset="1" stop-color="#003FFF" />
    </linearGradient>
    <linearGradient
      id="paint2_linear_2_6638"
      x1="67.8301"
      y1="66.434"
      x2="110.436"
      y2="85.0597"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#C4D3FF" />
      <stop offset="1" stop-color="#003FFF" />
    </linearGradient>
    <linearGradient
      id="paint3_linear_2_6638"
      x1="98.2156"
      y1="83.2622"
      x2="96.8654"
      y2="94.6636"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#F9FAFF" />
      <stop offset="1" stop-color="#F7FBFF" stop-opacity="0" />
    </linearGradient>
  </defs>
</svg>
