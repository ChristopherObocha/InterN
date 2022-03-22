import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const listings = [
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
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.date}
            // image={item.image}
            text={item.text}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
