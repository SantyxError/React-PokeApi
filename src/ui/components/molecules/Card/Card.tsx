import React from "react";
import { Wrapper, ImageWrapper, TextWrapper } from "./Card.styled";

type Props = {
  image: string;
  name: string;
};

export const Card: React.FC<Props> = ({ image, name }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={`${image}`} />
      </ImageWrapper>
      <TextWrapper>
        <p>{name}</p>
      </TextWrapper>
    </Wrapper>
  );
};
