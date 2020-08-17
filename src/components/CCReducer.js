import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native'
import colors from "../config/colors"

export default function ColorCounter(props) {

const {color,onIncrementar, onDisminuir} = props

//Se puede llamar a la funcion de las dos maneras
    return (
        <View style = {styles.container}>
            <Text style = {[styles.textContainer, {color: `${color}`}]}>{color}</Text>
            <TouchableOpacity onPress = {() => onIncrementar()}>
                <Text style = {[styles.text, {color: `${color}`}]}>
                    {`Aumentar ${color}`}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {onDisminuir}>
                <Text style = {[styles.text, {color: `${color}`}]}>
                    {`Disminuir ${color}`}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.secundario,
        flex: 1,
        alignItems: "center"
    },
    textContainer:{
        marginVertical: 10,
        fontSize: 22,
    },
    text:{
        fontSize:22,
        fontWeight:"bold",
    }
})



