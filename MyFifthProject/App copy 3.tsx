import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style = {{flex: 1, hieght: 50, backgroundColor: 'red'}}/>
      <View style = {{flex: 1, hieght: 100, backgroundColor: 'white'}}/>
      <View style = {{flex: 1, hieght: 100, backgroundColor: 'green'}}/>
    </View>
  );
}

