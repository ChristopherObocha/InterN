import React from "react";
import { FlatList, Image, StyleSheet, StatusBar, View, SafeAreaView, Text, TouchableOpacity } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";

import CarouselComponent from "../components/CarouselComponent";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import SmallBookingButton from "../components/SmallBookingButton";

const DATA = [
  {
    id: 1,
    title: "Support for staff who may be affected by conflict abroad",
    date: "16TH MAR, 2022 - 23RD MAR, 2022",
    image: require("../assets/jacket.jpg"),
    text: "The session is an opportunity to explore and understand the impact that the Ukraine and Russia conflict might have on us. It is open to staff members who may be wondering how to support themselves or loved ones experiencing fear, worry, anger and uncertainty. Staff who work in healthcare, social care, the voluntary sector or not-for-profit sector are from a range of diverse backgrounds, and we want to offer support in these reflective spaces to ALL staff from these sectors whatever their origins or ethnicity."
  },
  {
    id: 2,
    title: "Couch in NHS x IGF: Recovery and rehabilitation how can physical activity support us to process our experiences and support wellbeing? condition",
    date: "30TH MAR, 2022",
    text: "When we spend most of our working life taking care of others, we often need that reminder to take care of ourselves. Looking after your physical health is key to supporting your overall health and wellbeing, including your mental health. As such, we are pleased to be working with the Invictus Games Foundation (IGF) to offer physical health and wellbeing support to our NHS people. Keynote Speaker: Paul Vice - Teacher of Sports and Active Leisure, Royal Marines Commando"
  },
  {
    id: 3,
    title: "Pledge your Support for the East of England Anti-Racism Strategy.",
    date: "2 NOV 2021",
    text: "As an Integrated Care System - ICS we are encouraging staff to share their pledges."
  },
];

const Item = ({ title, date, text }) => (
  <Card
    title={title}
    subTitle={date}
    text={text}
    onPress={() => navigation.navigate(routes.LISTING_DETAILS)}
  />
);

function NewsScreen ({ navigation }) {
  const renderItem = ({ item }) => (
    <Item 
      title={item.title}
      date={item.date}
      text={item.text} />
    );

  return (
    <>
      <View style={styles.screen}>
      <ImageBackground 
        style = {styles.background}
        resizemode="contain"
        source={require("../assets/header-background.png")}>
        <SafeAreaView style={{alignItems: 'center'}}>
          <Text style={styles.header}>News and Events</Text>
        </SafeAreaView>
      </ImageBackground>
      <View style={styles.carousel}>
      <Text style={styles.heading}>Upcoming Events</Text>
        <CarouselComponent />
      </View>
      <Text style={styles.heading}>Past Events</Text>
      <View style={styles.cards}>
        <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={ renderItem }          
          />
      </View>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  background: {    
    overflow: "hidden",
    borderBottomRightRadius: 30,
    height: 120,
  },
  header: {
    fontSize: 30,
    padding: 6.5,
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: StatusBar.currentHeight || 0, 
  },
  carousel: {
    
  },
  cards: {
    padding: 20,
    backgroundColor: colors.light,
  },
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
  head: {
    fontSize: 24,
    padding: 6.5,
    color: colors.primary,
  },
  heading: {
    fontSize: 23,
    paddingHorizontal: 5.5,
    paddingVertical: 2,
    marginTop: 10,
    color: colors.black,
    textAlign: "center",
    fontWeight: "bold",
  },
  image: {
    height: 40,
    width: 172,
    borderRadius: 15,
    alignSelf: "center",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  screen: {
    backgroundColor: colors.light
  },
  tagline: {
    fontSize: 16,
    color: colors.white,
  },
});

export default NewsScreen;
