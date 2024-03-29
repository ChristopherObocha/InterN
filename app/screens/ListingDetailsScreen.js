import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View>
      {/* <Image style={styles.image} source={listing.image} /> */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.date}>{listing.date}</Text>
        <Text style={styles.text}>{listing.text}</Text>
        {/* <View style={styles.userContainer}>
          <ListItem
            // image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  date: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: colors.primary,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
