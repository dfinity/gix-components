<script lang="ts">
    import ProgressSteps from "$lib/components/ProgressSteps.svelte";

    let steps = [{
        step: "1",
        text: "Connection with sale canister",
        state: "completed"
    },{
        step: "2",
        text: "Sending tokens",
        state: "completed"
    },{
        step: "3",
        text: "Confirming your participation...",
        state: "in_progress"
    },{
        step: "4",
        text: "Updating your data",
        state: "next"
    }];

    const animate = () => {
    steps = [
                steps[0], steps[1], {   
    ...steps[2],
    state: "completed"
                }, {
    ...steps[3],
    state: "in_progress"
}
            ];

        setTimeout(() => {
            steps = [
                steps[0], steps[1], steps[2], {   
    ...steps[3],
    state: "completed"
                }
            ];
        }, 2500);
    }
</script>

# Progress Steps

Display the progression of a long lasting tasks with various steps

<ProgressSteps {steps} />

<button on:click={animate} class="primary">Animate</button>
