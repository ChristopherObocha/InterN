import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function Card2({ title, date, text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cards}>
        <Text numberOfLines={2} style={styles.title}> {title} </Text>
        <Text numberOfLines={1} style={styles.date}> {date} </Text>
        <Text numberOfLines={3} style={styles.text}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Card2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cards: {
    // alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 25,
    marginLeft: 10,
    padding: 10,
    height: 160,
    width: 210,
    backgroundColor: colors.primary,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 10,
    textAlign: 'center',
  },
  date: {
    color: colors.light,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
    color: colors.white,
    textAlign: 'left',
  },
})