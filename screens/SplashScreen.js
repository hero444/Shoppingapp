import React from "react";
import {ImageBackground, StyleSheet, SafeAreaView, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";


export default function SplashScreen(params) {
  const navigation = params.navigation;
  

  const splash_img = {uri: "https://cdn.pixabay.com/photo/2018/02/24/20/39/clock-3179167__340.jpg"}
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground source={require('./mkt.jpg')} resizeMode="cover" style={styles.image}>

    <Text style={{ fontSize: 30, color: "grey", backgroundColor: 'orange' }}>Welcome to</Text>
      <Text style={{ fontSize: 40, fontWeight: "bold", color:"white" }}>STREET MARKET</Text>


    <TouchableOpacity
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
         // flexDirection: "row",
          backgroundColor: "transparent",
          
          
        }}
      >
      
        <Text style={{ justifyContent: 'center', color: "white", backgroundColor: 'black', fontSize:25 }}>SHOP NOW!</Text>
      </TouchableOpacity>
     
    </ImageBackground>


   
  </SafeAreaView>
  )};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});

