import React from 'react';
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';

import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

import * as Linking from 'expo-linking';


import colors from "../config/colors";
import Button from "../components/Button";
import routes from "../navigation/routes";
import AppText from '../components/Text';

function NAEastHertsScreen(navigation) {
  return (
  <ScrollView style={styles.screenview}>
    <ImageBackground 
      style = {styles.background}
      resizemode="contain"
      source={require("../assets/header-background.png")}>
      <View>
        <AppText style={styles.header}>East and North Hertfordshire NHS Trust</AppText>
        <AppText style={styles.tagline}>Meet your Nursing Ambassador</AppText>
      </View>
    </ImageBackground>
  <View style={styles.container}>
    <Image 
      style={styles.image}
      source={require("../assets/jaimol.png")} />
    <AppText style={styles.heading}>Jaimol Anilkumar</AppText>
    <AppText style={styles.text}>Jaimol is the Nursing Ambassador for East and North Hertfordshire NHS Trust.</AppText>
  </View>
  <View style={styles.container}>
    <AppText style={styles.heading}>Profile</AppText>
    <AppText style={styles.text}>I am a registered nurse, trained in India, worked in 2 other countries and arrived in UK in 2001, a time when the overseas nurse’s recruitment actively started in the NHS. I am experienced in various clinical specialities, completed mentorship training in University of Hertfordshire and attended leadership courses with various establishments in the UK.</AppText>
    <AppText style={styles.text}>I faced some challenges during the first year of transition, but my qualities of being easily adaptable and fast learning nature, I was able to handle them well and did not have any lasting impact on my career or life.</AppText>
    <AppText style={styles.text}>Currently, I am working as a clinical practice nurse in the acute service team, while supporting the senior team with managerial tasks that I learned as I progressed. I am known to have excellent leadership qualities, approachable and someone who goes above and beyond to help others.</AppText>
    <AppText>I am interested in supporting our international nurses with their transition process into the role and into the community, and I believe this would empower them as they progress in their career.</AppText>
    <AppText style={styles.text}>I live with my husband and two teenage sons. </AppText>
    <AppText style={styles.text}>Hobbies: Being outdoors and watching TV</AppText>
  </View>  
  <View style={styles.container}>
    <Button 
      title="email"
      color="primary"
      style={styles.button}
      onPress={() => Linking.openURL("mailto:jaimol.anilkumar@nhs.net")}
    />
    <Button 
      title="phone"
      color="primary"

      onPress={() => Linking.openURL("tel:07812785184")} 
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

export default NAEastHertsScreen;