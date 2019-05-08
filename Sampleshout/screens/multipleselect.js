import React, { Component } from 'react';
import {StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    View,Modal,TouchableHighlight, FlatList, TouchableWithoutFeedback, Image,PermissionsAndroid } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { Permissions, Notifications } from 'expo';
import Contacts from 'react-native-contacts';


const fruits = ['Apples', 'Oranges', 'Pears']

export class MultipleScreen extends React.Component {
  
      
    componentDidMount(){
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
              'title': 'Contacts',
              'message': 'This app would like to view your contacts.'
            }
          ).then(() => {
            Contacts.getAll((err, contacts) => {
              if (err === 'denied'){
                // error
              } else {
                // contacts returned in Array
                console.log(contacts)
              }
            })
          })
    }
      render() {
        return (
          <View>
            <Text>check</Text>
          </View>
        );
      };
    };
    
   