import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
     
      <Image style={styles.logo} source={require('../assets/Telablaze.png')} />
       <Text style={styles.paragraph}>
        
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
    height: 770,
    width: 400,
    
    
  
  },
   paragraph: {
    margin: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
   }
});