import { Meta, StoryFn } from "@storybook/react-vite";
import { Badge, BadgeProps } from "./Badge";

const meta: Meta<typeof Badge> = {
    title: "Components/Badge",
    component: Badge,
    tags: ["autodocs"],
    argTypes: {
        label: {
            control: "text",
            description: "Tab label",
        },
        variant: {
            control: { type: "select" },
            options: ["neutral", "positive", "negative"],
            description: "Tab variant",
        },
    },
};
export default meta;

const Template: StoryFn<BadgeProps> = (args: BadgeProps) => <Badge {...args} />;

export const playground: StoryFn<BadgeProps> = Template.bind({});
playground.args = {
    label: "Home",
    variant: "neutral",
};
