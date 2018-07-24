import React from 'react';
import { Text, View, Button } from 'react-native';

import {styles} from '../styles/screens.js'

export class AboutScreen extends React.Component{
    render(){
        return(
            <View style={styles.general}>
                <Text>
                    About us!
                </Text>
                <Button title="Go to back!" onPress={() => {this.props.navigation.goBack()}} />
            </View>
        );
    }
}