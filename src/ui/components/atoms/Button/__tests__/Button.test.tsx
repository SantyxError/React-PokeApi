import React from "react"
import { render, screen } from '@testing-library/react';
import { Button } from "../Button"

describe("button component", () => {
  it("should render a button", () => {
    const variant = "primary"
    const children = "text primary"

    render(<Button variant={variant}>{children}</Button>)

    const buttonElement = screen.getByText("text primary");

    expect(buttonElement).toBeInTheDocument();
  })

  it("should render a button with its primary variant", () => {
    const variant = "primary"
    const children = "text primary"

    render(<Button variant={variant}>{children}</Button>)

    const buttonElement = screen.getByText("text primary");

    expect(buttonElement).toHaveAttribute("variant", "primary")
  })

  it("should render a button with its secondary variant", () => {
    const variant = "secondary"
    const children = "text secondary"

    render(<Button variant={variant}>{children}</Button>)

    const buttonElement = screen.getByText("text secondary");

    expect(buttonElement).toHaveAttribute("variant", "secondary")
  })
})
