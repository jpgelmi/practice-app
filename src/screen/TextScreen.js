import React from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native'

export default function TextScreen() {
    return (
        <View>
            <TextInput
                style = {styles.input}
                autoCapitalize = "none"
                autoCorrect = {false}
                placeholder = "Ingresa texto"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor: "black",
        borderWidth: 1
    }
})
