import React, {useReducer} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import colors from "../config/colors"

const reducer = (state, changeState) => {
    //state === {count: int}
    //actrion === {type: "incrementar" || "decrementar", payload. 1}

    switch(callReducer.type){
        case "incrementar":
            return {...state, count: state.count + callReducer.payload}
        case "disminuir":
            return {...state, count: state.count - callReducer.payload}
        default:
            return state;
    }
}

export default function NumberComponent() {
    const[state, callReducer] = useReducer(reducer, { count: 0 }) 

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Veces apretadas: {state.count}</Text>
            <Button title = "Incrementar" onPress = {() => {
               callReducer({type: "incrementar", payload: 1})
            }}/>
            <Button title = "Disminuir" onPress = {() => {
               callReducer({type: "disminuir", payload: 1})
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.secundario,
        flex:1
    },
    text:{
    color: colors.texto,
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 25,
    marginHorizontal: 10
  }
})
