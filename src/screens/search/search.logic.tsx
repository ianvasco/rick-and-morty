import React from "react";
import { SearchLayout } from "./search.layout";
import { useCharacters } from "../../services/hooks/use-characters";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationScreens, RootStackPropList } from "../../navigation";

type SearchScreenNavigationProps = NativeStackScreenProps<
  RootStackPropList,
  NavigationScreens.SearchScreen
>;

export const SearchScreen = (props: SearchScreenNavigationProps) => {
  const [searchValue, setSearchValue] = React.useState("");
  const { favorites, characters, addFavorite, deleteFavorite } =
    useCharacters();

  const handleCharacterPress = (characterID: number, isFavorite: boolean) => {
    props.navigation.navigate(NavigationScreens.CharacterDetailScreen, {
      id: characterID,
      isFavorite,
    });
  };

  const handleFilterPress = () => {
    props.navigation.navigate(NavigationScreens.FilterScreen);
  };

  return (
    <SearchLayout
      favoriteCharacters={favorites}
      characters={characters}
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
