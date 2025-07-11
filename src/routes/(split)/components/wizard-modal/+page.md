<script lang="ts">
    import WizardModal from "$lib/components/WizardModal.svelte";
    import type { WizardStep, WizardSteps } from "$lib/types/wizard.types";

    let visible = false;

    const steps: WizardSteps = [
            {
                name: "EnterController",
                title: "Enter a controller",
            },
            {
                name: "ConfirmController",
                title: "Confirm the controller",
            },
        ];
    
    let currentStep: WizardStep | undefined;
    let modal: WizardModal;
</script>

# Wizard Modal

A wizard that finds place within a modal to guide the user through miscellaneous options and information to execute a final action.

```javascript
<script lang="ts">
    let visible = false;

    const steps: WizardSteps = [
        {
            name: "EnterController",
            title: "Enter a controller",
        },
        {
            name: "ConfirmController",
            title: "Confirm the controller",
        },
    ];

    let currentStep: WizardStep | undefined;
    let modal: WizardModal;

    const next = () => modal.next();
</script>

<button on:click={() => (visible = true)} class="primary">
  Open modal
</button>

{#if visible}
    <WizardModal {steps} bind:currentStep bind:this={modal} onClose={() => (visible = false)}>
      {#snippet title()}My title{/snippet}

      {#if currentStep?.name === "EnterController"}
        <p>Step to enter the controller</p>

        <button class="primary" on:click={modal.next}>
            Next
        </button>
      {/if}
      {#if currentStep?.name === "ConfirmController"}
        <p>Step to confirm the controller</p>
      {/if}
    </WizardModal>
{/if}
```

## Usage

Unlike the `<Modal />` that can be toggled through a property, the developer has to wrap the wizard within a condition to render the component or not.

Likewise, it is up to developer to handle the `currentStep` and render the correct information accordingly.

## Properties

| Property      | Description                                   | Type                        | Default     |
| ------------- | --------------------------------------------- | --------------------------- | ----------- |
| `steps`       | The configuration of the steps of the wizard. | `WizardSteps`               |             |
| `currentStep` | The current step. A property to `bind`.       | `WizardStep` or `undefined` | `undefined` |
| `onClose`     | A function to call when the modal is closed.  | `function` or `undefined`   | `undefined` |

## Snippets

| Snippet name    | Description                                                |
| --------------- | ---------------------------------------------------------- |
| Default snippet | The content of the page.                                   |
| `title`         | The title displayed centered on the top part of the modal. |

## Functions

In addition to the properties, the component exposes various functions.

| Function | Description                              |
| -------- | ---------------------------------------- |
| `next`   | Go to next step of the wizad.            |
| `back`   | Go to previous step of the wizard.       |
| `set`    | Jump to a particular step of the wizard. |

## Showcase

<button on:click={() => (visible = true)} class="primary">
Open modal
</button>

{#if visible}
<WizardModal {steps} bind:currentStep bind:this={modal} onClose={() => (visible = false)}>
{#snippet title()}My title{/snippet}

      {#if currentStep?.name === "EnterController"}
        <p>Step to enter the controller</p>

        <div class="toolbar">
            <button
              class="secondary"
              on:click={() => (visible = false)}
            >Cancel</button>
            <button class="primary" on:click={modal.next}>
              Next
            </button>
        </div>
      {/if}
      {#if currentStep?.name === "ConfirmController"}
        <p>Step to confirm the controller</p>

        <div class="toolbar">
            <button
              class="secondary"
              on:click={modal.back}
            >
              Back
            </button>
        </div>
      {/if}
    </WizardModal>

{/if}
