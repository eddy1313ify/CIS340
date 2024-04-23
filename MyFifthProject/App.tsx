import React from 'react';
import {View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'space-evenly'}}>
      <View style = {{width: 50, hieght: 50, backgroundColor: 'red'}}/>
      <View style = {{width: 50, hieght: 50, backgroundColor: 'white'}}/>
      <View style = {{width: 50, hieght: 50, backgroundColor: 'green'}}/>
    </View>
  );
}

