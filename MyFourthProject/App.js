import React from 'react';
import { Text, Image, ScrollView } from 'react-native';


export default function MyScrollViewApp(){

  const dog = {
    uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/mydog.jpg',
    width: 64,
    height: 64
  };
  return (
    <ScrollView> 
      <Text style={{fontSize: 80}}>  Try to Scroll down</Text>
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Text style={{fontSize: 80}}>  Try to Scroll down again, if you like</Text>
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Text style={{fontSize: 80}}>  Try to Scroll down again, if you like</Text>
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Text style={{fontSize: 80}}>  Try to Scroll down</Text>
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Text style={{fontSize: 80}}>  React Native components!</Text>
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
      <Image source = {dog} />
    </ScrollView>
  );

}

