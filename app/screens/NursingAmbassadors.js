import React from 'react';
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';

import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Screen from "../components/Screen";

import colors from "../config/colors";
import Button from "../components/Button";
import routes from "../navigation/routes";
import AppText from '../components/Text';
import NAWestHerts from './NAWestHerts';

function NursingAmbassadors({navigation}) {
  return (
    <ScrollView>
      <ImageBackground 
        style = {styles.background}
        resizemode="contain"
        source={require("../assets/header-background.png")}>
      <Screen>
        <AppText style={styles.header}>Nursing Ambassadors</AppText>
        <AppText style={styles.tagline}>Meet your  Nursing Ambassador</AppText>
        <View style={styles.headingView}>
          <AppText style={styles.headingtext}>Each acute trust has an International Nurse Ambassador. They work within the hospital and are available for information and support on a day-to-day basis.</AppText>
        </View>
      </Screen>
      </ImageBackground>
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={require('../assets/NAScreen.jpg')} />
        <AppText style={styles.text}>Select your hospital trust for more information about your Nursing Ambassador.</AppText>
      </View>
      <View style={styles.button}>
        <Button 
            title="East and North Herts NHS Trust"
            color="primary"
            onPress={() => navigation.navigate("NAEastNHS")} 
          />
          <Button 
            title="Princess Alexandria Hospital"
            color="primary"
            onPress={() => navigation.navigate("NAPAH")} 
          />
          <Button 
            title="West Hertfordshire NHS Trust"
            color="primary"
            onPress={() => navigation.navigate("NAWestNHS")} 
          />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: .20,    
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 30,
    height: 250,
  },
  button: {
    margin: 25,
  },
  container: {
    margin: 25,
    alignItems: "center",
  },
  image: {
    width: 320,
    height: 160,
    borderRadius: 16,
  },
  header: {
    fontSize: 30,
    paddingHorizontal: 5.5,
    paddingVertical: 15,
    color: colors.white,
    textAlign: "center",
  },
  headingView: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
    marginTop: 25,
  },
  tagline: {
    marginTop: -15,
    marginHorizontal: 25,
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  headingtext:{
    fontSize: 16,
    paddingBottom: 10,
    color: colors.white,
  }
})

export default NursingAmbassadors;