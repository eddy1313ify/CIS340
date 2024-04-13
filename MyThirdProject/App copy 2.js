import { React } from 'react';
import { Text, Image, View } from 'react-native';

export default  function MyDog() {
  let pic = {url: 'https://github.com/AbdunabiRamadan/CIS340-Images/blob/main/images/dog.png?raw=true' };
  return (
    
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }} >
      <Image source= {pic} 
        style= {{width: 200, height: 200}}

      />
      <Text>
        Hello, I am your Dog!
      </Text>
    </View>
  );
}

