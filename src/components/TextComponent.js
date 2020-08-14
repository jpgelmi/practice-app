import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function TextComponent() {
    let nombre = "Juan Pablo Gelmi"

    return (
        <View style = {styles.TextContainer}>
            <Text style = {[styles.text, {fontWeight: "bold"}]}>Hola! Esta es la primera App del curso </Text>
            <Text style = {styles.text}>Mi nombre es {nombre}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    TextContainer:{
        paddingHorizontal: 15,
        paddingVertical: 20,
        justifyContent:"center"
    },
    text:{
        fontSize: 20,
        color: "#fff",
    }
})
