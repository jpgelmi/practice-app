import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import colors from "../config/colors"
import { color } from 'react-native-reanimated'

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
        justifyContent:"center",
        backgroundColor: colors.secundario,
        flex: 1
    },
    text:{
        fontSize: 20,
        color: "#fff",
    }
})
