import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme: { gradient, spacing } }) => css`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    padding: ${spacing.l};
    background: ${gradient.background};
  `};
`;

export const Image = styled.img`
  width: 100%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h3`
  ${({ theme: { color, borderRadius, spacing } }) => css`
    width: fit-content;
    padding: ${spacing.s} ${spacing.l};
    background-color: ${color.secondary};
    border-top-left-radius: ${borderRadius.l};
    border-top-right-radius: ${borderRadius.l};
    color: ${color.white};
  `};
`;

export const Features = styled.ul`
  ${({ theme: { color, borderRadius, spacing } }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: ${spacing.l};
    text-align: center;
    padding: ${spacing.xl};
    background-color: ${color.wheat};
    border-radius: 0 ${borderRadius.xl} ${borderRadius.xl} ${borderRadius.xl};
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  `};
`;

export const Category = styled.span`
  ${({ theme: { color, borderRadius, spacing } }) => css`
    padding: ${spacing.m} ${spacing.l};
    margin-top: ${spacing.l};
    background-color: ${color.secondary};
    border-radius: ${borderRadius.xl};
    color: ${color.white};
    text-align: center;
  `};
`;
