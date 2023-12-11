import styled, { css } from "styled-components";

const COLOR = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
  `,
};

export const Button = styled.button<{ variant: "primary" | "secondary" }>`
  border-radius: 10px;
  ${({ variant }) => variant && COLOR[variant]}
`;
