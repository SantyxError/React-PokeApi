import React from "react"
import { screen } from '@testing-library/react';
import { Card } from "../Card"
import { renderProvider } from "@/__tests__";


describe("Card component", () => {
  it("should render a card", () => {
    const image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png"
    const name = "Psyduck"
    const info = {
      weight: "5Kg",
      height: "120cm",
      specie: "pato",
      skill: "Confusión"
    }
    const type = "Psíquico/Agua"

    renderProvider(<Card image={image} name={name} info={info} type={type} />)
    
    const cardElement = screen.getByText("Psyduck");

    expect(cardElement).toBeInTheDocument();

  })
})
