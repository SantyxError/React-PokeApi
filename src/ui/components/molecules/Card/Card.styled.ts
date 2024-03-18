import { Secondary } from './../../atoms/Button/Button.stories';
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
background: ${({ theme }) => theme.gradient.background};
width: 100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap: ${({ theme }) => theme.spacing.xxs};
`

export const Image = styled.img`
width:100%;

`

export const ItemList = styled.li`
list-style: none;
font-size:18px;
text-align:center;

`

export const InfoWrapper = styled.ul`
display:grid;
grid-template-rows: repeat(2,1fr);
grid-template-columns: repeat(2,1fr);
gap: ${({ theme }) => theme.spacing.xl};
background: ${({ theme }) => theme.color.whiteTooth};
padding: ${({ theme }) => theme.spacing.l};
padding-left: ${({ theme }) => theme.spacing.xl};
padding-right: ${({ theme }) => theme.spacing.xl};
border-radius: ${({ theme }) => theme.borderRadius.m};
`

export const ImageWrapper = styled.div`

`

export const Name = styled.h2`
font-size: 30px;
background: ${({ theme }) => theme.color.maroon};
padding: ${({ theme }) => theme.spacing.m};
padding-left: ${({ theme }) => theme.spacing.xl};
padding-right: ${({ theme }) => theme.spacing.xl};
border-radius: ${({ theme }) => theme.borderRadius.m};

`

export const TextWrapper = styled.div`
`
