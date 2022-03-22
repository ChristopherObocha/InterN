import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import HomeScreen from "./app/screens/HomeScreen";

export default function App() {
  return (
  //   <NavigationContainer theme={navigationTheme}>
  //   <AppNavigator />
  // </NavigationContainer>
  <HomeScreen />
  );
}

