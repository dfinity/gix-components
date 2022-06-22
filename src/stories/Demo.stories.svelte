<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Demo from "../lib/Demo.svelte";
</script>

<Meta
  title="GIX/Demo"
  component={Demo}
  argTypes={{
    color: { control: "color" },
  }}
/>

<Template let:args>
  <Demo {...args} on:click={args.onClick} />
</Template>

<Story
  name="Red"
  args={{
    color: "red",
  }}
/>

<Story
  name="Blue"
  args={{
    color: "blue",
  }}
/>
