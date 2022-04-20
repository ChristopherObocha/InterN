import React from 'react';
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';

import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Screen from "../components/Screen";

import colors from "../config/colors";
import Button from "../components/Button";
import routes from "../navigation/routes";
import AppText from '../components/Text';

function NAWestHerts(navigation) {
  return (
  <ScrollView style={styles.screenview}>
    <ImageBackground 
      style = {styles.background}
      resizemode="contain"
      source={require("../assets/header-background.png")}>
      <View>
        <AppText style={styles.header}>West Hertfordshire NHS Trust</AppText>
        <AppText style={styles.tagline}>Meet your Nursing Ambassador</AppText>
      </View>
    </ImageBackground>
  <View style={styles.container}>
    <Image 
      style={styles.image}
      source={require("../assets/ann-jose.jpg")} />
    <AppText style={styles.heading}>Ann Jose</AppText>
    <AppText style={styles.text}>Ann is the Nursing Ambassador for West Hertfordshire Hospitals NHS Trust.</AppText>
    <AppText style={styles.text}>Ann is a Clinical night matron and will be able to provide additional support to overseas nurses in your area. Ann has been working in our trust for the last 3 years and 9 months in total in NHS. </AppText>
    <AppText style={styles.text}>She joined the NHS as an overseas nurse and worked as a ward manager. She supported overseas nurses in settling into their new environments and in progressing in their career path. </AppText>
  </View>
  <View style={styles.container}>
  </View> 
  <View style={styles.container}>
    <Button 
      title="email"
      color="primary"
      style={styles.button}
      onPress={() => Linking.openURL("mailto:ann.jose@nhs.net")}
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
    flex: .20,    
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 30,
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
    marginTop: 50,
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

export default NAWestHerts;