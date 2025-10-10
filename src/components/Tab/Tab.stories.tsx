import { Meta, StoryFn } from "@storybook/react-vite";
import { Tab, TabProps } from "./Tab";

const meta: Meta<typeof Tab> = {
    title: "Components/Tab",
    component: Tab,
    tags: ["autodocs"],
    argTypes: {
        label: {
            control: "text",
            description: "Tab label",
        },
        variant: {
            control: { type: "select" },
            options: ["pill", "underline"],
            description: "Tab variant",
        },
        isSelected: {
            control: "boolean",
            description: "Is this tab active?",
        },
        badgeLabel: {
            control: "text",
            description: "Badge content (optional)",
        },
        badgeVariant: {
            control: { type: "select" },
            options: ["neutral", "positive", "negative"],
            description: "Badge variant",
        },
    },
};
export default meta;

const Template: StoryFn<TabProps> = (args: TabProps) => <Tab {...args} />;

export const playground: StoryFn<TabProps> = Template.bind({});
playground.args = {
    id: "tab-1",
    label: "Home",
    variant: "pill",
    isSelected: false,
    badgeLabel: "BadgeLabel",
    badgeVariant: "positive",
};
