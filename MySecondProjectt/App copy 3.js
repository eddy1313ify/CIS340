import { React } from 'expo-status-bar';
import { Text, TextInput, View} from 'react-native';

export default function MyApp() {
  

  return (
    <View>
    <Text>  
    {"\n\n\n\n\n\n\n"}
      Hello, I am a student in CIS340! {"\n"}
    </Text>

    <TextInput 
    style = {{
      hieght: 40,
      borderColor: "blue",
      borderWidth: 1
    }}
    defaultValue = "Enter Input" />
    </View>
  );
}


