import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import Onboarding from "../screens/Onboarding";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator initialRouteName="Onboarding">
    <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}}/>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
  </Stack.Navigator>
);

export default HomeNavigator;