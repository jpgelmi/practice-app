import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function NumberComponent() {
    return (
        <View>
            <Text style = {styles.text}>Veces apretadas: </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 25
  }
})
