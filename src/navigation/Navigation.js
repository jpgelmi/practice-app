import React from 'react'

import ListComponent from "../screen/ListComponent"
import NumberComponent from "../screen/NumberComponent"
import TextComponent from "../screen/TextComponent"
import HomeScreen from "../screen/HomeScreen"
import RandomColor from "../screen/RandomColor"
import ColorAdjuster from "../screen/ColorAdjuster"
import CAReducer from "../screen/CAReducer"
import NumberReducer from "../screen/NumberReducer"
import TextScreen from "../screen/TextScreen"

import colors from "../config/colors"

import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated'

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator>
             <Stack.Screen
                name = "home"
                component = {HomeScreen}
                options = {
                    {title: "Practice App",
                    headerStyle: {
                        backgroundColor: colors.principal},
                    headerTintColor: colors.texto,
                    headerTransparent: false}
                }/>
             <Stack.Screen
                name = "list"
                component = {ListComponent}
                options = {
                    {title: "ListComponent",
                    headerStyle:{
                        backgroundColor: colors.principal},
                    headerTintColor: colors.texto,
                    headerTransparent: false}
                }/>
             <Stack.Screen
                name = "text"
                component = {TextComponent}
                options = {
                    {title: "ListComponent",
                    headerStyle:{
                        backgroundColor: colors.principal},
                    headerTintColor: colors.texto,
                    headerTransparent: false}
                }/>
             <Stack.Screen
                name = "number"
                component = {NumberComponent}
                options = {
                    {title: "ListComponent",
                    headerStyle:{
                        backgroundColor: colors.principal},
                    headerTintColor: colors.texto,
                    headerTransparent: false}
                }/>
            <Stack.Screen
                name = "color"
                component = {RandomColor}
                options = {
                    {title: "RandomColor",
                    headerStyle:{
                        backgroundColor: colors.principal},
                    headerTintColor: colors.texto,
                    headerTransparent: false}
                }/>
            <Stack.Screen
                name = "colorAdd"
                component = {ColorAdjuster}
                options = {
                    {title: "RandomColor",
                    headerStyle:{
                        backgroundColor: colors.principal},
                    headerTintColor: colors.texto,
                    headerTransparent: false}
                }/>
            <Stack.Screen
                name = "colorReducer"
                component = {CAReducer}
                options = {
                    {title: "colorAdd-Reducer",
                    headerStyle:{
                        backgroundColor: colors.principal},
                    headerTintColor: colors.texto,
                    headerTransparent: false}
                }/>
            <Stack.Screen
                name = "numberReducer"
                component = {NumberReducer}
                options = {
                    {title: "NumberCounter-Reducer",
                    headerStyle:{
                        backgroundColor: colors.principal},
                    headerTintColor: colors.texto,
                    headerTransparent: false}
                }/>
            <Stack.Screen
                name = "input"
                component = {TextScreen}
                options = {
                    {title: "Text input",
                    headerStyle:{
                        backgroundColor: colors.principal},
                    headerTintColor: colors.texto,
                    headerTransparent: false}
                }/>
        </Stack.Navigator>
    )
}

