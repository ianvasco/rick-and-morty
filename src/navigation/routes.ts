export enum NavigationScreens {
  RootStack = "RootStack",
  SearchScreen = "SearchScreen",
  FilterScreen = "FilterScreen",
  CharacterDetailScreen = "CharacterDetailScreen",
}

export type RootStackPropList = {
  [NavigationScreens.SearchScreen]: undefined;
  [NavigationScreens.FilterScreen]: undefined;
  [NavigationScreens.CharacterDetailScreen]: { id: number };
};
