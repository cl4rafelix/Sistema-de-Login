 import { useState } from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

  
export default function RegisterScreen() {
  const [emailField, setEmailField]=useState('')
  const [passwordField, setPasswordField]=useState('')
  const [cpfField, setCpfField] = useState('')
  const registred = () => {
      alert('Conta cadastrada com sucesso')
    }
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./estetica.jpg')}/>
        <Text style={styles.h1}>Cadastro de conta</Text>
        <Text style={styles.h2}>Digite suas informações abaixo.</Text>
         
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput style={styles.inputField} placeholder='Digite seu email'
           style={styles.inputField}
           placeholder='Digite seu email'
           placeholderTextColor='#d1d1d1'
           value={emailField}
           onChangeText={t => setEmailField(t)}
           autoCapilize='none'
           keyboardType= 'email-addres'
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Digite sua Senha</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='**********' 
            placeholderTextColor='#d1d1d1'
            value={passwordField}
            onChangeText={t => setPasswordField(t)}
            autoCapitalize='none'
            secureTextEntry
          />
        </View>

         <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Digite seu CPF</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='000.000.000-00' 
            placeholderTextColor='#d1d1d1'
            value={cpfField}
            onChangeText={t => setCpfField(t)}
            autoCapitalize='none'
            
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={registred}>
          <Text style={styles.buttonText}>Cadastrar</Text>
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