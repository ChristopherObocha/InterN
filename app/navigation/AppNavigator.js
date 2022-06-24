import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import InfoNavigator from "./InfoNavigator";
import HomeScreen from "../screens/HomeScreen";
import FAQScreen from "../screens/FAQScreen";
import AccountScreen from "../screens/AccountScreen";
import HomeNavigator from "./HomeNavigator";
import HomeScreen2 from "../screens/HomeScreen2";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen2}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
        headerShown: false
      }}
    />
    {/* <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
        headerShown: false
      }}
    /> */}
    <Tab.Screen
      name="Info"
      component={InfoNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bag-checked" color={color} size={size} />
        ),
        headerShown: false
      }}
    />
    <Tab.Screen
      name="FAQs"
      component={FAQScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="help" color={color} size={size} />
        ),
        headerShown: false
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
