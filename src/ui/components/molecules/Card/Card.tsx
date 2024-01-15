import React from "react";
import { Wrapper, Image, InfoWrapper, Info, Category } from "./Card.styled";

type Props = {
  image: string;
  name: string;
  category: string;
};

export const Card: React.FC<Props> = ({ image, name, category }) => {
  return (
    <Wrapper>
      <Image src={`${image}`} alt={name} />

      <InfoWrapper>
        <Info>
          <h3>{name}</h3>
          <div>feature</div>
        </Info>

        <Category>{category}</Category>
      </InfoWrapper>
    </Wrapper>
  );
};
