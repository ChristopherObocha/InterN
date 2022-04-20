import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function Card({ title, subTitle, text, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.carD}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </Text>
          <Text style={styles.text} numberOfLines={3}>
            {text}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  carD: {
    height: 137,
    width: 343,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#37C6F7',
    borderRadius: 30,
    borderBottomLeftRadius: 0,
    backgroundColor: colors.white,
    marginBottom: 20,
},
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.darkgray,
    fontWeight: "bold",
    marginBottom: 7,
    // textTransform: "lowercase",
  },
  text: {
    color: colors.black,
    fontWeight: "normal",
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    color: colors.dark,
    fontSize: 20,
    textTransform: "uppercase", 
  },
});

export default Card;
