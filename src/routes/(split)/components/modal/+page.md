<script lang="ts">
    import Modal from "$lib/components/Modal.svelte";
    import DocsLoremIpsum from "$docs/components/DocsLoremIpsum.svelte";

    let visible = false;
    let role: "dialog" | "alert" = "dialog";
</script>

# Modal

A Modal is a dialog that appears on top of the app's content and must be dismissed by the app before interaction can resume.
It is useful as a select component when there are a lot of options to choose from,
or when filtering items in a list, as well as many other use cases.

```javascript
<script lang="ts">
    let visible = false;
</script>

<button on:click={() => (visible = true)}>
  Open modal
</button>

<Modal {visible} onClose={() => (visible = false)}>
  {#snippet title()}My title{/snippet}

  <p>My content</p>
</Modal>
```

## Properties

| Property               | Description                                                                                                                                           | Type                    | Default     |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ----------- |
| `visible`              | Display or hide the modal.                                                                                                                            | `boolean`               | `false`     |
| `role`                 | The modal is either a dialog meant for getting work done or an alert that requires immediate attention.                                               | `dialog` or `alert`     | `dialog`    |
| `testId`               | Add a `data-tid` attribute to the DOM, useful for test purpose.                                                                                       | `string` or `undefined` | `undefined` |
| `disablePointerEvents` | Disable interactive elements - close actions - of the modal.                                                                                          | `boolean`               | `false`     |
| `onClose`              | Triggered when a closing interaction element is clicks - close button or backdrop. Note that the modal itself does not update the `visible` property. | `() => void`            | `undefined` |
| `onIntroEnd`           | Callback triggered when the intro transition ends.                                                                                                    | `() => void`            | `undefined` |
| `onClick`              | Callback triggered when the modal is clicked.                                                                                                         | `() => void`            | `undefined` |

## Snippets

| Snippet name    | Description                                                                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Default snippet | The content of the modal.                                                                                                                                                         |
| `title`         | The title of the modal. Displayed in a toolbar with a "Close" icon button on the right side.                                                                                      |
| `header-left`   | Position content on the left side of the header title, such as additional buttons.                                                                                                |
| `header-right`  | Position content on the right side of the header title, such as additional buttons, or replace the close button with a custom button by setting `disablePointerEvents` to `true`. |
| `toolbar`       | A sticky toolbar displayed at the bottom of the modal. Available for "alert" only.                                                                                                |
| `sub-title`     | A snippet below the title but outside of the content card.                                                                                                                        |

## Utility Classes

| CSS classes | Description                                             |
| ----------- | ------------------------------------------------------- |
| `toolbar`   | Append inlined actions after the content of a "dialog". |

## Showcase

<button on:click={() => (visible = true)} class="primary">
Open modal
</button>

<Modal {visible} onClose={() => (visible = false)} {role}>
{#snippet title()}My title{/snippet}

{#snippet subTitle()}<p >This is the subtitle</p>{/snippet}

<DocsLoremIpsum length={role === "alert" ? 1 : 10} />

{#if role === "dialog"}

<div class="toolbar">
    <button class="secondary">Cancel</button>
    <button class="primary">An action</button>
</div>
{/if}

{#snippet footer()}
{#if role === "alert"}
<button class="secondary">Cancel</button>
<button class="primary">An action</button>
{/if}
{/snippet}

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
