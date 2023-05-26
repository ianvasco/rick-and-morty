import React, { useCallback } from "react";
import {
  View,
  SectionList,
  SectionListRenderItemInfo,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";
import { SearchBar } from "../../components/search-bar";
import { Character } from "../../types";
import { SectionHeader } from "../../components/section-header/section-header";
import { SectionItem } from "../../components/section-item";
import { styles } from "./styles";
import { Image } from "expo-image";

type Props = {
  characters: Character[];
  favoriteCharacters: Character[];
  searchValue: string;
  searchPlaceholder: string;
  onSearchValueChange: React.Dispatch<React.SetStateAction<string>>;
  addFavorite: (character: Character) => void;
  deleteFavorite: (id: number) => void;
  handleCharacterPress: (characterID: number, isFavorite: boolean) => void;
  handleFilterPress: () => void;
};

type SectionData = {
  title: string;
  renderItem: (
    item: SectionListRenderItemInfo<Character, SectionData>
  ) => JSX.Element;
  data: Character[];
};

export const SearchLayout = ({
  characters,
  favoriteCharacters,
  searchValue,
  searchPlaceholder,
  onSearchValueChange,
  addFavorite,
  deleteFavorite,
  handleCharacterPress,
  handleFilterPress,
}: Props) => {
  const height = useHeaderHeight();

  const renderCharacter: (
    item: SectionListRenderItemInfo<Character, SectionData>,
    isFavorite?: boolean
  ) => JSX.Element = ({ item }, isFavorite) => {
    return (
      <SectionItem
        character={item}
        isFavorite={isFavorite}
        addFavorite={addFavorite}
        deleteFavorite={deleteFavorite}
        handleCharacterPress={handleCharacterPress}
      />
    );
  };

  const getSectionData: () => SectionData[] = useCallback(() => {
    let sectionData: SectionData[] = [];
    if (favoriteCharacters && favoriteCharacters.length !== 0) {
      sectionData.push({
        title: "Starred Characters",
        renderItem: (item) => renderCharacter(item, true),
        data: favoriteCharacters,
      });
    }
    if (characters && characters.length !== 0) {
      sectionData.push({
        title: "Characters",
        renderItem: renderCharacter,
        data: characters,
      });
    }

    return sectionData;
  }, [renderCharacter, characters, favoriteCharacters]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: height + 20, flex: 1 }}>
        <SearchBar
          placeholder={searchPlaceholder}
          value={searchValue}
          onSearchValueChange={onSearchValueChange}
          onFilterPress={handleFilterPress}
        />
        <SectionList
          sections={getSectionData()}
          keyExtractor={(item) => `${item.id + item.name}`}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => {
            return (
              <View style={styles.noResultsContainer}>
                <Text
                  style={styles.noResultsText}
                >{`WUBBA LUBBA DUB DUB!`}</Text>
                <Image
                  style={styles.noResultsImage}
                  source={require("../../assets/images/picklerick.png")}
                />
                <Text
                  style={styles.noResultsText}
                >{`Sorry, we could only find a Picke Rick. Please search another term.`}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeaderContainer}>
              <SectionHeader
                title={section.title}
                totalItems={section.data.length}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
