import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NursingAmbassadors from "../screens/NursingAmbassadors";
import NAWestHerts from "../screens/NAWestHerts";
import NAPAHScreen from "../screens/NAPAHScreen";
import NAEastHertsScreen from "../screens/NAEastHertsScreen";
import InfoScreen from "../screens/InfoScreen";
import CoachesScreen from "../screens/CoachesScreen";
import DevCoachPAHScreen from "../screens/DevCoachPAHScreen";
import IRTScreen from "../screens/IRTScreen";

const Stack = createStackNavigator();

const InfoNavigator = () => (
  <Stack.Navigator initialRouteName="InfoScreen">
    <Stack.Screen name="InfoScreen" component={InfoScreen} options={{headerShown: false}}/>
    <Stack.Screen name="CoachesScreen" component={CoachesScreen} options={{headerShown: false}}/>
    <Stack.Screen name="DevCoachPAHScreen" component={DevCoachPAHScreen} options={{headerShown: false}}/>
    <Stack.Screen name="NAScreen" component={NursingAmbassadors} options={{headerShown: false}}/>
    <Stack.Screen name="NAPAH" component={NAPAHScreen} options={{headerShown: false}}/>
    <Stack.Screen name="NAWestNHS" component={NAWestHerts} options={{headerShown: false}}/>
    <Stack.Screen name="NAEastNHS" component={NAEastHertsScreen} options={{headerShown: false}}/>
    <Stack.Screen name="IRTScreen" component={IRTScreen} options={{headerShown: false}}/>
  </Stack.Navigator>
);

export default InfoNavigator;
