import styled, { css } from "styled-components";

export const Searcher = styled.div`

`

export const FormWrapper = styled.form`
display: flex;
justify-content:center;
align-items:center;

${({ theme }) => css`
padding: ${theme.spacing.s} ${theme.spacing.m};
gap:${theme.spacing.l};
`
  }
`

export const TextWrapper = styled.input`
text-align:center;
box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.2);

${({ theme }) => css`
padding: ${theme.spacing.s} ${theme.spacing.m};
border-radius: ${theme.borderRadius.xl} ${theme.borderRadius.xl};
border-color: ${theme.color.white};
background:${theme.color.white};
gap:${theme.spacing.l};
`
  }
`

export const SearchButton = styled.button`
box-shadow: 3px 3px 1px rgba(0, 0, 0, 0.2);

${({ theme }) => css`
padding: ${theme.spacing.s} ${theme.spacing.m};
gap:${theme.spacing.l};
border-radius: ${theme.borderRadius.xl} ${theme.borderRadius.xl};
border-color: ${theme.color.primary};
background:${theme.color.primary};
color: ${theme.color.white};
`
  }
`

