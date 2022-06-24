import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, StatusBar, View, SafeAreaView, Pressable, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/core';
import * as Linking from 'expo-linking';

import { firebase } from '../config/config';
import colors from "../config/colors";
import { auth } from '../firebase';

import Card from "../components/Card";
import CarouselComponent from "../components/CarouselComponent";
import SmallBookingButton from "../components/SmallBookingButton";

import CoachesScreen from './CoachesScreen';



const HomeScreen2 = () => {

  const Item = ({ title, date, text, url }) => (
    // return (
      <Card
        title={title}
        date={date}
        text={text}
        onPress={() => Linking.openURL(`${url}`).catch(err => console.error('Error', err))}
      />
    // );
  );
  

  const navigation = useNavigation();

  // const handleSignOut = () => {
  //   auth
  //     .signOut()
  //     .then(() => {
  //       navigation.replace("Login")
  //     })
  //     .catch(error => alert(error.message))
  // }

  //Flatlist Render
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


//Items that will go on top of the FlatList
  const flatList_Header = () => {
    return (
      <View style={styles.container}>
        <View style={{ 
          alignItems: 'center',
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
          paddingVertical: '10%',
          marginBottom: 20,
          backgroundColor: colors.primary, }}>
          <Text style={styles.header}>Hertfordshire and West Essex ICS</Text>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 35,
            alignItems: 'center',
          }}>
            <SmallBookingButton style={{ flex: 0.5 }} />
            <TouchableOpacity 
              style={{ marginLeft: 29}}
              onPress={() => navigation.navigate("CoachesScreen")} >
              <Image 
                style={styles.image}
                source={require("../assets/CoachButton.png")} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginBottom: 30}}>
          <Text style={styles.heading}>Featured</Text>
          <CarouselComponent />
        </View>
        <View>
        <Text style={[ styles.heading, {marginBottom: 10}]}>News and Events</Text>
        </View>
      </View>
    );
  }

  return (
    //   <View style={styles.container}>
    //     {/* <News /> */}
    //     {/* <Text>Email: {auth.currentUser?.email}</Text>
    //     <TouchableOpacity
    //       onPress={handleSignOut}
    //       style={styles.button}
    //     >
    //       <Text style={styles.buttonText}>Sign out</Text>
    //     </TouchableOpacity> */}
    //     <View>
        <FlatList
            data={users}
            keyExtractor={item => item.id}
            renderItem={ renderItem }
            ListHeaderComponent={ flatList_Header }
          />
   
  )
}

export default HomeScreen2

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  header: {
    fontSize: 25,
    fontWeight: '800',
    paddingHorizontal: 20,
    color: colors.white,
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 25,
  },
  imgContainer: {
    marginLeft: 10,
  },
  image: {
    resizeMode: 'center',
    height: 40,
    width: 145,
    flex: 1,
  },
})