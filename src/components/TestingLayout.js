import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Button, Icon} from 'react-native-elements';

export class TestingLayout extends  React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topBox}>
                    <Image
                        resizeMode="cover"
                        source={ require('../img/indice-app-logo.png') }
                        style={styles.logo}
                    />
                </View>
                <View style={styles.middleBox}>
                    <View>
                        <Text style={styles.text}>Por favor, rellene los campos</Text>
                        <View style={styles.getInfoBox}>
                            <View style={styles.labels}>
                                <Text>Labels...</Text>
                            </View>
                            <View style={styles.fields}>
                                <Text>
                                    Fields...
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomBox}>
                    <Button
                        rightIcon={{
                            name:'arrow-forward',
                            type:'Foundation',
                            size:30,
                            color:'white',
                        }}
                        title="EMPEZAR"
                        titleStyle={{ fontWeight: "bold" }}
                        buttonStyle={{
                            backgroundColor: "#03487D",
                            width: 300,
                            height: 45,
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'white',
      flexDirection:'column',
  },
    topBox:{
        flex:3,
        backgroundColor:'white',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    middleBox:{
        flex:8,
        backgroundColor:'#105A8E',
        justifyContent:'center',
        alignItems:'center'
    },
    bottomBox:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        marginTop:20,
    },
    logo:{
      flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:25,
        width:240,
        marginTop:5,
        marginBottom:5,
    },
    getInfoBox:{
      flex:2,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        padding:0,
    },
    labels:{
        flex:3,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
    },
    fields:{
        flex:6,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
    }
});