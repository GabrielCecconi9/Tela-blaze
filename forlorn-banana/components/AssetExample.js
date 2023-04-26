import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
     
      <Image style={styles.logo} source={require('../assets/blaze.png')} />
       <Text style={styles.paragraph}>
         Faca Login em sua conta
         </Text>
      <Text> 
      <Button
    title="LOGIN"
    color=""
    
  />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'black',
    
  
  },
  
  logo: {
    height: 115,
    width: 300,
    marginBottom:500
    
  
  },
   paragraph: {
    margin: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
   }
});
