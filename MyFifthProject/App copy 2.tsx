import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <View style = {{width: 50, hieght: 50, backgroundColor: 'red'}}/>
      <View style = {{width: 100, hieght: 100, backgroundColor: 'yellow'}}/>
      <View style = {{width: 100, hieght: 100, backgroundColor: 'blue'}}/>
    </View>
  );
}

