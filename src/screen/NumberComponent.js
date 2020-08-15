import React, {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import colors from "../config/colors"

export default function NumberComponent() {
    const[contador, setContador] = useState(0)

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Veces apretadas:{contador}</Text>
            <Button title = "Incrementar" onPress = {() => {
                setContador(contador + 1)
            }}/>
            <Button title = "Disminuir" onPress = {() => {
                setContador(contador - 1)
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
