import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator, createMaterialTopTabNavigator, withNavigation, createStackNavigator } from 'react-navigation';

import {Icon} from 'react-native-elements';
import {HomeScreen} from "./src/components/HomeScreen.js";
import {AboutScreen} from "./src/components/AboutScreen.js";
import {Start1} from "./src/components/Start1.js";
import {Start2} from "./src/components/Start2.js";
import {TestingLayout} from "./src/components/TestingLayout.js";

import {styles} from './src/styles/headerBar.js'

const RootStack = createStackNavigator(
    {
        // Routes Definitions
        Home:{
            screen: HomeScreen,
            navigationOptions:{
                title: 'INDICE APP',
                backBehavior:'none'
            }
        },
        About:{
            screen:AboutScreen,
            navigationOptions:{
                title: 'About us'
            }
        },
        Start1:{
            screen:Start1,
            navigationOptions:{
                headerRight:null,
            }
        },
        Start2:{
            screen:Start2,
            navigationOptions:{
                headerRight:null,
            }
        },
        TestLayout:{
            screen:TestingLayout,
            navigationOptions:{
                title:"Testing Layout",
                headerRight:null,
            }
        }
    },
    {
        // Stack Navigator General Properties
        initialRouteName: 'TestLayout',
        navigationOptions:{
            headerStyle:{
                backgroundColor: '#03487D',
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