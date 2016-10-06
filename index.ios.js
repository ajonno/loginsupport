
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as firebase from 'firebase';

//Facebook SDK for React Native: https://github.com/facebook/react-native-fbsdk
import {LoginManager, LoginButton, AccessToken} from 'react-native-fbsdk';

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

    const auth = firebase.auth();
    const provider = firebase.auth.FacebookAuthProvider;
    console.log(provider);

    this._loginToFacebookThenFirebase(auth, provider)
  }


  _loginToFacebookThenFirebase(auth, provider) {

    LoginManager.logInWithReadPermissions(['public_profile'])
    .then(loginResult => {
        if (loginResult.isCancelled) {
            console.log('user canceled');
            return;
        }
        AccessToken.getCurrentAccessToken()
        .then(accessTokenData => {
            const credential = provider.credential(accessTokenData.accessToken);

            //**!! if we make it here then we can now login to Firebase using the provided credential (token**)
            console.log("any luck ?..");
            //return auth.signInWithCredential(credential);
        })
        .then(credData => {
            console.log(credData);
        })
        .catch(err => {
            console.log(err);
        });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
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
