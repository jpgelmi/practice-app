import React from 'react'
import { StyleSheet, SafeAreaView,Text ,View, StatusBar , Button} from 'react-native'
import TextComponent from "./src/components/TextComponent"
import ListScreen from "./src/components/ListComponent"

export default function App() {
  return (
    <SafeAreaView style = {styles.container}>
      <StatusBar barStyle = "light-content"/>
        <Text style = {styles.text}>Veces apretadas: </Text>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#001f3f",
    flexDirection: "row",
    flex: 1,
    justifyContent:"center"
  },
  text:{
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 25
  }
})
