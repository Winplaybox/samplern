import React, { Component } from 'react';
import {StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
    NativeModules,
    Alert,
    View, } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          hello: 'Hello world',
          change: 'Change language',
        },
      },
      sv: {
        translation: {
          hello: 'Hej världen',
          change: 'Byt språk',
        },
      },
    },
  });
export class TranslateScreen extends React.Component {
  
  
      render() {
        const { t, i18n } = useTranslation();
        return (
          <View style={styles.container}>
          <Text style={styles.hello}>{t('hello')}</Text>
          <TouchableOpacity onPress={() => i18n.changeLanguage(i18n.language === 'sv' ? 'en' : 'sv')}>
            <Text>{t('change')}</Text>
          </TouchableOpacity>
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
      hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      date: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      number: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      button: {
        textAlign: 'center',
        backgroundColor: '#dddddd',
        padding: 15,
        marginTop: 20
      }
    });