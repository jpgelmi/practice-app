import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function StylesScreen() {
    return (
        <View style = {styles.parentStyle}>
            <View style = {styles.textStyleOne}/>
            <View style = {styles.textStyleTwo}/>
            <View style = {styles.textStyleTree}/>
        </View>
    )
}

const styles = StyleSheet.create({
    parentStyle:{
        borderWidth:3,
        borderColor:"black",
        height:200,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    textStyleOne:{
        backgroundColor:"red",
        height: 50,
        width:50
    },
    textStyleTwo:{
        backgroundColor: "green",
        height: 50,
        width:50,
        marginVertical:100
    },
    textStyleTree:{
        backgroundColor:"blue",
        height: 50,
        width:50,
        

    }
})
