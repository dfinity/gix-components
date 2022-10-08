<script lang="ts">
  import Popover from "$lib/components/Popover.svelte";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import IconAccount from "$lib/icons/IconAccount.svelte";

  let visible = false;
  let button: HTMLButtonElement | undefined;
</script>

<button
  data-tid="account-menu"
  class="icon-only toggle"
  bind:this={button}
  on:click={() => (visible = !visible)}
  aria-label="Open menu to access some settings"
>
  <IconAccount />
</button>

<Popover bind:visible anchor={button} direction="rtl">
  <div class="info">
    <ThemeToggle />
  </div>
</Popover>

<style lang="scss">
  @use "../../lib/styles/mixins/overlay";
  @use "../../lib/styles/mixins/media";
  @use "../../lib/styles/mixins/header";

  .info {
    @include overlay.content;

    display: flex;
    flex-direction: column;
    gap: var(--padding-3x);
  }

  .toggle {
    justify-self: flex-end;

    @include header.button(--brand-sea-buckthorn);
  }
</style>
