import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import * as Linking from 'expo-linking';

import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import BigBlueButton from '../components/BigBlueButton';
import colors from '../config/colors';
import AppText from '../components/Text';
import { ScrollView } from 'react-native-gesture-handler';
import Screen from '../components/Screen';
import ResourceCard from '../components/ResourceCard';

function InfoScreen({ navigation }) {
    return (
        <ScrollView> 
          <ImageBackground 
            style = {styles.background}
            resizemode="contain"
            source={require("../assets/header-background.png")}>
              <Screen>
                <AppText style={styles.header}>Information and Resources</AppText>
              </Screen>
          </ImageBackground>
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={() => navigation.navigate("CoachesScreen")}>
                  <BigBlueButton>
                      <Text style={styles.buttonHead}>Development Coaches</Text>
                      <Text style={styles.buttonText}>Contact, Book a session, Updates</Text>
                  </BigBlueButton>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={() => navigation.navigate("NAScreen")}>
                  <BigBlueButton>
                    <Text style={styles.buttonHead}>Nursing Ambassadors</Text>
                    <Text style={styles.buttonText}>Meet your nursing ambassador</Text>
                  </BigBlueButton>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => navigation.navigate("IRTScreen")}>
                  <BigBlueButton>
                      <Text style={styles.buttonHead}>International Recruitment</Text>
                      <Text style={styles.buttonText}>Meet the team, contacts</Text>
                  </BigBlueButton>
              </TouchableOpacity>
            </View>
            <View>
              <AppText style={styles.buttonHead}>Additional Resources</AppText>
              <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => Linking.openURL("https://england.nhs.uk/nursingmidwifery")}>
                  <ResourceCard>
                      <Text style={styles.buttonHead} numberOfLines={2}>NHS England International Recruitment/ international nursing associations.</Text>
                      <Text style={styles.resourcesText} numberOfLines={2}>The different NHS international nursing associations are available here</Text>
                  </ResourceCard>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => Linking.openURL("https://youtu.be/_T1LHqc_3os")}>
                  <ResourceCard>
                      <Text style={styles.buttonHead} numberOfLines={2}>7 Tips for Wellbeing (Healthcare workers).</Text>
                      <Text style={styles.resourcesText} numberOfLines={2}>This video introduces wellbeing tips designed specifically for healthcare workers, including, keeping up with change, planning ahead, caring for yourself and exercise.</Text>
                  </ResourceCard>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: .20,    
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 30,
    height: 150,
  },
    buttonHead: {
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom: 3,
    },
    buttonContainer: {
      margin: 10,
    },
    buttonText: {
        color: '#8C92A4',
    },
    container: {
      margin: 25,
      alignItems: "center",
    },
    header: {
      fontSize: 30,
      paddingHorizontal: 5.5,
      paddingVertical: 15,
      color: colors.white,
      textAlign: "center",
    },
    resourcesText: {
        fontSize: 15,
        color: '#8C92A4',
    },
})
export default InfoScreen;