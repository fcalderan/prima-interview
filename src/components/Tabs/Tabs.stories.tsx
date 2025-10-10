import { Meta, StoryFn } from "@storybook/react";
import { Tab } from "../Tab";
import { Tabs, TabsProps } from ".";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["pill", "underline"],
      description: "Tab variant",
    },
  },
};
export default meta;

const Template: StoryFn<React.ComponentProps<typeof Tabs>> = (args: Tabs) => (
  <Tabs {...args}>
    <Tab
      id="tab1"
      label="Gordon Clark"
      badgeLabel="Cardiff Electric"
      badgeVariant="positive"
      isSelected={true}
    />
    <Tab id="tab2" label="Joe McMillan" />
    <Tab id="tab3" label="Cameron Howe" variant="pill" />
    <Tab id="tab4" label="John Bosworth" variant="underline" />
  </Tabs>
);

export const playground: StoryFn<TabsProps> = Template.bind({});
playground.args = {
  variant: "pill",
};
