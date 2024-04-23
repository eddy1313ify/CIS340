import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: 'row', marginTop:100}}>
      <View style = {{width: 50, hieght: 50, backgroundColor: 'red'}}/>
      <View style = {{width: 50, hieght: 50, backgroundColor: 'white'}}/>
      <View style = {{width: 50, hieght: 50, backgroundColor: 'green'}}/>
    </View>
  );
}

