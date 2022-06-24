import React from 'react';
import { Image, StyleSheet, ScrollView, Text, View, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Linking from 'expo-linking';

import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import colors from "../config/colors";
import Button from "../components/Button";
import routes from "../navigation/routes";
import AppText from '../components/Text';
import Screen from '../components/Screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BigBlueButton from '../components/BigBlueButton';
import SmallBookingButton from '../components/SmallBookingButton';

const deviceWidth = Dimensions.get('window').width;

function DevCoachWestHertsScreen(props) {
  return (
    <ScrollView style={styles.screenview}>
      <ImageBackground 
        style = {styles.background}
        resizemode="contain"
        source={require("../assets/header-background.png")}>
        <Screen>
          <AppText style={styles.header}>Linda Whiteley</AppText>
          <View style={styles.row}>
            <SmallBookingButton />
            <View style={styles.imageContainer}>
              <Image 
                style={styles.image}
                source={require("../assets/jaimol.png")} />
            </View>
          </View>
        </Screen>
      </ImageBackground>
      <View style={styles.container}>
        <AppText style={styles.text}>Linda is the development coach for East and North Hertfordshire NHS Trust.</AppText>
        <AppText style={styles.heading}>Profile</AppText>
        <AppText style={styles.text}>I have 38 years of experience in the NHS as a nurse, midwife and specialist practitioner school nursing.  My journey has taken me through a range of roles working in hospitals to community-based school nursing, public health, child and adolescent mental health.  My most recent role has been in nursing informatics and how technology can enhance the delivery of safer patient care.  Following early retirement in 2020, I returned to join the mass vaccination programme for covid 19, where I worked with many amazing people, nurses, administrators and volunteers all working together and dedicated to reach one goal. </AppText>
        <AppText style={styles.text}>I am passionate about sharing my knowledge and supporting colleagues to develop to be the nurse they want to be and am excited to be working with international nursing recruits.</AppText>
        <AppText style={styles.text}>Hobbies: gardening, walking, and spending time with family</AppText>
      </View> 
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => Linking.openURL("tel:07812785184")}>
          <BigBlueButton>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonText}>
                <Text style={styles.buttonHead}>Phone Number</Text>
                <Text style={styles.buttonSubtitle}>07812 785184 </Text>
              </View>
              <MaterialCommunityIcons name="phone" color={colors.darkgray} size="30" style={styles.icon} />
            </View>
          </BigBlueButton>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:linda.whiteley1@nhs.net")}>
          <BigBlueButton>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonText}>
                <Text style={styles.buttonHead}>email</Text>
                <Text style={styles.buttonSubtitle}>linda.whiteley1@nhs.net</Text>
              </View>
              <MaterialCommunityIcons name="email" color={colors.darkgray} size="30" style={styles.icon} />
            </View>
          </BigBlueButton>
        </TouchableOpacity>
        <Button 
          title="Coaching Resources"
          color="primary"
          style={styles.button}
          onPress={() => navigation.navigate(routes.REGISTER)} 
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
    borderBottomRightRadius: 30,
    height: 210,
  },
  buttonHead: {
    fontSize: 19,
    fontWeight: "bold",
    color: colors.black,
  },
  buttonSubtitle: {
    fontSize: 15,
    color: colors.darkgray,
  },
  buttonText: {
    flex: 0.8,
    marginLeft: 40, 
    alignItems: "flex-start",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    padding: 20,
  },
  icon: {
    flex: 0.2,
  },
  image: {
    // flex: 1,
    height: 55,
    width: 55,
    alignSelf: "center",
    borderRadius: 37.5,
  },
  imageContainer: {
    marginLeft: 10,
    borderWidth: 20,
    borderStyle: 'solid',
    borderRadius: 55,
    borderColor: '#3B92FE',
  },
  header: {
    fontSize: 30,
    paddingHorizontal: 5.5,
    paddingVertical: 9,
    marginTop: 10,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
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

export default DevCoachWestHertsScreen;