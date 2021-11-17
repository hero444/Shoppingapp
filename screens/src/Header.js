import React from 'react';
import { render } from 'react-dom';
import { ImageBackground, StyleSheet, Text, View, Dimensions, SafeAreaView,
FlatList, Image,   } from 'react-native';



export default class Header extends React.Component{

  render() {
    return(

        <View style = {styles.container}>
          <Text style={{fontSize: 40, fontWeight: 'bold', color: 'white'}}>AKWAABA!</Text>
          <Text style={{fontSize: 25, fontStyle: 'italics', color: '#dea'}}>SELECT A PRODUCT</Text>

        
        
          
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aba',
  },
  image:{
    flex: 1,
    padding: 20
  }
})