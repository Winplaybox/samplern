import { StyleSheet, Text, View,SafeAreaView,AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Root} from 'native-base';
import {NotificationScreen} from './screens/notification'
import {TranslateScreen} from './screens/translate'
import {ModalScreen} from './screens/modal'
import SplashScreen from 'react-native-splash-screen'
import {MultipleScreen} from './screens/multipleselect'
import {RadiobuttonScreen} from './screens/radiobutton'
import {RadiobuttonsScreen} from './screens/radiobutton1'
const MyStackNavigator = createStackNavigator({

  NotificationScreen:{
    screen:NotificationScreen
  },
  TranslateScreen:{
    screen:TranslateScreen
  },
  ModalScreen:{
    screen:ModalScreen
  },
  MultipleScreen:{
    screen:MultipleScreen
  },
  RadiobuttonScreen:{
    screen:RadiobuttonScreen
  },
  RadiobuttonsScreen:{
    screen:RadiobuttonsScreen
  }
    },

    {
        initialRouteName: 'RadiobuttonsScreen',
        drawerWidth: 300,
        headerMode: 'none'
    }
);


const MyApp = createAppContainer(MyStackNavigator);

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

  //   componentDidMount() {
  //     SplashScreen.hide();
  // }

    async componentWillMount() {
      // SplashScreen.hide();
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        this.setState({ loading: false });
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }
        return (<SafeAreaView style={styles.safeArea}><Root><MyApp /></Root></SafeAreaView>)
    }
}


const styles = StyleSheet.create({
    // …,
    safeArea: {
      flex: 1,
      backgroundColor: '#ED193F'
    }
  })



/*
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}*/

AppRegistry.registerComponent('myapp', () => myapp);