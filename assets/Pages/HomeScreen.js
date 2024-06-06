 import { useState } from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'


export default function HomeScreen() {
  const navigation = useNavigation()
  const [emailField, setEmailField]=useState('')
  const [passwordField, setPasswordField]=useState('')
 
  const handleLoginButton = () => {
    setEmailField(passwordField)
    setPasswordField(emailField)
    if(emailField != '' && passwordField != ''){
      navigation.navigate('Agendado')
    }
  }
  const handleForgotButton = () => {
    navigation.navigate('Forgot')
  }
  const handleRegisterButton = () => {
    navigation.navigate('Register')
  }
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./estetica.jpg')}/>
        <Text style={styles.h1}>Agendamento de Horários</Text>
        <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>
         
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput style={styles.inputField} placeholder='Digite seu email'
           style={styles.inputField}
           placeholder='Digite seu email'
           placeholderTextColor='#d1d1d1'
           value={emailField}
           onChangeText={t => setEmailField(t)}
           autoCapilize='none'
           keyboardType='email-adress'
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
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

        <View style={styles.aditionals}>
          <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgotButton}>
            <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
          <Text style={styles.buttonText}>Agendar</Text>
        </TouchableOpacity>

        <View style={styles.signUpArea}>
          <Text style={styles.signUpText}>Não tem conta?</Text>
          <TouchableOpacity onPress={handleRegisterButton}>
            <Text style={styles.signUpBtnText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerArea}>
          <Text style={styles.footerText}>Criado por Clara Félix</Text>
        </View>
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
  aditionals: {
    width: '100%',
  },
  forgotBtnArea: {
    paddingVertical: 20,
    alignSelf: 'flex-end',
  },
  forgotBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ff69b4'
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
  signUpArea: {
    flexDirection: 'row',
    marginTop: 30,
  },
  signUpText: {
    fontSize: 13, 
    fontWeight: 'bold',
    color: '#999',
  },
  signUpBtnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ff69b4',
    marginLeft: 5,
  },
  footerArea: {
    marginVertical: 30,
  },
  footerText: {
    fontSize: 13,
    color: '#999',
  },
})