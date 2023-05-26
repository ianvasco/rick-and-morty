import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ReactElement } from "react";
import { NavigationScreens, RootStackPropList } from "./routes";
import { CharacterDetailsScreen } from "../screens/character-detail";
import { SearchScreen } from "../screens/search";
import { FiltersScreen } from "../screens/filters";
import { NavigationBackButton } from "../components/navigation-back-button";

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
          headerShadowVisible: false,
        }}
        component={SearchScreen}
      />
      <RootStackNavigator.Screen
        name={NavigationScreens.CharacterDetailScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <NavigationBackButton onPress={navigation.goBack} />
          ),
        })}
        component={CharacterDetailsScreen}
      />
      <RootStackNavigator.Screen
        name={NavigationScreens.FilterScreen}
        options={({ navigation }) => ({
          headerTitle: "Filters",
          headerLeft: () => (
            <NavigationBackButton onPress={navigation.goBack} />
          ),
          presentation: "modal",
        })}
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
