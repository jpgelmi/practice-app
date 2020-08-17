import React, {useState} from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
import colors from "../config/colors"
import { FlatList } from 'react-native-gesture-handler'

export default function RandomColor() {
    const [colors , setColors] = useState([])
    console.log(colors)
    
    return (
        <View style = {styles.container}>
            <Button
                title = "Add a color"
                onPress = {() => {
                setColors([...colors, randomRgb()])
            }}/>
            <FlatList
                showsVerticalScrollIndicator = {false}
                keyExtractor = {(item) => item.id}
                data = {colors}
                renderItem = {({item}) => {
                    return(
                        <View
                            style = {
                                [styles.image, {backgroundColor: item}]}/>
                    )
                }}
            />
        </View>
    )
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return(
        `rgb(${red},${green},${blue})`
    )    
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.secundario,
        flex: 1,
        alignItems: "center"
    },
    image:{
            height: 200,
            width: 200,
            marginVertical: 20,
            borderRadius: 20
        },
})




