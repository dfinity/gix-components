<script lang="ts">
    import ProgressSteps from "$lib/components/ProgressSteps.svelte";

  let steps = [
    {
      step: "1",
      text: "Connection with sale canister",
      state: "completed",
    },
    {
      step: "2",
      text: "Sending tokens",
      state: "in_progress",
    },
    {
      step: "3",
      text: "Confirming your participation...",
      state: "next",
    },
    {
      step: "4",
      text: "Updating your data",
      state: "next",
    },
  ];

  const animate = () => {
    steps = [
      steps[0],
      {
        ...steps[1],
        state: "completed",
      },
      {
        ...steps[2],
        state: "in_progress",
      },
      steps[3],
    ];

    setTimeout(() => {
      steps = [
        steps[0],
        steps[1],
        {
          ...steps[2],
          state: "completed",
        },
        {
          ...steps[3],
          state: "in_progress",
        },
      ];

      setTimeout(() => {
        steps = [
          steps[0],
          steps[1],
          steps[2],
          {
            ...steps[3],
            state: "completed",
          },
        ];
      }, 1000);
    }, 1000);
  };
</script>

# Progress Steps

Display the progression of a long-lasting task with various steps

```html
<ProgressSteps {steps} />
```

## Properties

| Property | Description                                                                     | Type           | Default |
| -------- | ------------------------------------------------------------------------------- | -------------- | ------- |
| `steps`  | The steps to display the progress. The array must contain at least one element. | `ProgressStep` |         |

### Interface

A `Step` requires following information:

| Property | Description                                   | Type                                   | Default |
| -------- | --------------------------------------------- | -------------------------------------- | ------- |
| `step`   | A key.                                        | `string`                               |         |
| `text`   | The related text to display next to the step. | `string`                               |         |
| `state`  | The status of the step.                       | `next` or `in_progress` or `completed` |         |

### Note

The component itself is not animated. Updating the `steps` property re-render the UI accordingly and per extension can be use to display a progression.

## Showcase

<div data-tid="showcase">
    <ProgressSteps {steps} />
</div>

<button on:click={animate} class="primary" style="margin-top: var(--padding-2x)" data-tid="progress-steps-test">Test</button>
