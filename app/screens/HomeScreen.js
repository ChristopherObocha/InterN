import React, { useState, useEffect } from "react";
import { FlatList, Image, StyleSheet, StatusBar, View, SafeAreaView, Pressable, Text, TouchableOpacity, ScrollView } from "react-native";
import { firebase } from '../config/config';
import * as Linking from 'expo-linking';

import Card from "../components/Card";
import colors from "../config/colors";

import CarouselComponent from "../components/CarouselComponent";
import SmallBookingButton from "../components/SmallBookingButton";

const Item = ({ title, date, text, url }) => (
  <Card
    title={title}
    date={date}
    text={text}
    onPress={() => Linking.openURL(`${url}`).catch(err => console.error('Error', err))}
  />
);

function HomeScreen ({ navigation }) {
  const renderItem = ({ item }) => (
    <Item 
      title={item.title}
      date={item.date}
      text={item.text}
      url={item.url} />
    );

  const [users, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection('featured');

  useEffect(async () => {
    todoRef
    .onSnapshot( 
      querySnapshot => {
      const users = []
      querySnapshot.forEach((doc) => {
        const {title, text, date, url} = doc.data()
        users.push({
          id: doc.id,
          title,
          text,
          date,
          url,
        })
      })
      setUsers(users)
    })
  }, []);

  const FlatList_Header = () => {
    return (
      <View>
        <View style={{ 
          alignItems: 'center',
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
          paddingVertical: '10%',
          marginBottom: 20,
          backgroundColor: colors.primary, }}>
          <Text style={styles.header}>Hertfordshire and West Essex ICS</Text>
          <View style={{
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <SmallBookingButton />
            <TouchableOpacity 
              onPress={() => navigation.navigate("CoachesScreen")} >
              <Image 
                  style={styles.image}
                  source={require("../assets/CoachButton.png")} />
            </TouchableOpacity>
        </View>
        </View>
        <View>
          <Text style={styles.heading}>Featured</Text>
          <CarouselComponent />
          <Text style={[
            styles.heading, 
            {marginBottom: 10
            }]}>News and Events</Text>
        </View>
      </View>
    );
  }

  return (
    <>
      <View>
        <FlatList
            data={users}
            keyExtractor={item => item.id}
            renderItem={ renderItem }
            ListHeaderComponent={FlatList_Header}
          />
      </View>
  </>
  );
}

const styles = StyleSheet.create({
  background: {    
    borderBottomRightRadius: -30,
    borderBottomLeftRadius: 40,
    height: '25%',
    backgroundColor: colors.primary,
  },
  header: {
    fontSize: 30,
    padding: 6.5,
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: StatusBar.currentHeight+10 || 10, 
  },
  carousel: {
    marginTop: -40,
  },
  cards: {
    padding: 20,
    backgroundColor: colors.white,
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  screen: {
    backgroundColor: colors.white,
  },
});

export default HomeScreen;
