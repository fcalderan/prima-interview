import { Meta, StoryFn } from "@storybook/react";
import { Tab } from "../Tab";
import { Tablist, TablistProps } from "./Tablist";

const meta: Meta<typeof Tablist> = {
  title: "Components/Tablist",
  component: Tablist,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["pill", "underline"],
      description: "Tab variant",
    },
  },
};
export default meta;

const Template: StoryFn<React.ComponentProps<typeof Tablist>> = (args) => (
  <Tablist {...args}>
    <Tab
      id="tab1"
      label="Gordon Clark"
      badgeLabel="Cardiff Electric"
      badgeVariant="positive"
    />
    <Tab id="tab2" label="Joe McMillan" isSelected={true} />

    {/* <!-- Variants are overridden at the Tablist level, 
        so the variant prop can be omitted in the Tab component --> */}
    <Tab id="tab3" label="Cameron Howe" variant="pill" />
    <Tab id="tab4" label="John Bosworth" variant="underline" />
    <Tab id="tab5" label="Nathan Cardiff" />
  </Tablist>
);

export const playground: StoryFn<TablistProps> = Template.bind({});
playground.args = {
  variant: "pill",
};
