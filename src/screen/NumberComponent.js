import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import colors from "../config/colors"
import { color } from 'react-native-reanimated'

export default function NumberComponent() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Veces apretadas: </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.secundario,
        flex:1
    },
    text:{
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 25,
    marginHorizontal: 10
  }
})
