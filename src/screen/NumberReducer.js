import React, {useReducer} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import colors from "../config/colors"

const reducer = (state, action) => {
    //state === {count: int}
    //changeState === {type: "incrementar" || "decrementar", payload. 1}

    switch(action.type){
        case "incrementar":
            return {...state, count: state.count + action.payload}
        case "disminuir":
            return {...state, count: state.count - action.payload}
        default:
            return state;
    }
}

export default function NumberComponent() {
    const[state, dispatch] = useReducer(reducer, { count: 0 }) 

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Veces apretadas: {state.count}</Text>
            <Button title = "Incrementar" onPress = {() => {
               dispatch({type: "incrementar", payload: 1})
            }}/>
            <Button title = "Disminuir" onPress = {() => {
               dispatch({type: "disminuir", payload: 1})
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
