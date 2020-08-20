import React, {useState}from 'react'
import colors from "../config/colors"
import {Text, View, StyleSheet, TextInput} from "react-native"
import { color } from 'react-native-reanimated'

export default function TextScreen() {
    const[name , setName] = useState("")
    const[psw, setPsw] = useState("")
    console.log(name)

    return (
        <View style = {styles.container}>
            <View style = {styles.textContainer}>
                <Text style = {styles.text}>Ingresa tu nombre...</Text>
                <TextInput
                    style = {styles.input}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    placeholder = "Ingresa texto"
                    value = {name}
                    onChangeText = {(new_value) => setName(new_value)}
                />
                <Text style = {styles.text}>Mi nombre es: {name}</Text>
                <Text style = {[styles.text, {marginTop: 50}]}>Ingresa tu contraseña...</Text>
                <TextInput
                    style = {styles.input}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    placeholder = "Ingresa texto"
                    value = {psw}
                    onChangeText = {(new_value) => setPsw(new_value)}
                />
                {psw.length < 5
                    ?<Text style = {styles.text}>Tu contraseña tiene que ser mayor a cinco</Text>
                    : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor: colors.gris,
        height: 40,
        //width: 100,
        borderWidth: 1,
        borderRadius: 20,
        marginBottom:20
    },
    container:{
        backgroundColor: colors.secundario,
        flex: 1
    },
    textContainer:{
        justifyContent:"center",
        marginHorizontal: 20,
        marginVertical:10
    },
    text:{
        fontWeight: "bold",
        fontSize: 20,
        color: colors.texto
    }
})
