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

export const Info = styled.div``;

export const Category = styled.div`
  ${({ theme: { color, borderRadius, spacing } }) => css`
    padding: ${spacing.m} ${spacing.l};
    background-color: ${color.secondary};
    border-radius: ${borderRadius.xl};
    color: ${color.white};
    text-align: center;
  `};
`;
