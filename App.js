import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import Cafe from './src/components/Cafe';
import PizzaTranslator from './src/components/PizzaTranslator';

const App = () => {
  return (
    <ScrollView style={{
      paddingTop: 40,
      paddingBottom: 40,
      paddingLeft: 10,
      paddingRight: 10,
    }}>
      <View style={{
        gap: 20,
      }}>
        <Text style={{ textAlign: 'center' }}>Welcome to the cafe!</Text>
        <Cafe />
        <PizzaTranslator />
      </View>
    </ScrollView>
  );
};

export default App;