import React from "react"
import {  screen } from '@testing-library/react';
import { Button } from "../Button"
import { renderProvider } from "@/__tests__";

describe("button component", () => {
  it("should render a button", () => {
    const variant = "primary"
    const children = "text primary"

    renderProvider(<Button variant={variant}  onClick={jest.fn()}>{children}</Button>)

    const buttonElement = screen.getByText("text primary");

    expect(buttonElement).toBeInTheDocument();
  })

  it("should render a button with its primary variant", () => {
    const variant = "primary"
    const children = "text primary"

    renderProvider(<Button variant={variant} onClick={jest.fn()}>{children}</Button>)

    const buttonElement = screen.getByText("text primary");

    expect(buttonElement).toHaveAttribute("variant", "primary")
  })

  it("should render a button with its secondary variant", () => {
    const variant = "secondary"
    const children = "text secondary"

    renderProvider(<Button variant={variant} onClick={jest.fn()}>{children}</Button>)

    const buttonElement = screen.getByText("text secondary");

    expect(buttonElement).toHaveAttribute("variant", "secondary")
  })

  it("should render a button with its terciary variant", () => {
    const variant = "terciary"
    const children = "text terciary"

    renderProvider(<Button variant={variant} onClick={jest.fn()}>{children}</Button>)

    const buttonElement = screen.getByText("text terciary");

    expect(buttonElement).toHaveAttribute("variant", "terciary")
  })
})
