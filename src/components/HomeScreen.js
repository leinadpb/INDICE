import React from 'react';
import { Text, View, Button } from 'react-native';

import {styles} from '../styles/screens.js'

export class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.general}>
                <Text>
                    Home Screen
                </Text>
                <Button title="Go to About us" onPress={() => {this.props.navigation.navigate('About')}} />
            </View>
        );
    }
}