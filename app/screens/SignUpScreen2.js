import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Image, SafeAreaView, StatusBar, ScrollView, Platform, Button, Keyboard } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker';
// import { Icon } from "@rneui/themed";
import { auth } from '../firebase';
import { firebase } from '../config/config';
import colors from '../config/colors';
//import { ScrollView } from 'react-native-web';
// import { color } from 'react-native-reanimated';
// import { Icon } from 'react-native-vector-icons/Icon';
// import Ionicons from '@expo/vector-icons/Ionicons';

const Login = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  const [trust, setTrust] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  // const handleSignUp = () => {
  //   const db = firebase.firestore();

  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //       db.collection("data").doc(`${name}`).set({
  //         name: name,
  //         surname: surname,
  //         email: email,
  //         trust: trust,
  //         date: date,
  //       })
  //     .then(userCredentials => {
  //       const user = userCredentials.user;
  //       console.log('Registered with:', user.email);
  //     })
  //     .catch(error => alert(error.message))
     
  //   .then(() => {
  //       console.log("Document successfully written!");
  //   })
  //   .catch((error) => {
  //       console.error("Error writing document: ", error);
  //   });
  // }

  const handleSignUp = async () => {
    const db = firebase.firestore();

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password)
      const user = userCredential.user
    
      await db.collection("data").doc(`${name}`).set({
                name: name,
                surname: surname,
                email: email,
                trust: trust,
                date: date,
              })
    } catch (e) {
      console.log(e)
    }
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  return (
    // <SafeAreaView>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
          <View>
            <Image resizeMode='contain' style={styles.image} source={require("../assets/favicon.png")} />
          </View>
          {/* <View>
            <Text style={styles.header}>Create an account</Text>
          </View> */}
            {/* <View style={styles.inputContainer}> */}
              {/* 
              />
              <TextInput
                placeholder='Last Name'
                value={surname}
                onChangeText={text => setSurname(text)}
                style={styles.input}
              />
              <TextInput
                placeholder='email'
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
              />
              <TextInput
                placeholder='Password'
                placeholderTextColor={colors.darkgray}
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
              />
              <TextInput
                placeholder='Select your Trust of employment'
                placeholderTextColor={colors.darkgray}
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
              />
              <TextInput
                placeholder='Date of Arrival'
                placeholderTextColor={colors.darkgray}
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
              /> */}
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                  <Text style={styles.header}>Create an account</Text>
                  <TextInput
                    placeholder='First Name'
                    placeholderTextColor={colors.darkgray}
                    value={name}
                    onChangeText={text => setName(text)}
                    style={styles.textInput} />
                  <TextInput
                    placeholder='Last Name'
                    placeholderTextColor={colors.darkgray}
                    value={surname}
                    onChangeText={text => setSurname(text)}
                    style={styles.textInput}
                  />
                  <TextInput 
                    placeholder="email" 
                    placeholderTextColor={colors.darkgray}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.textInput} 
                  />
                  <TextInput
                    placeholder='Password'
                    placeholderTextColor={colors.darkgray}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.textInput}
                    secureTextEntry
                  />
                  <TextInput
                    placeholder='Select your Trust of employment'
                    placeholderTextColor={colors.darkgray}
                    value={trust}
                    onChangeText={text => setTrust(text)}
                    style={styles.textInput}
                  />
                  <TextInput
                    placeholder='Date of Arrival'
                    placeholderTextColor={colors.darkgray}
                    value={date}
                    onChangeText={text => setDate(text)}
                    style={styles.textInput}
                  />
                  {/* <DatePicker date={date} onDateChange={setDate} /> */}
                  <View style={styles.btnContainer}>
                    <Button title="Submit" color={colors.white} onPress={handleSignUp} />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            {/* </View> */}
            {/* <View style={styles.buttonContainer}>
              <TouchableOpacity 
                onPress={handleSignUp}
                style={styles.btn}>
                <Text style={{ color: 'white', fontWeight: '700', fontSize: 16}}>Submit</Text>
              </TouchableOpacity>
            </View> */}
      </KeyboardAwareScrollView>
    // </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    marginVertical: 31,
    fontSize: 19,
    fontWeight: '700',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    height: 50,
    backgroundColor: colors.light,
  },
  // buttonContainer: {
  //   width: '75%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: 40,
  // },
  btn: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  image: {
    height: 84,
    width: 62,
    marginTop: StatusBar.currentHeight + 69,
  },

  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: colors.darkgray,
    borderBottomWidth: 1,
    marginBottom: 10
  },
  btnContainer: {
    marginTop: 12,
    backgroundColor: '#0782F9',
    padding: 15,
    borderRadius: 25,
  }
})