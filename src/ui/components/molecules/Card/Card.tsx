import React from "react";
import {
  Wrapper,
  Image,
  InfoWrapper,
  Category,
  Name,
  Features,
} from "./Card.styled";

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
        <div>
          <Name>{name}</Name>
          <Features>
            <li>Weigth</li>
            <li>Specie</li>
            <li>Height</li>
            <li>Skill</li>
          </Features>
        </div>

        <Category>{category}</Category>
      </InfoWrapper>
    </Wrapper>
  );
};
