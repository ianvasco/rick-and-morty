import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
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
    >
      <RootStackNavigator.Screen
        name={NavigationScreens.SearchScreen}
        options={{
          title: "Rick and Morty list",
          headerLargeTitle: true,
          headerLargeTitleStyle: {
            fontSize: 24,
            fontWeight: "700",
          },
        }}
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
