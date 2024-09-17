<script lang="ts">
  import { Theme } from "$lib/types/theme";
  import { themeStore } from "$lib/stores/theme.store";
  import { i18n } from "$lib/stores/i18n";
  import IconLightMode from "$lib/icons/IconLightMode.svelte";
  import IconDarkMode from "$lib/icons/IconDarkMode.svelte";

  const switchTheme = () => {
    themeStore.select($themeStore === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  $: isDarkMode = $themeStore === Theme.DARK;
</script>

<button
  data-tid="theme-toggle"
  class="theme-toggle icon-only"
  on:click={switchTheme}
  aria-label={$i18n.theme.switch_theme}
>
  {#if isDarkMode}
    <IconLightMode />
  {:else}
    <IconDarkMode />
  {/if}
</button>

<style lang="scss">
  .theme-toggle {
    color: var(--text-color);
    padding: var(--padding);
    background: var(--sidebar-button-background);

    &:hover {
      background: var(--sidebar-button-background-hover);
      :global(svg) {
        fill: var(--text-color);
      }
    }
  }
</style>
