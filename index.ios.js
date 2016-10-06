
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as firebase from 'firebase';

class loginsupport extends Component {

  constructor() {
    super();

    var config = {
      apiKey: "AIzaSyB6RuTo566W-tRSZYwES4NghEPOa48gM7Q",
      authDomain: "loginsupport-6f8f6.firebaseapp.com",
      databaseURL: "https://loginsupport-6f8f6.firebaseio.com",
      storageBucket: "loginsupport-6f8f6.appspot.com",
      messagingSenderId: "322866779603"
    };
    firebase.initializeApp(config);

    var provider = new firebase.auth.FacebookAuthProvider();
    console.log(provider);

    //part 1 - get the access token using Facebooks own SDK ?
    var credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken.toString());

    //part 2 - use that token to sign in using Firebase's own API
    firebase.auth().signInWithCredential(credential).then(function(user) {
      console.log("Sign In Success", user);
    }, function(error) {
      console.log("Sign In Error", error);
    });


    // firebase.auth().signInWithCredential(provider).then(function(result) {
    //   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //   var token = result.credential.accessToken;
    //   console.log("token: " + token);
    //   // The signed-in user info.
    //   var user = result.user;
    //   // ...
    // }).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // });

    //var credential = firebase.auth.FacebookAuthProvider.credential(
    //            event.authResponse.accessToken);
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('loginsupport', () => loginsupport);
