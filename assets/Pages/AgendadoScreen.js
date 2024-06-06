 import { useState } from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'


export default function AgendadoScreen() {
  
  

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
      <Image source={require('./pessoa.jpg')} style={styles.pessoa}/>
        <Text style={styles.logado}>Logado com sucesso</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  container: {
    alignItems: 'center'
  },
  logado:{
    fontSize: 20,
    fontWeight: 'bold',

  },
  pessoa:{
    marginTop: 50,
  }
})