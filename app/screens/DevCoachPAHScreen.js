import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import colors from "../config/colors";
import Screen from "../components/Screen";


function DevCoachPAHScreen(props) {
  return (
    <>
      <ImageBackground 
        style = {styles.background}
        resizemode="contain"
        source={require("../assets/header-background.png")}>
        <View>
          <Text style={styles.header}>Princess Alexandra NHS Trust</Text>
          <Text style={styles.tagline}>Meet your Nursing Ambassador</Text>
        </View>
      </ImageBackground>
      <Text>Here is some test text!</Text>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: .20,    
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 30,
  },
  header: {
    fontSize: 30,
    paddingHorizontal: 5.5,
    paddingVertical: 9,
    marginTop: 9,
    color: colors.white,
    textAlign: "center",
  },
  tagline: {
    paddingHorizontal: 5.5,
    color: colors.white,
    textAlign: "center",
  }

})

export default DevCoachPAHScreen;