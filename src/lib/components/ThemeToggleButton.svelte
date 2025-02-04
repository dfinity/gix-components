<script lang="ts">
  import { Theme } from "$lib/types/theme";
  import { themeStore } from "$lib/stores/theme.store";
  import { i18n } from "$lib/stores/i18n";
  import IconLightMode from "$lib/icons/IconLightMode.svelte";
  import IconDarkMode from "$lib/icons/IconDarkMode.svelte";
  import { testSafeFade } from "$lib/directives/transition.directives";

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
    <span in:testSafeFade|global>
      <IconLightMode />
    </span>
  {:else}
    <span in:testSafeFade|global>
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
