import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function ColorCounter({color, onIncrementar, onDisminuir}) {

//Se puede llamar a la funcion de las dos maneras
    return (
        <View>
            <Text>{color}</Text>
            <Button
                title = {`Aumentar ${color}`}
                onPress = {() => onIncrementar()}/>
            <Button
                title = {`Disminuir ${color}`}
                onPress = {onDisminuir}/>
        </View>
    )
}

const styles = StyleSheet.create({})



