import { React } from 'react';
import { Text, TextComponent, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text> Hey, My Name is {props.name}, I am a student in CIS340!</Text>
      
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }} >
      <Text>
        Welcome to CIS340!
      </Text>
      <Student name = "Eddy Martinez"/>
      <Student  name = "James Brown"/>
      <Student name = "Bob Clark"/>
      <Student name = "Alexie Hostetler"/>
    </View>
  );
}

