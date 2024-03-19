import React from "react";
import { Wrapper, ImageWrapper, TextWrapper, Image, InfoWrapper, ItemList, Name, DetailWrapper, TypeWrapper,TypeName } from "./Card.styled";

type Props = {
  image: string;
  name: string;
  info: {
    weight: string;
    height: string;
    specie: string;
    skill: string;
  }
  type: string;
};

export const Card: React.FC<Props> = ({ image, name, info, type }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={`${image}`} />
      </ImageWrapper>

      <InfoWrapper>
        <TextWrapper>
          <Name>{name}</Name>
        </TextWrapper>
        <DetailWrapper>
          <ItemList>{info.height}</ItemList>
          <ItemList>{info.weight}</ItemList>
          <ItemList>{info.specie}</ItemList>
          <ItemList>{info.skill}</ItemList>
        </DetailWrapper>
      </InfoWrapper>
    
      <TypeWrapper>
      <TypeName>{type}</TypeName>
      </TypeWrapper>

    </Wrapper>
  );
};
