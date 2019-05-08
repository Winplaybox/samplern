import React, { Component } from 'react';
import {StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
    View, } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { Permissions, Notifications } from 'expo';
import { Button } from 'native-base';

export class RadiobuttonScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          radioSelected: 1
        }
      }
    
    
      radioClick(id) {
        this.setState({
          radioSelected: id
        })
      }
    
      render() {
        var number = 0;

        for (var i = 0; i <5; i++) {
            number++;
            console.log(number);
        }
        const products = [{
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }];
        
        return (
            products.map((val,id) => {
            return (
              <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                  <TouchableOpacity key={val.id} onPress={this.radioClick.bind(this, val.id)} style={{flex:1,justifyContent:"center",flexDirection:"row",height:45}}>
                    <View style={{
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: '#000',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}>
                    {
                        val.id == this.state.radioSelected ?
                        <View style={{
                            height: 12,
                            width: 12,
                            borderRadius: 6,
                            backgroundColor: '#000',
                        }} />
                        : null
                    }
                    </View>
                    <Text>Hello {val.id}</Text>
                </TouchableOpacity>
              </View>
            )
          })
        );
      }
    }