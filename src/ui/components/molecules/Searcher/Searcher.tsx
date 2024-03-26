import React from "react";
import { FormWrapper, SearchButton, Searcher as SearcherComponent, TextWrapper } from "./Searcher.styled";

type Props = {
  text: string;
};

export const Searcher: React.FC<Props> = ({ text})=> {
  return (
    <SearcherComponent>
      <FormWrapper>
        <TextWrapper
          type="text"
          id="search"
          value= {text}
          placeholder="Escribe tu búsqueda aquí"
        />
        <SearchButton type="submit">Buscar</SearchButton>
      </FormWrapper>
    </SearcherComponent>
  );
};
