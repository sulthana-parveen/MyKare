import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
const Stack = createStackNavigator()
const AppNavigation :React.FC= () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='LoginScreen'component={LoginScreen}/>
      <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
      
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation