import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "molecules/Card",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Playground: Story = {
  args: {
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
    name: "Psyduck",
    category: "Category",
  },
};
