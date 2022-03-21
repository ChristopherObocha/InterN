import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from "../config/colors";
import CarouselComponent from "../components/CarouselComponent";
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';


function WelcomeScreen(props) {
  return (
    <>
      <ImageBackground 
        style = {styles.background}
        resizemode="contain"
        source={require("../assets/header-background.png")}>
        <View>
          <Text style={styles.header}>Hertfordshire and West Essex ICS</Text>
        </View>
      </ImageBackground>
      <View style={styles.carousel}>
        <CarouselComponent />
      </View>
      <View>
        <Text>Past Events</Text>
      </View>
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
    padding: 6.5,
    color: colors.white,
  },
  carousel: {
    flex: 1,
  }
})

export default WelcomeScreen;