import React from 'react'
import { StyleSheet, Text, View , FlatList} from 'react-native'

export default function ListComponent() {
    const amigos = [
        {name: "Juan Pablo", age: 17},
        {name: "Andres", age: 9},
        {name: "Horacio", age: 18},
        {name: "Juan Enrique", age: 17},
        {name: "Santiago", age: 18},
    ]

    return(
    <FlatList
        data = {amigos}
        showsVerticalScrollIndicator = {false}
        renderItem = {({item}) => {
            return(
                <View style = {styles.textContainer}>
                    <Text style = {styles.textStyle}>{item.name}</Text>
                    <Text style = {[styles.textStyle,{fontWeight: "normal"}]}>{item.age}</Text>
                </View>
            )
        }}
    />
    )
}
const styles = StyleSheet.create({
    textContainer:{
        backgroundColor: "#333333",
        marginVertical: 5,
        paddingVertical: 15,
        alignItems: "center",
        marginHorizontal: 30,
        borderRadius: 20
    },
    textStyle:{
        marginVertical: 10,
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    }
})
