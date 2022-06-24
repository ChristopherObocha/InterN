import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function Card({ title, date, text, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.carD}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.subTitle}>
            {date}
          </Text>
          <Text style={styles.text} numberOfLines={4}>
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
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: colors.gray,
    borderRadius: 30,
    borderBottomLeftRadius: 0,
    backgroundColor: colors.white,
    marginBottom: 20,
    marginHorizontal: 20,

    // shadowColor: colors.dark,
    // shadowOffset: {width: -2, height: 4},
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
},
  detailsContainer: {
    // padding: 20,
    padding: 10,
  },
  subTitle: {
    color: '#515151',
    fontWeight: "bold",
    marginBottom: 7,
  },
  text: {
    color: colors.black,
    fontWeight: "normal",
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    color: '#515151',
    fontSize: 18,
    textTransform: "uppercase", 
  },
});

export default Card;
