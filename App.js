import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import HomeScreen from "./app/screens/HomeScreen";
import CoachesScreen from "./app/screens/CoachesScreen";
import DevCoachPAHScreen from "./app/screens/DevCoachPAHScreen";
import NAWestHerts from "./app/screens/NAWestHerts";
import NursingAmbassadors from "./app/screens/NursingAmbassadors";
import NAPAHScreen from "./app/screens/NAPAHScreen";
import NAEastHertsScreen from "./app/screens/NAEastHertsScreen";
import InfoNavigator from "./app/navigation/InfoNavigator";
import Carousel from "./app/screens/Carousel";
import FAQ from "./app/screens/FAQScreen";
import FAQScreen from "./app/screens/FAQScreen";
import SmallBookingButton from "./app/components/SmallBookingButton";
import NewsScreen from "./app/screens/NewsScreen";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  )
}

