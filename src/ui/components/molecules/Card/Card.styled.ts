import styled, { css } from "styled-components";

export const Wrapper = styled.div`
${({ theme }) => css`
background:${theme.gradient.background};
gap:${theme.spacing.l};
padding: ${theme.spacing.l};
`
  }
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100%;
`

export const Image = styled.img`
width:100%;
`

export const ItemList = styled.li`
list-style: none;
font-size:18px;
text-align:center;
`

export const DetailWrapper = styled.ul`
display:grid;
grid-template-rows: repeat(2,1fr);
grid-template-columns: repeat(2,1fr);
box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.2);

${({ theme }) => css`
gap: ${theme.spacing.xl};
background: ${theme.color.whiteTooth};
padding: ${theme.spacing.l} ${theme.spacing.xl};
border-radius:  0 ${theme.borderRadius.xl} ${theme.borderRadius.xl} ${theme.borderRadius.xl};
color: ${theme.color.maroon};
`
  }
`

export const ImageWrapper = styled.div`

`

export const Name = styled.h2`
font-size: 18px;
box-shadow: 3px 3px 0.5px rgba(0, 0, 0, 0.4);
font-weight:bold;
text-transform:uppercase;

${({ theme }) => css`
background: ${theme.color.maroon};
padding: ${theme.spacing.m} ${theme.spacing.xl};
border-radius: ${theme.borderRadius.xl} ${theme.borderRadius.xl} ${theme.borderRadius.xs} 0;
color: ${theme.color.whiteTooth};
`} 
`

export const TextWrapper = styled.div`
`

export const InfoWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
`

export const TypeWrapper = styled.div`
${({ theme }) => css`
background: ${theme.color.maroon};
padding: ${theme.spacing.m} ${theme.spacing.xxxl};
border-radius: ${theme.borderRadius.xl};
color: ${theme.color.whiteTooth};
`} 

box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.4);
`

export const TypeName = styled.h2`
font-size: 18px;
font-weight:bold;
`