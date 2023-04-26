import * as React from 'react';
import { Text, View, StyleSheet, Image, Button,SafeAreaView,TextInput } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
     
      <Image style={styles.logo} source={require('../assets/blaze.png')} />
       <Text style={styles.paragraph}>
         <SafeAreaView>
      <TextInput
        style={styles.input}
        value={Number}
        placeholder="senha"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={Number}
        placeholder="senha"
        keyboardType="numeric"
      />
    </SafeAreaView>
         </Text>
      <Text> 
      <Button
     title="Entrar"
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
    marginBottom:200
    
  
  },
   paragraph: {
    margin: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
   },
  
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white"
    
  }

});
