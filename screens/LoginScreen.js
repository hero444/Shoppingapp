import React from "react";
import { SafeAreaView, Text, Image, TextInput, TouchableOpacity,StyleSheet, ImageBackground, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/MaterialIcons';

  export default function LoginScreen(params) {
  
  const navigation = params.navigation;


  
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber ] = React.useState(null);

 

  return (
    <SafeAreaView style={styles.container}>
       <View style={{ paddingHorizontal: 20,
    //marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between', backgroundColor:'black'}}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} color='white'/>
        <Icon name="shopping-cart" size={28} color="white" />
      </View>
      <ImageBackground source={require('./shop.jpg')} resizeMode="cover" style={styles.image}>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter Email or username"
        
      />
      <TextInput
        style={styles.inputt}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter password"
        secureTextEntry={true}
       
       
      />
      
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
        style={{
          padding: 15,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
         // flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        
        <Text style={{ justifyContent:"center", color: "white", fontSize:23, }}>Login</Text>
      </TouchableOpacity>
      <Text style={{ justifyContent:"center",alignItems:"center", color: "black", fontSize:23, }}>Forgot Password?</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems:"center"
    
  },
  
  container: {
    flex: 1,
    justifyContent: "flex-end",
    
  },
    input: {
      height: 40,
      margin: 10,
      borderWidth: 3,
      borderRadius:10,
      padding: 10,
      borderColor: 'white',
      backgroundColor:"white",
      color:"black",
      fontSize:20

      
    },
    inputt: {
      height: 40,
      margin: 10,
      borderWidth: 3,
      borderRadius:10,
      padding: 10,
      borderColor: 'white',
      color:"black",
      backgroundColor:"white",
      fontSize:20
     
    }
});



