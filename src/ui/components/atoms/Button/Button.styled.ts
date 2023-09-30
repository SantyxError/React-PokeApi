import styled, { css } from "styled-components";

const COLOR = {
  primary: css`
  background-color: blue;
  `,
  secondary: css`
  background-color: red;
  `
}

export const Button = styled.button<{ variant: 'primary' | 'secondary' }>`
border-radius:10px;
${({ variant }) => variant && COLOR[variant]}
`