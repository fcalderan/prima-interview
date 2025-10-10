import { Meta, StoryFn } from "@storybook/react";
import { Tabpanel, TabpanelProps } from "./";

const meta: Meta<typeof Tabpanel> = {
  title: "Components/Tabpanel",
  component: Tabpanel,
};
export default meta;

const Template: StoryFn<React.ComponentProps<typeof Tabpanel>> = () => (
  <Tabpanel id="tab1">
    <>
      <h2>Not the other way around</h2>
      <blockquote>
        <p>
          After IBM, I went across the country just looking for answers. I'd
          read your article, and I couldn't stop thinking about it. Open
          architecture, the idea of it. As a way of life. It kept me up at
          night. It made me that kid again, and I tracked you down to COMDEX and
          watched as they chased you, too, and your beautiful machine right off
          the ledge. And you, when I saw you, everything about you threatens
          people. I thought that maybe we could do this precisely because we're
          all unreasonable people and progress depends on our changing the world
          to fit us. Not the other way around. I want to believe that. I must
          believe that. Tomorrow, I will show up at 7:00 A.M. and I will keep
          going. You don't have to join me, but something tells me you both need
          this just as much as I do.
          <cite>Joe McMillan - H&CF S01E02</cite>
        </p>
      </blockquote>
    </>
  </Tabpanel>
);

export const playground: StoryFn<TabpanelProps> = Template.bind({});
