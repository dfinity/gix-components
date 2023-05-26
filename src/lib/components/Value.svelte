<script lang="ts">
  export let ariaLabel: string | undefined = undefined;
  export let testId: string | undefined = undefined;
</script>

<span class="value" aria-label={ariaLabel} data-tid={testId}>
  <slot />
</span>
