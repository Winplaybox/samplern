import React, { Component } from 'react';
import {StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,FlatList,
    View, } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { Permissions, Notifications } from 'expo';
import { Container, Header, Content, ListItem, Radio, Right, Left } from 'native-base';

export class RadiobuttonsScreen extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          friends: [{ id: 10, name:"Gundam" },
                    { id: 20, name:"Rambo" },
                    { id: 30, name:"Mickey Mouse" } ],
          checkBoxChecked: false
        };
      }
    
    
      onCheckBoxPress(id) {
        console.log( "Checked!" );
        console.log(this.state.checkBoxChecked)
        console.log( id );
        this.setState({
          checkBoxChecked: !this.state.checkBoxChecked
        });
        if(id != id){
            return this.setState({
                checkBoxChecked: true
              });
        }
        else{
            return this.setState({
                checkBoxChecked: false
              });
        }
      }
      bgcolor=(param)=>{
          if(param== true){
              return "yellow"
          }
          else{
              return "red"
          }
      }
      render() {
        return(
                <View style={{flex:1,justifyContent:"center",alignItems:"center",marginTop:40,width:400}}>
                <Text>Dynamic Radio Button using FlatList</Text>
                <FlatList
                    data={this.state.friends}
                    horizontal={false}
                    extraData={this.state}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        // <View>
                        //     <Radio
                        //     onPress={()=> this.setState({checkBoxChecked:item.id})}
                        //     color={"gray"}
                        //     selectedColor={"gray"}
                        //     selected={item.id === this.state.checkBoxChecked}
                        //   />
                        //   <Text>{item.name}</Text>
                        //     </View>
                    <TouchableOpacity onPress={()=> this.setState({checkBoxChecked:item.id})} selected={item.id === this.state.checkBoxChecked} key={index} style={{backgroundColor:this.bgcolor(item.id === this.state.checkBoxChecked)}}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                    )} />
                </View>
        );
      }
    };