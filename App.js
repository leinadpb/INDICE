import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import {Icon} from 'react-native-elements';
import {HomeScreen} from "./src/components/HomeScreen.js";
import {AboutScreen} from "./src/components/AboutScreen.js";

import {styles} from './src/styles/headerBar.js'

const RootStack = createStackNavigator(
    {
        // Routes Definitions
        Home:{
            screen: HomeScreen,
            navigationOptions:{
                title: 'INDICE APP'
            }
        },
        About:{
            screen:AboutScreen,
            navigationOptions:{
                title: 'About us'
            }
        }
    },
    {
        // Stack Navigator General Properties
        initialRouteName: 'Home',
        navigationOptions:{
            headerStyle:{
                backgroundColor: '#3e70c1',
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
                fontWeight:'bold',
            },
            headerRight:(
                <Icon
                    name='settings'
                    type='Feather'
                    size={30}
                    color='white'
                    onPress={() => this.alert('Configuration screen.')}
                    style={styles.configButton}
                />
            ),
            
        },
    }
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}