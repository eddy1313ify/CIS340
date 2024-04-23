import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: "https://www.google.com/imgres?q=csu%20logo%20png&imgurl=https%3A%2F%2Fbrand.colostate.edu%2Fwp-content%2Fuploads%2Fsites%2F47%2F2024%2F03%2FCSU-Symbol-r-K.png&imgrefurl=https%3A%2F%2Fbrand.colostate.edu%2Fsymbol%2F&docid=aysnpftoUzvl3M&tbnid=QP0vN-C_SiHEVM&vet=12ahUKEwjKsOj2gdmFAxU2FjQIHeyzBZQQM3oECHEQAA..i&w=1200&h=1200&hcb=2&ved=2ahUKEwjKsOj2gdmFAxU2FjQIHeyzBZQQM3oECHEQAA"
    
  };

  return (
    <View style={styles.container}>
     
      <Image
        style ={styles.localCSULogo}
        source = {require('./assets/CSULogo.png')}
      />
      <Image
        stlye={styles.urlCSULogo}
        source = {{
          uri: "https://www.google.com/imgres?q=csu%20logo%20png&imgurl=https%3A%2F%2Fbrand.colostate.edu%2Fwp-content%2Fuploads%2Fsites%2F47%2F2024%2F03%2FCSU-Symbol-r-K.png&imgrefurl=https%3A%2F%2Fbrand.colostate.edu%2Fsymbol%2F&docid=aysnpftoUzvl3M&tbnid=QP0vN-C_SiHEVM&vet=12ahUKEwjKsOj2gdmFAxU2FjQIHeyzBZQQM3oECHEQAA..i&w=1200&h=1200&hcb=2&ved=2ahUKEwjKsOj2gdmFAxU2FjQIHeyzBZQQM3oECHEQAA"
        }}
      />

      <Image 
      style={styles.stretchLogo}
      source = {csuLogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop: 50,
  },

  localCSULogo: {
   width: 55,
   height: 65, 
  },

  urlCSULogo: {
    width: 50,
    hieght: 50
  },
  stretchLogo: {
   
    height: 200,
    resizeMode:'center',
  }
});
