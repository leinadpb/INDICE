import React from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';

import {styles} from '../styles/screens.js'

export class Start2 extends React.Component{
    constructor(props){
        super(props);
        this.AppName = "INDICE APP";
    }
    render(){
        return(
            <View style={styles.general}>
                <View style={thisStyles.AppNameBox}>
                    <Text style={thisStyles.AppNameText}>{this.AppName}</Text>
                    <Text>
                        Ask user personal info...
                    </Text>
                </View>
                <View style={thisStyles.NextButton}>
                    <Button style={{fontSize:30,padding:10}} title="¡Empezar!" onPress={() => {this.props.navigation.navigate('Home')}} />
                </View>
            </View>
        );
    }
}

const thisStyles = StyleSheet.create({
    AppNameBox:{
        marginTop:30,
        flex:1,
    },
    AppNameText:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:30,
    },
    NextButton:{
    },
    Content:{
        marginTop:40,
    }
});