/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import  { Component, useEffect, useState} from "react";
import RNFetchBlob from "rn-fetch-blob";
import type {PropsWithChildren} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  Keyboard,
   Platform,
    KeyboardAvoidingView, 
    TouchableWithoutFeedback,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {



  

  return (

    <ScrollView>
    <View style={{flex: 1, backgroundColor:'black'}}>
      <View style={{flex: 1, marginTop:10, backgroundColor: 'black', flexDirection:"row", alignContent:'flex-start', justifyContent:'flex-start'}} /> 
      <Text style={{color:'blue', fontSize:17, backgroundColor: 'black', flexDirection:"row", alignContent:'flex-start', justifyContent:'flex-start', marginLeft:15}}>{'\t'}Back</Text>     
   
      <View style={{flex: 2, marginTop:80, backgroundColor: 'black', flexDirection:"row", alignContent:'center', justifyContent:'center'}} /> 
      <Text style={[styles.sectionTitle,
      {color:'blueviolet', backgroundColor: 'black', flexDirection:"row", alignContent:'center', justifyContent:'center', marginLeft: 40, marginBottom:50, marginTop:-15},]
      }>{'\t'}Discord pic generator</Text>     

   <View style={{flex:3, backgroundColor: 'black', flexDirection:"row", alignContent:"flex-start"}} > 
   <TouchableOpacity style={{width:110, height:44, marginLeft:20}}><Button color={'darkorchid'} title='Generate'></Button></TouchableOpacity>
   <TextInput
          placeholder="enter image url"
          placeholderTextColor={"white"}
          keyboardAppearance="default"
          style={styles.placeholder}
        ></TextInput>
        
</View>



<View style={{ marginBottom:10, backgroundColor: 'black', flexDirection:"row", alignContent:"flex-start"}} >
  <Text style={{fontSize:15, color:'mediumslateblue', backgroundColor: 'black', flexDirection:"row", alignContent:"flex-start", justifyContent:'flex-start', marginLeft:19, marginBottom:20, marginTop:20}}>Choose effect:</Text>
  <TouchableOpacity style={{width:40, height:40, marginLeft:13,marginTop:15,}}><Button color={'slateblue'} title='1'></Button></TouchableOpacity>
  <TouchableOpacity style={{width:40, height:40, marginLeft:15, marginTop:15}}><Button color={'slateblue'} title='2'></Button></TouchableOpacity>
  <TouchableOpacity style={{width:40, height:40, marginLeft:15, marginTop:15}}><Button color={'slateblue'} title='3'></Button></TouchableOpacity>
  <TouchableOpacity style={{width:40, height:40, marginLeft:15, marginTop:15}}><Button color={'slateblue'} title='4'></Button></TouchableOpacity>
  <TouchableOpacity style={{width:40, height:40, marginLeft:15, marginTop:15}}><Button color={'slateblue'} title='5'></Button></TouchableOpacity>


</View>

<Image
           source={require('./img/stitch.jpg')}
           resizeMode="contain"
           style={styles.image}
         ></Image>

         
<View style={{flex:4, backgroundColor: 'black', flexDirection:"row", alignContent:"flex-start", marginTop:40}} > 
   <TouchableOpacity style={{width:77, height:44, marginLeft:20}}><Button color={'mediumslateblue'} title='Send'></Button></TouchableOpacity>
   <TextInput
          placeholder="enter email"
          placeholderTextColor={"white"}
          keyboardAppearance="default"
          style={styles.placeholder}
        ></TextInput>
</View>


<View style={{flex:5, backgroundColor: 'black', flexDirection:"row", alignContent:"center", justifyContent:"center"}} > 
   <TouchableOpacity style={{width:110, height:44, marginRight:20, marginTop:30}}><Button color={'slateblue'} title='Download'></Button></TouchableOpacity>
   
</View>



     </View>

<View style={{width:'100%', height:80, backgroundColor:'black'}}>

</View>

     </ScrollView>

    
  );
};


const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor:'black',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: '600',
    backgroundColor:'black'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  placeholder: {
    color: "white",
    height: 40,
    width: 214,
    backgroundColor: "rgba(14,14,14,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    justifyContent:'center',
    marginLeft:30
  },
  image: {
    width: 260,
    height: 260,
    alignContent:'center',
    justifyContent:'center',
    alignSelf:'center'
   // marginTop: 300,
    //backgroundColor: "red"
  },
 
});

export default App;
