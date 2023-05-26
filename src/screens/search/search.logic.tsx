import React from "react";
import { SearchLayout } from "./search.layout";
import { useCharacters } from "../../services/hooks/use-characters";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationScreens, RootStackPropList } from "../../navigation";
import { Loading } from "../../components/loading";
import { Character } from "../../types";

type SearchScreenNavigationProps = NativeStackScreenProps<
  RootStackPropList,
  NavigationScreens.SearchScreen
>;

export const SearchScreen = (props: SearchScreenNavigationProps) => {
  const [searchValue, setSearchValue] = React.useState("");
  const { favorites, characters, addFavorite, deleteFavorite, loading } =
    useCharacters();

  const filterByName = React.useCallback(
    (character: Character) => character.name.includes(searchValue),
    [searchValue]
  );

  const filteredFavorites = favorites.filter(filterByName);
  const filteredCharacters = characters.filter(filterByName);

  const handleCharacterPress = (characterID: number, isFavorite: boolean) => {
    props.navigation.navigate(NavigationScreens.CharacterDetailScreen, {
      id: characterID,
      isFavorite,
    });
  };

  const handleFilterPress = () => {
    props.navigation.navigate(NavigationScreens.FilterScreen);
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
    />
  );
};
