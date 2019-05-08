import React, { Component } from 'react';
import {StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    View,Modal,TouchableHighlight } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { Permissions, Notifications } from 'expo';

export class ModalScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
        if(this.state.modalVisible== true){
            this.fecthdate("ahsdljkahjdadjs")
        }
      }
      fecthdate=(param)=>{
          return param
      }
      render() {
        return (
            <View style={styles.container}>
              <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true)
          }}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
              <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
                <Text>Hello World! {this.fecthdate()}</Text>
                <TouchableHighlight
                    onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Text>Hide Modal</Text>
                </TouchableHighlight>
            </View>
          </View>
        </Modal>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
    });