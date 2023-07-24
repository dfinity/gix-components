<script lang="ts">
    import Modal from "$lib/components/Modal.svelte";
    import DocsLoremIpsum from "$docs/components/DocsLoremIpsum.svelte";

    let visible = false;
    let role: "dialog" | "alert" = "dialog";
</script>

# Modal

A Modal is a dialog that appears on top of the app's content, and must be dismissed by the app before interaction can resume. It is useful as a select component when there are a lot of options to choose from, or when filtering items in a list, as well as many other use cases.

```javascript
<script lang="ts">
    let visible = false;
</script>

<button on:click={() => (visible = true)}>
  Open modal
</button>

<Modal {visible} on:nnsClose={() => (visible = false)}>
  <svelte:fragment slot="title">My title</svelte:fragment>

  <p>My content</p>
</Modal>
```

## Properties

| Property               | Description                                                                                             | Type                    | Default     |
| ---------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------- | ----------- |
| `visible`              | Display or hide the modal.                                                                              | `boolean`               | `false`     |
| `role`                 | The modal is either a dialog meant for getting work done or an alert that requires immediate attention. | `dialog` or `alert`     | `dialog`    |
| `testId`               | Add a `data-tid` attribute to the DOM, useful for test purpose.                                         | `string` or `undefined` | `undefined` |
| `disablePointerEvents` | Disable interactive elements - close actions - of the modal.                                            | `boolean`               | `false`     |

## Slots

| Slot name    | Description                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------- |
| Default slot | The content of the modal.                                                                    |
| `title`      | The title of the modal. Displayed in a toolbar with a "Close" icon button on the right side. |
| `toolbar`    | A sticky toolbar displayed at the bottom of the modal. Available for "alert" only.           |
| `sub-title`  | A slot below the title but outside of the content card.                                      |

## Events

| Event      | Description                                                                                                                                           | Detail    |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `nnsClose` | Triggered when a closing interaction element is clicks - close button or backdrop. Note that the modal itself does not update the `visible` property. | No detail |

## Utility Classes

| CSS classes | Description                                             |
| ----------- | ------------------------------------------------------- |
| `toolbar`   | Append inlined actions after the content of a "dialog". |

## Showcase

<button on:click={() => (visible = true)} class="primary">
Open modal
</button>

<Modal {visible} on:nnsClose={() => (visible = false)} {role}>
<svelte:fragment slot="title">My title</svelte:fragment>

<p slot="sub-title">This is the subtitle</p>

<DocsLoremIpsum length={role === "alert" ? 1 : 10} />

{#if role === "dialog"}

<div class="toolbar">
    <button class="secondary">Cancel</button>
    <button class="primary">An action</button>
</div>
{/if}

<svelte:fragment slot="footer">
{#if role === "alert"}
<button class="secondary">Cancel</button>
<button class="primary">An action</button>
{/if}
</svelte:fragment>

</Modal>

<p style="padding-top: var(--padding-2x)">Role of the modal:</p>

<label>
	<input type=radio bind:group={role} name="role" value="dialog">
	Dialog
</label>

<label>
	<input type=radio bind:group={role} name="role" value="alert">
	Alert
</label>
