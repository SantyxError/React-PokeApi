import type { Meta, StoryObj } from '@storybook/react';
import { Searcher } from './Searcher';

const meta: Meta<typeof Searcher> = {
  component: Searcher,
  title: "molecules/Searcher",
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Searcher>;

export const Playground: Story = {
  args: {
    text: "patata"
  }
};