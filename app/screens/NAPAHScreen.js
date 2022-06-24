import React from 'react';
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';

import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import * as Linking from 'expo-linking';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Screen from "../components/Screen";

import colors from "../config/colors";
import Button from "../components/Button";
import routes from "../navigation/routes";
import AppText from '../components/Text';

function NAPAHScreen(navigation) {
  return (
  <ScrollView style={styles.screenview}>
    <ImageBackground 
      style = {styles.background}
      resizemode="contain"
      source={require("../assets/header-background.png")}>
      <View>
        <AppText style={styles.header}>Princess Alexandria Hospital NHS Trust</AppText>
        <AppText style={styles.tagline}>Meet your Nursing Ambassador</AppText>
      </View>
    </ImageBackground>
  <View style={styles.container}>
    <Image 
      style={styles.image}
      source={require("../assets/uzo.jpg")} />
    <AppText style={styles.heading}>Uzoma Onouha (Uzo)</AppText>
    <AppText style={styles.text}>Uzo is the Nursing Ambassador for East and North Hertfordshire NHS Trust.</AppText>
  </View>
  <View style={styles.container}>
    <AppText style={styles.heading}>Profile</AppText>
    <AppText style={styles.text}>I relocated to the UK since April 2019. I currently work as a discharge support nurse at a band 6.</AppText>
    <AppText style={styles.text}>I have over 5 years' experience in total as a registered nurse and midwife. I come from the East of Nigeria and I practiced nursing for a few years back home.</AppText>
    <AppText style={styles.text}>My dream has always been to practice abroad. So, I started making enquires on how to go about it and so far since my relocation, I feel fulfilled that I had made the best choice and my interest is to advocate for the expansion of international recruitment for nurses globally.</AppText>
    <AppText>I look forward to joining the team and contributing towards workforce recruitment and development in a positive way.</AppText>
    <AppText>Hobbies:  Going on holidays</AppText>
  </View>  
  <View style={styles.container}>
    <Button 
      title="email"
      color="primary"
      style={styles.button}
      onPress={() => Linking.openURL("mailto:uzoma.onuoha@nhs.net")} 
    />
    <Button 
      title="phone"
      color="primary"
      onPress={() => Linking.openURL("tel:07394402038")} 
    />
  </View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {   
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 30,
    height: 225,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 15, 
  },
  header: {
    fontSize: 30,
    paddingHorizontal: 5.5,
    paddingVertical: 9,
    marginTop: 20,
    color: colors.white,
    textAlign: "center",
  },
  heading: {
    fontSize: 23,
    paddingHorizontal: 5.5,
    paddingVertical: 2,
    marginTop: 3,
    color: colors.black,
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    padding: 20,
    marginHorizontal: 15,
  },
  tagline: {
    paddingHorizontal: 5.5,
    color: colors.white,
    textAlign: "center",
  },
  text:{
    fontSize: 16,
    paddingBottom: 10,
  }

})

export default NAPAHScreen;