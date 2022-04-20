import React from 'react';
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Linking from 'expo-linking';

import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

import Screen from "../components/Screen";

import colors from "../config/colors";
import Button from "../components/Button";
import routes from "../navigation/routes";
import AppText from '../components/Text';
import Icon from '../components/Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';

function IRTScreen({navigation}) {
  return (
  <ScrollView style={styles.screenview}>
    <ImageBackground 
      style = {styles.background}
      resizemode="contain"
      source={require("../assets/header-background.png")}>
      <Screen>
        <AppText style={styles.header}>International Recruitment</AppText>
      </Screen>
    </ImageBackground>
    <View style={styles.container}>
      <AppText style={styles.text}>The International Recruitment Team are available to assist you with your journey to employment in the UK and pastoral support when you arrive.  The team cover all the NHS hospitals and organisations across Hertfordshire and West Essex.</AppText>
    </View>  
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.mail}
        onPress={() => Linking.openURL("mailto:hweicsirteam@nhs.net")}>
        <AppText style={styles.italicText}>Alternatively send an email to the Development Coach generic inbox: <AppText style={{color: colors.primary}}>hweicsirteam@nhs.net</AppText> </AppText>
        <MaterialCommunityIcons name="mail" color={colors.gray} size="26" />
      </TouchableOpacity>
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
    height: 150,
  },
  boldText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 15, 
  },
  italicText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
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
  mail: {
    alignItems: 'center',
    marginTop: 7,
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

export default IRTScreen;