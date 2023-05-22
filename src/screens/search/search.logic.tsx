import React from "react";
import { SearchLayout } from "./search.layout";
import { Character } from "../../types";
import { useCharacters } from "../../services/hooks/use-search-characters";

export const SearchScreen = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const { favorites, characters, addFavorite, deleteFavorite } =
    useCharacters();

  return (
    <SearchLayout
      favoriteCharacters={favorites}
      characters={characters}
      searchValue={searchValue}
      onSearchValueChange={setSearchValue}
      searchPlaceholder="Search or filter results"
      addFavorite={addFavorite}
      deleteFavorite={deleteFavorite}
    />
  );
};
