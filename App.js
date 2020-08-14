import React from 'react'
import { StyleSheet, SafeAreaView,Text ,View, StatusBar , Button} from 'react-native'
import {NavigationContainer} from "@react-navigation/native"
import Navigation from "./src/navigation/Navigation"

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar barStyle = "light-content"/>
        <Navigation/>
    </NavigationContainer>
  )
}
