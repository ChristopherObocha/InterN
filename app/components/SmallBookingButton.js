import React from 'react';
import { SafeAreaView, TouchableOpacity, View, StyleSheet } from 'react-native';

import * as Linking from 'expo-linking';

import AppText from '../components/Text';
import colors from "../config/colors";


function SmallBookingButton(props) {
  return (
    <SafeAreaView>
      <TouchableOpacity 
        onPress={() => Linking.openURL("https://teams.microsoft.com")}
        style={styles.row}>
        <View style={styles.smallButton}>
          <AppText style={{fontSize: 16, color: colors.white }}>Book a session</AppText>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  smallButton: {
    height: 30,
    width: 145,
    backgroundColor: colors.darkblue,
    justifyContent: 'center',
    borderRadius: 8,
    alignItems: 'center',
  },
})

export default SmallBookingButton;