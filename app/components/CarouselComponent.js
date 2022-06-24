import React, { useState, useEffect } from 'react';
import {
  Text, 
  View,
  StyleSheet,
  FlatList } from 'react-native';

import { firebase } from '../config/config';
import * as Linking from 'expo-linking';

import Card from "../components/Card";
import colors from "../config/colors";
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import Card2 from './Card2';


const Item = ({ title, date, text, url }) => {
  return (
    <Card2
    title={title}
    date={date}
    text={text}
    onPress={() => Linking.openURL(`${url}`).catch(err => console.error('Error', err))}
  />
  );
}


function CarouselComponent(navigation) {
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


  // return (
  //   // <View style={{
  //   //   backgroundColor: colors.primary,
  //   //   borderRadius: 30,
  //   //   height: 130,
  //   //   paddingTop: 15,
  //   //   alignItems: 'center', 
  //   //   marginHorizontal: 10,

  //   //   shadowColor: colors.dark,
  //   //   shadowOffset: {width: -2, height: 4},
  //   //   shadowOpacity: 0.2,
  //   //   shadowRadius: 3,
  //   //   }}>
  //   //   <LinearGradient 
  //   //     colors={['#4EA3FF', '#007AFE]']}>
  //   //     <Text style={styles.header}>{item.title}</Text>
  //   //     <Text style={styles.paragraph} numberOfLines={2}>{item.text}</Text>
  //   //   </LinearGradient>
  //   // </View>

  //   <View>
  //     <FlatList
  //       horizontal
  //       data={users}
  //       keyExtractor={item => item.id}
  //       renderItem={ renderItem }
  //       // ListHeaderComponent={FlatList_Header}
  //       />
  //     </View>
  // );
    return (
      <View style={styles.screen}>
        <Carousel
          layout={"default"}
          // ref={ref => this.carousel = ref}
          data={users}
          sliderWidth={250}
          itemWidth={250}
          renderItem={ renderItem }
          // onSnapToItem = { (index) => {this.setState({activeIndex:index}).bind(this) }} 
        />
      </View>
  );
}


const styles = StyleSheet.create({
    header: {
      fontSize: 21,
      fontWeight: 'bold',
      color: colors.white,      
    },
    paragraph: {
      color: colors.white,
      fontSize: 16,
    },
    screen: {
    backgroundColor: colors.white,
    flexDirection:'row', 
    marginVertical: 15,
  }
})

export default CarouselComponent;
