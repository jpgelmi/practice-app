import React from 'react'

import ListComponent from "../screen/ListComponent"
import NumberComponent from "../screen/NumberComponent"
import TextComponent from "../screen/TextComponent"
import HomeScreen from "../screen/HomeScreen"

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator>
             <Stack.Screen
                name = "home"
                component = {HomeScreen}
                options = {
                    {title: "Home screen",
                    headerStyle: {
                        backgroundColor: "red"},
                    headerTintColor: "green",
                    headerTransparent: false}
                }/>
             <Stack.Screen
                name = "list"
                component = {ListComponent}
                options = {
                    {title: "ListComponent",
                    headerStyle:{
                        backgroundColor: "red"},
                    headerTintColor: "green",
                    headerTransparent: false}
                }/>
             <Stack.Screen
                name = "text"
                component = {TextComponent}
                options = {
                    {title: "ListComponent",
                    headerStyle:{
                        backgroundColor: "red"},
                    headerTintColor: "green",
                    headerTransparent: false}
                }/>
             <Stack.Screen
                name = "number"
                component = {NumberComponent}
                options = {
                    {title: "ListComponent",
                    headerStyle:{
                        backgroundColor: "red"},
                    headerTintColor: "green",
                    headerTransparent: false}
                }/>
        </Stack.Navigator>
    )
}

