import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";

import AppNavigator from "./app/navigation/AppNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen2 from "./app/screens/HomeScreen2";
import InfoNavigator from "./app/navigation/InfoNavigator";
import HomeNavigator from "./app/navigation/HomeNavigator";
import LoginScreen from "./app/screens/LoginScreen";
import Login from "./app/screens/Login";
import RegisterScreen from "./app/screens/RegisterScreen";
import Onboarding from "./app/screens/Onboarding";
import SignUpScreen2 from "./app/screens/SignUpScreen2";
import { firebase } from './app/config/config';

const Stack = createStackNavigator();

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });

  return ( 
    // <NavigationContainer theme={navigationTheme}>
    //   {/* <AppNavigator /> */}
    //   {/* <HomeNavigator /> */}
    //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    //     <Stack.Screen name="Home" component={HomeScreen2} options={{ headerShown: false }} />
    //   </Stack.Navigator>
    //   {/* <RegisterScreen /> */}
    // </NavigationContainer>
    // // <HomeScreen />

    <NavigationContainer theme={navigationTheme}>
      {isLoggedIn ? <AppNavigator />
       :
        <Stack.Navigator>
          <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Sign Up" component={SignUpScreen2} options={{ headerShown: false }} />
        </Stack.Navigator>}
    </NavigationContainer>
  );
}

