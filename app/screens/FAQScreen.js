import React from 'react';
import { FlatList, Image, StyleSheet, StatusBar, View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import FAQCard from "../components/FAQCard";
import colors from "../config/colors";

const DATA = [
  {
    id: 1,
    title: "Do we get a uniform? ",
    text: "Yes, you will be taken for a fitting for your uniform but you will need to buy your own shoes. (A lot of nurses have bought theirs at Sport Direct)"
  },
  {
    id: 2,
    title: "What shoes can we wear to work?",
    text: "They must be black, closed toe and able to wipe clean. (A lot of nurses have bought theirs at Sports Direct)"
  },
  {
    id: 3,
    title: "What colour uniform do we wear?",
    text: "When you first start you will wear and once you have passed your OSCE exam you will wear"
  },
  {
    id: 4,
    title: "When do we get our first salary?",
    text: "When you arrive we will give you a cash advance of £    . Your first salary will depend on the day that you arrive. We will try to get you set up on time for the closest payment day from when you arrive. Payment day is the 2 th of each month. Speak to the International recruitment team to confirm this. "
  },
];

const Item = ({ title, text }) => (
  <FAQCard
    title={title}
    text={text}
  />
);

function FAQScreen(props) {
  const renderItem = ({ item }) => (
    <Item 
      title={item.title}
      text={item.text} />
    );

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
      data={DATA}
      keyExtractor={item => item.id}
      renderItem={ renderItem }         
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: colors.dark,
  },
  screen: {
    marginTop: StatusBar.currentHeight + 10 || 0,
    alignItems: 'center',
  },
})

export default FAQScreen;