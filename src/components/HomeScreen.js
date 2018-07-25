import React from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';

import {styles} from '../styles/screens.js'

export class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.AppName = "INDICE APP";
    }
    render(){
        return(
            <View style={styles.general}>
                <Text>
                    Home Screen - {this.AppName}
                </Text>
            </View>
        );
    }
}
