/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
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
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: 'black'
  };

  return (
    // Try removing the `flex: 1` on the parent View.
    // The parent will not have dimensions, so the children can't expand.
    // What if you add `height: 300` instead of `flex: 1`?
    <View style={{flex: 1, backgroundColor:'black'}}>
      <View style={{flex: 1, backgroundColor: 'black', flexDirection:"row", alignContent:'flex-start', justifyContent:'flex-start'}} /> 
      <Text style={{color:'blue', backgroundColor: 'black', flexDirection:"row", alignContent:'flex-start', justifyContent:'flex-start', marginLeft:15}}>{'\t'}Back</Text>     
   
      <View style={{flex: 2, backgroundColor: 'black', flexDirection:"row", alignContent:'flex-start', justifyContent:'flex-start'}} /> 
      <Text style={[styles.sectionTitle,
      {color:'blueviolet', backgroundColor: 'black', flexDirection:"row", alignContent:'flex-start', justifyContent:'flex-start', marginLeft:50},]
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



     </View>
    
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
    fontSize: 24,
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
});

export default App;
