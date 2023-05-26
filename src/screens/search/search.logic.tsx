import React from "react";
import { SearchLayout } from "./search.layout";
import { useCharacters } from "../../services/hooks/use-characters";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationScreens, RootStackPropList } from "../../navigation";
import { Loading } from "../../components/loading";
import { Character } from "../../types";
import { Sort } from "./types";
import { orderBy } from "lodash";

type SearchScreenNavigationProps = NativeStackScreenProps<
  RootStackPropList,
  NavigationScreens.SearchScreen
>;

export const SearchScreen = (props: SearchScreenNavigationProps) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [orderByValue, setOrderByValue] = React.useState(Sort.Default);
  const { favorites, characters, addFavorite, deleteFavorite, loading } =
    useCharacters();

  const filterByName = React.useCallback(
    (character: Character) => character.name.includes(searchValue),
    [searchValue]
  );

  const orderByCriteria = React.useCallback(
    (characters: Character[]) => {
      if (orderByValue === Sort.Default)
        return orderBy(characters, "id", "asc");
      return orderBy(
        characters,
        "name",
        orderByValue === Sort.Asc ? "asc" : "desc"
      );
    },
    [orderByValue]
  );

  const filteredFavorites = orderByCriteria(favorites.filter(filterByName));
  const filteredCharacters = orderByCriteria(characters.filter(filterByName));

  const handleCharacterPress = (characterID: number, isFavorite: boolean) => {
    props.navigation.navigate(NavigationScreens.CharacterDetailScreen, {
      id: characterID,
      isFavorite,
    });
  };

  const handleFilterPress = () => {
    props.navigation.navigate(NavigationScreens.FilterScreen);
  };

  const handleSortPress = () => {
    if (orderByValue === Sort.Default) {
      setOrderByValue(Sort.Asc);
    } else if (orderByValue === Sort.Asc) {
      setOrderByValue(Sort.Desc);
    } else {
      setOrderByValue(Sort.Default);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <SearchLayout
      favoriteCharacters={filteredFavorites}
      characters={filteredCharacters}
      searchValue={searchValue}
      onSearchValueChange={setSearchValue}
      searchPlaceholder="Search or filter results"
      addFavorite={addFavorite}
      deleteFavorite={deleteFavorite}
      handleCharacterPress={handleCharacterPress}
      handleFilterPress={handleFilterPress}
      orderBy={orderByValue}
      handleSortPress={handleSortPress}
    />
  );
};
