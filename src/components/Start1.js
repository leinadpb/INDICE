import React from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';

import {styles} from '../styles/screens.js'

export class Start1 extends React.Component{
    constructor(props){
        super(props);
        this.AppName = "INDICE APP";
    }
    render(){
        return(
            <View style={styles.general}>
                <View style={thisStyles.AppNameBox}>
                    <Text style={thisStyles.AppNameText}>{this.AppName}</Text>
                    <View style={styles.Content}>
                        <Text style={{marginTop:60, marginLeft:20, marginRight:20}}>Total de créditos dados:</Text>
                        <TextInput style={{marginTop:25, marginLeft:20, marginRight:20}}  />
                    </View>
                    <View style={styles.Content}>
                        <Text style={{marginTop:60, marginLeft:20, marginRight:20}}>Indice General hasta el momento:</Text>
                        <TextInput style={{marginTop:25, marginLeft:20, marginRight:20}}  />
                    </View>
                </View>
                <View style={thisStyles.NextButton}>
                    <Button style={{fontSize:30,padding:10}} title="Continuar" onPress={() => {this.props.navigation.navigate('Start2')}} />
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