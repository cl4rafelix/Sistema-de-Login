 import { useState } from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

  
export default function ForgotScreen() {
  const [passwordField, setPasswordField]=useState('')
  const [confirmPasswordField, setConfirmPasswordField]=useState('')
  const resetedPassword = () => {
    alert('Senha redefinida com sucesso')
  }

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./estetica.jpg')}/>
        <Text style={styles.h1}>Redefinição de senha</Text>
        <Text style={styles.h2}>Digite sua nova senha abaixo.</Text>
         
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput style={styles.inputField} placeholder='Digite sua senha'
           style={styles.inputField}
           placeholder='Digite sua senha'
           placeholderTextColor='#d1d1d1'
           value={passwordField}
           onChangeText={t => setPasswordField(t)}
           autoCapilize='none'
           secureTextEntry
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Confirme sua Senha</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='*Redigite sua senha' 
            placeholderTextColor='#d1d1d1'
            value={confirmPasswordField}
            onChangeText={t => setConfirmPasswordField(t)}
            autoCapitalize='none'
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={resetedPassword}>
          <Text style={styles.buttonText}>Redefinir</Text>
        </TouchableOpacity>
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
  logo: {
    width: 230,
    height: 150,
  },
   h1: {
    color: '#000',
    fontSize: 27,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  h2: {
    color: '#777',
    fontSize: 16,
  },

   inputArea: {
    width: '100%',
    paddingTop: 20,
  },
  inputLabel: {
    color: '#777',
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 7,
  },
  inputField: {
    color: '#999',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#ddd',
    fontSize: 15,
    padding: 10,
  },
   button: {
    backgroundColor: '#ff69b4',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginVertical: 20
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
  
  },
})