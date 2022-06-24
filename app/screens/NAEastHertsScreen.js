import React from 'react';
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';

import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

import * as Linking from 'expo-linking';


import colors from "../config/colors";
import Button from "../components/Button";
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
      source={require("../assets/mary.jpg")} />
    <AppText style={styles.heading}>Mary Oyakhirome</AppText>
    <AppText style={styles.text}>Mary is the Nursing Ambassador for East and North Hertfordshire NHS Trust.</AppText>
  </View>
  <View style={styles.container}>
    <AppText style={styles.heading}>Profile</AppText>
    <AppText style={styles.text}>My experience so far in the trust has been interesting.  I started my nursing journey in 2011 in my 
    home country, Nigeria and have been opportune to work in different health settings.
    </AppText>
    <AppText style={styles.text}>My quest to improve myself and my practice made me pursue my dream of relocating to the UK and 
    be employed as a staff nurse in Lister Hospital.
    </AppText>
    <AppText style={styles.text}>Since I resumed the role, I have learned (and still learning) a lot.  Also, I’m thankful to all who have taught and assisted me to adapt to work and living in Stevenage.
    </AppText>
    <AppText>Hobbies: reading, exploring , nature, photography, arts, listening to music,going out and meeting new peolple.</AppText>
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

      onPress={() => Linking.openURL("tel:07444144815 ")} 
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