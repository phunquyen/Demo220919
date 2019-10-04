import React, { Component } from 'react'
import {ImageBackground,View,StyleSheet,Text} from 'react-native'
import { Avatar, } from 'react-native-elements';


export default class Footer extends Component {
    render() {
        return (
            <View style={styles.Header}>
                <Text style ={styles.text}>Hôm nay 12/09/2019</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Header:{
        flex:1,
    },
    text:{
        fontSize:16,
        fontWeight:'bold'
    }
    
})