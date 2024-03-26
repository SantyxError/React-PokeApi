import React from "react";
import { screen } from '@testing-library/react'
import { Searcher } from "../Searcher";
import { renderProvider } from "@/__tests__";

describe('Searcher component', () => {
  it("should render a searcher component"), () => {
    const text = 'patata'

    renderProvider(<Searcher text={text} />)
    const cardElement = screen.getByText("patata")

    expect(cardElement).toBeInTheDocument();
  }
})
