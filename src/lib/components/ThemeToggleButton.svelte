<script lang="ts">
  import { fade } from "svelte/transition";
  import IconDarkMode from "$lib/icons/IconDarkMode.svelte";
  import IconLightMode from "$lib/icons/IconLightMode.svelte";
  import { i18n } from "$lib/stores/i18n";
  import { themeStore } from "$lib/stores/theme.store";
  import { Theme } from "$lib/types/theme";

  const switchTheme = () => {
    themeStore.select($themeStore === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  let isDarkMode: boolean;
  $: isDarkMode = $themeStore === Theme.DARK;
</script>

<button
  data-tid="theme-toggle-button"
  class="theme-toggle-button icon-only"
  on:click={switchTheme}
  aria-label={$i18n.theme.switch_theme}
>
  {#if isDarkMode}
    <span in:fade|global>
      <IconLightMode />
    </span>
  {:else}
    <span in:fade|global>
      <IconDarkMode />
    </span>
  {/if}
</button>

<style lang="scss">
  .theme-toggle-button {
    // Height and width base on icon size + padding
    // To fix the issue of ThemeToggle being stretched by parents
    height: calc(var(--padding-2x) + 20px);
    width: calc(var(--padding-2x) + 20px);
    color: var(--sidebar-icon);
    padding: var(--padding);
    background: var(--sidebar-button-background);
    line-height: 0;
    &:hover {
      background: var(--sidebar-button-background-hover);
      --icon-fill: var(--sidebar-icon);
    }
  }
</style>
