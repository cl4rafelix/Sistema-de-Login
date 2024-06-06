import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Pages/HomeScreen'
import AgendadoScreen from '../Pages/AgendadoScreen'
import ForgotScreen from '../Pages/ForgotScreen'
import RegisterScreen from '../Pages/RegisterScreen'

const MainStack = createNativeStackNavigator()
export default () => {
  return (
    <MainStack.Navigator>
       <MainStack.Screen name='Home' component={HomeScreen} options={{
       title: 'Beauty Estética',
       headerTitleAlign: 'center',
       headerStyle:{
         backgroundColor: '#ff69b4'
       }
      }}/>
      
       <MainStack.Screen name='Agendado' component={AgendadoScreen} options={{
       title: 'Beauty Estética',
       headerTitleAlign: 'center',
       headerStyle:{
         backgroundColor: '#ff69b4'
       }
      }}/>

      <MainStack.Screen name='Forgot' component={ForgotScreen} options={{
       title: 'Beauty Estética',
       headerTitleAlign: 'center',
       headerStyle:{
         backgroundColor: '#ff69b4'
       }
      }}/>

      <MainStack.Screen name='Register' component={RegisterScreen} options={{
       title: 'Beauty Estética',
       headerTitleAlign: 'center',
       headerStyle:{
         backgroundColor: '#ff69b4'
       }
      }}/>
    </MainStack.Navigator>
  )}