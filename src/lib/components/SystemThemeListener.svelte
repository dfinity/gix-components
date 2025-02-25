<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { themeStore } from "$lib";
  import { LOCALSTORAGE_THEME_KEY } from "$lib/utils/theme.utils.js";

  export let nnsOnChange: undefined | ((isDarkMode: boolean) => void);

  // Set up our MediaQueryList
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

  // Update the store if OS preference changes
  const updateThemeOnChange = () => {
    if (nnsOnChange) {
      nnsOnChange(prefersDarkMode.matches);
    } else {
      // Only reset to system theme if no specific preference has been selected
      if (window.localStorage.getItem(LOCALSTORAGE_THEME_KEY) !== null) return;

      themeStore.resetToSystemSettings();
    }
  };

  // Register change event on mount
  onMount(() => prefersDarkMode.addEventListener('change', updateThemeOnChange));

  // Clean up if this component is destroyed
  onDestroy(() => prefersDarkMode.removeEventListener('change', updateThemeOnChange));
</script>
