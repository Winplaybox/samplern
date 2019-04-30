import React from 'react';
import { StyleSheet, Text, View,WebView,StatusBar } from 'react-native';
import { Constants } from 'expo';
export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View>
        <WebView
          source={{uri: 'https://www.w3schools.com/'}}
          style={[styles.statusBar,{marginTop: 24}]}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBar: {
    backgroundColor: "#fff",
    height: Constants.statusBarHeight,
  },
  // w3 color : #4caf50
});
