import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ReactElement } from "react";
import { NavigationScreens, RootStackPropList } from "./routes";
import { CharacterDetailsScreen } from "../screens/character-detail";
import { SearchScreen } from "../screens/search";
import { FiltersScreen } from "../screens/filters";

const RootStackNavigator = createNativeStackNavigator<RootStackPropList>();
const RootStack = () => {
  return (
    <RootStackNavigator.Navigator
      initialRouteName={NavigationScreens.SearchScreen}
      screenOptions={{ headerShown: false }}
    >
      <RootStackNavigator.Screen
        name={NavigationScreens.SearchScreen}
        component={SearchScreen}
      ></RootStackNavigator.Screen>
      <RootStackNavigator.Screen
        name={NavigationScreens.CharacterDetailScreen}
        component={CharacterDetailsScreen}
      ></RootStackNavigator.Screen>
      <RootStackNavigator.Screen
        name={NavigationScreens.FilterScreen}
        component={FiltersScreen}
      ></RootStackNavigator.Screen>
    </RootStackNavigator.Navigator>
  );
};

export const Navigation = (): ReactElement => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
