import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import InfoNavigator from "./InfoNavigator";
import NewsScreen from "../screens/NewsScreen";
import HomeScreen from "../screens/HomeScreen";
import FAQScreen from "../screens/FAQScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
        headerShown: false
      }}
    />
    <Tab.Screen
      name="News"
      component={NewsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="email-newsletter" color={color} size={size} />
        ),
        headerShown: false
      }}
    />
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
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
