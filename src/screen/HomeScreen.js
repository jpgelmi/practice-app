import React from 'react'
import { StyleSheet, View, Button } from 'react-native'


export default function HomeScreen(props){
    const {navigation} = props
    return (
        <View>
            <Button
                title = "List Component"
                onPress = {() => navigation.navigate("list")}/>
            <Button
                title = "Text Component"
                onPress = {() => navigation.navigate("text")}/>
            <Button
                title = "Number Component"
                onPress = {() => navigation.navigate("number")}/>
        </View>
    )
}

const styles = StyleSheet.create({})
