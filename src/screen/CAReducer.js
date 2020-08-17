import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ColorCounter from "../components/CCReducer"

import colors from "../config/colors"

const COLOR_INC = 15

export default function ColorAdjuster() {
    const[red, setRed] = useState(0)
    const[green, setGreen] = useState(0)
    const[blue, setBlue] = useState(0)

    const setColor = (color, change) => {
        //color === red, green, blue
        //change === + 15, - 15

        switch(color){
            case "red":
                red + change > 225 || red + change < 0 ? null : setRed(red + change);
                return;
            case "green":
                green + change > 225 || green + change < 0 ? null : setGreen(geen+ change);
                return;
            case "blue":
                blue + change > 225 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        }
    }

    return (
        <View style = {styles.container}>
            <ScrollView showsVerticalScrollIndicator = {false}>
                <ColorCounter
                    onIncrementar = {() => setColor("red", COLOR_INC)}
                    onDisminuir = {() => setColor("red", -1 * COLOR_INC)}
                    color = "red"/>
                <ColorCounter
                    onIncrementar = {() => setColor("blue", COLOR_INC)}
                    onDisminuir = {() => setColor("blue" , -1 * COLOR_INC)}
                    color = "blue"/>
                <ColorCounter
                    onIncrementar = {() => setColor("green", COLOR_INC)}
                    onDisminuir = {() => setColor("green", -1 * COLOR_INC)}
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
