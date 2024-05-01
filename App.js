import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import Cafe from './src/components/Cafe';
import PizzaTranslator from './src/components/PizzaTranslator';
import FlatListBasics from './src/components/FlatListBasics';
import SectionListBasics from './src/components/SectionListBasics';

const App = () => {
  return (
    <>
      <View style={{
        paddingTop: 40,
        // paddingBottom: 40,
        paddingLeft: 10,
        paddingRight: 10,
        gap: 20,
      }}>
        <Text style={{ textAlign: 'center' }}>Welcome to the cafe!</Text>
        <Cafe />
        <PizzaTranslator />
      </View>
      {/* <FlatListBasics /> */}
      <SectionListBasics />
    </>
  );
};

export default App;