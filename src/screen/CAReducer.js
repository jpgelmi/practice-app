import React, {useReducer} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ColorCounter from "../components/CCReducer"

import colors from "../config/colors"

const COLOR_INC = 15

const reducer = (state, action) => {
    switch(action.colorToChange){
        case "red":
            return { ...state, red: state.red + action.cantidad }
        case "green":
            return { ...state, green: state.green + action.cantidad }
        case "blue":
            return { ...state, blue: state.blue + action.cantidad }
        default:
            return state;
    }
}

export default function ColorAdjuster() {
    const[state, runReducer] = useReducer(reducer, {red: 0, green: 0, blue:0})
    const {red, green, blue} = state

    return (
        <View style = {styles.container}>
            <ScrollView showsVerticalScrollIndicator = {false}>
                <ColorCounter
                    onIncrementar = {() => runReducer({ colorToChange: "red", cantidad: COLOR_INC}) }
                    onDisminuir = {() => runReducer({ colorToChange: "red", cantidad: -1 * COLOR_INC}) }
                    color = "red"/>
                <ColorCounter
                    onIncrementar = {() => runReducer({ colorToChange: "green", cantidad: COLOR_INC}) }
                    onDisminuir = {() => runReducer({ colorToChange: "green", cantidad: -1 * COLOR_INC}) }
                    color = "blue"/>
                <ColorCounter
                    onIncrementar = {() => runReducer({ colorToChange: "blue", cantidad: COLOR_INC}) }
                    onDisminuir = {() => runReducer({ colorToChange: "blue", cantidad: -1 * COLOR_INC})  }
                    color = "green"/>
                <View style = {{
                    height: 200,
                    width:200,
                    borderRadius: 20,
                    marginVertical: 50,
                    backgroundColor: `rgb(${red},${green},${blue})`}}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.secundario,
        alignItems: "center"   
    }
})
