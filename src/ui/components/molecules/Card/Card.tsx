import React from "react";
import { Wrapper, ImageWrapper, TextWrapper, Image, InfoWrapper,ItemList, Name } from "./Card.styled";

type Props = {
  image: string;
  name: string;
  info: {
    weight: string;
    height: string;
    specie: string;
    skill: string;
  }
};

export const Card: React.FC<Props> = ({ image, name, info }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={`${image}`} />
      </ImageWrapper>
      <TextWrapper>
        <Name>{name}</Name>
      </TextWrapper>
      <InfoWrapper>
          <ItemList>{info.height}</ItemList>
          <ItemList>{info.weight}</ItemList>
          <ItemList>{info.specie}</ItemList>
          <ItemList>{info.skill}</ItemList>
      </InfoWrapper>
    </Wrapper>
  );
};
