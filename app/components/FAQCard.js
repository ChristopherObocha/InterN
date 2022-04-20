import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function FAQCard({ title, text, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
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
    height: 137,
    width: 343,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: colors.light,
    borderRadius: 30,
    borderBottomLeftRadius: 0,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
},
  detailsContainer: {
    padding: 20,
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

export default FAQCard;
