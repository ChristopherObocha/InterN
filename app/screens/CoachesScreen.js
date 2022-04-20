import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';

import Screen from "../components/Screen";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";


function CoachesScreen(props) {
  return (
    <Screen style = {styles.background}>
      <ImageBackground 
      style = {styles.background}
      resizemode="contain"
      source={require("../assets/header-background.png")}>
      <View>
        <Text style={styles.header}>Hertfordshire and West Essex ICS</Text>
      </View>
    </ImageBackground>
    <View>
      <Image 
        style = {styles.image}
        resizemode="contain"
        source={require("../assets/linda.jpg")} />
      <Text style={styles.head}>Linda Whiteley</Text>
      <Text style={styles.bodytext}>I have 38 years of experience in the NHS as a nurse, midwife and specialist practitioner – school nursing.  My journey has taken me through a range of roles working in hospitals to community-based school nursing, public health, child and adolescent mental health.  My most recent role has been in nursing informatics and how technology can enhance the delivery of safer patient care.  Following early retirement in 2020, I returned to join the mass vaccination programme for covid 19, where I worked with many amazing people, nurses, administrators and volunteers all working together and dedicated to reach one goal.
      I am passionate about sharing my knowledge and supporting colleagues to develop to be the nurse
      they want to be and am excited to be working with international nursing recruits.

      Hobbies: gardening, walking and spending time with family
</Text>
    </View>

    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    paddingHorizontal: 10,
    // justifyContent: "center",
  },
  bodytext: {
    fontSize: 15,
  },
  head:{
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  }
})

export default CoachesScreen;
