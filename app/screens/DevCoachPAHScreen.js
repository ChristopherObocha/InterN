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

function DevCoachPAHScreen(props) {
  return (
    <ScrollView style={styles.screenview}>
      <ImageBackground 
        style = {styles.background}
        resizemode="contain"
        source={require("../assets/header-background.png")}>
        <Screen>
          <AppText style={styles.header}>Priscillah Osikominu</AppText>
          <View style={styles.row}>
            <SmallBookingButton />
            <View style={styles.imageContainer}>
              <Image 
                style={styles.image}
                source={require("../assets/linda.jpg")} />
            </View>
          </View>
        </Screen>
      </ImageBackground>
      <View style={styles.container}>
        <AppText style={styles.text}>Priscillah is the development coach for Princess Alexandra hospital NHS Trust.</AppText>
        <AppText style={styles.heading}>Profile</AppText>
        <AppText style={styles.text}>Professionally l have worked in the NHS since l was 18 years old.  After training dually, l worked as a midwife, community outreach for vulnerble young adults (not called that anymore!), perinatal meantal health, safeguarding and as a team lead for that team and then training as a SCPHN (HV), worked in Learning disability, practice education. I used to be a union rep for ineqalities and am very passionate about our role professionally in relation to reducing ineqalities in heathcare.  Most of my roles have been around this. </AppText>
        <AppText style={styles.text}>I am also an advocate for mental health well being among health professionals and the wider community. My MSc in health promotion and public health focused on mental health among a marginalised population and really empowered my practice. Having travelled and lived in a few countries, l consider the UK my home however l empathise with anyone who has left their home.</AppText>
        <AppText style={styles.text}>Hobbies: Reading, trekking, kayaking, country walks, Travelling and a newfound love for kundalini yoga.  
        </AppText>
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
          onPress={() => Linking.openURL("mailto:priscillah.osikominu@nhs.net")}>
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

export default DevCoachPAHScreen;