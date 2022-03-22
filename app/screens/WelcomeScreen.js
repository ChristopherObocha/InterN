// import React from 'react';
// import { StyleSheet, Text, View, FlatList, ScrollView, Footer } from 'react-native';

// import Card from "../components/Card";
// import CarouselComponent from "../components/CarouselComponent";
// import colors from "../config/colors";
// import Screen from "../components/Screen";

// import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

// const listings = [
//   {
//     id: 1,
//     title: "Support for staff who may be affected by conflict abroad",
//     date: "16TH MAR, 2022 - 23RD MAR, 2022",
//     image: require("../assets/jacket.jpg"),
//     text: "The session is an opportunity to explore and understand the impact that the Ukraine and Russia conflict might have on us. It is open to staff members who may be wondering how to support themselves or loved ones experiencing fear, worry, anger and uncertainty. Staff who work in healthcare, social care, the voluntary sector or not-for-profit sector are from a range of diverse backgrounds, and we want to offer support in these reflective spaces to ALL staff from these sectors whatever their origins or ethnicity."
//   },
//   {
//     id: 2,
//     title: "Couch in NHS x IGF: Recovery and rehabilitation how can physical activity support us to process our experiences and support wellbeing? condition",
//     date: "30TH MAR, 2022",
//     text: "When we spend most of our working life taking care of others, we often need that reminder to take care of ourselves. Looking after your physical health is key to supporting your overall health and wellbeing, including your mental health. As such, we are pleased to be working with the Invictus Games Foundation (IGF) to offer physical health and wellbeing support to our NHS people. Keynote Speaker: Paul Vice - Teacher of Sports and Active Leisure, Royal Marines Commando"
//   },
// ];

// function WelcomeScreen(props) {
//   return (
//     <FlatList
//       ListHeaderComponent={
//         <>
//           <ImageBackground 
//             style = {styles.background}
//             resizemode="contain"
//             source={require("../assets/header-background.png")}>
//             <View>
//               <Text style={styles.header}>Hertfordshire and West Essex ICS</Text>
//             </View>
//           </ImageBackground>
//           <View style={styles.carousel}>
//             <CarouselComponent />
//             <Text>Past Events</Text>
//           </View>
//         </>
//       }
//     // <ScrollView style={styles.container}>
//       // <View style={styles.screen}>
//         // <FlatList
//           data={listings}
//           keyExtractor={(listing) => listing.id.toString()}
//           renderItem={({ item }) => (
//             <Card
//               title={item.title}
//               subTitle={item.date}
//               // image={item.image}
//               text={item.text}
//               // onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
//             />
//           )}
//         // />
//       // </View>
//     // </ScrollView>
//       ListFooterComponent={
//         <Footer />
//       }/>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: .20,    
//     overflow: "hidden",
//     justifyContent: "center",
//     alignItems: "center",
//     borderBottomRightRadius: 30,
//   },
//   header: {
//     fontSize: 30,
//     padding: 6.5,
//     color: colors.white,
//   },
//   carousel: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     // padding: 20,
//     backgroundColor: colors.light,
//   },
// })

// export default WelcomeScreen;

import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
