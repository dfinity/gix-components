<script lang="ts">
  import { browser } from "$app/environment";
  import { Value } from "$lib";
  import { isAndroidTablet, isIPad, isMobile } from "$lib/utils/device.utils";
</script>

<h1>Browser</h1>

<p>
  This page shows you what your web browser is sending in the "User-Agent"
  header for your HTTP requests and summarize few of its features.
</p>

<h2>User agent</h2>

<pre class="language-javascript">
<code class="language-javascript"
    ><span
      >{#if browser}{navigator.userAgent}{/if}</span
    ></code
  >
</pre>

<h2>Device</h2>

<table>
  <tr>
    <td class="description">isMobile</td>
    <td
      ><Value>
        {isMobile()}
      </Value></td
    >
  </tr>

  <tr>
    <td class="description">isIPad</td>
    <td
      ><Value>
        {isIPad()}
      </Value></td
    >
  </tr>

  <tr>
    <td class="description">isAndroidTablet</td>
    <td
      ><Value>
        {isAndroidTablet()}
      </Value></td
    >
  </tr>

  <tr>
    <td class="description">Touch screen</td>
    <td
      ><Value>
        {#if browser}{window.matchMedia("(any-pointer:coarse)").matches}{/if}
      </Value></td
    >
  </tr>

  <tr>
    <td class="description">Mouse screen</td>
    <td
      ><Value>
        {#if browser}{window.matchMedia("(any-pointer:fine)").matches}{/if}
      </Value></td
    >
  </tr>
</table>

<style lang="scss">
  .language-javascript span {
    white-space: pre-wrap;
  }
</style>
