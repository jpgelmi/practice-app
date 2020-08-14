import React from 'react'
import { StyleSheet, Text, View , FlatList} from 'react-native'
import colors from "../config/colors"
import { color } from 'react-native-reanimated'

export default function ListComponent() {
    const amigos = [
        {name: "Juan Pablo", age: 17},
        {name: "Andres", age: 9},
        {name: "Pepito", age: 18},
        {name: "Juanito", age: 17},
        {name: "Fulanito", age: 18},
    ]

    return(
    <View style = {styles.container}>
    <FlatList
        data = {amigos}
        showsVerticalScrollIndicator = {false}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => {
            return(
                <View style = {styles.textContainer}>
                    <Text style = {styles.textStyle}>{item.name}</Text>
                    <Text style = {[styles.textStyle,{fontWeight: "normal"}]}>{item.age}</Text>
                </View>
            )
        }}
    />
    </View>
    )
}
const styles = StyleSheet.create({
    container:{
          backgroundColor: colors.secundario,
          flexDirection: "row",
          flex: 1,
          justifyContent:"center"
        },
    textContainer:{
        backgroundColor: colors.gris,
        marginVertical: 5,
        paddingVertical: 15,
        alignItems: "center",
        marginHorizontal: 30,
        borderRadius: 20
    },
    textStyle:{
        marginVertical: 10,
        color: colors.texto,
        fontSize: 20,
        fontWeight: "bold"
    }
})
