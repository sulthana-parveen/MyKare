import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RegisterScreen from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import DashBoard from '../screens/DashBoard'
import AdminDashBoard from '../screens/AdminDashBoard'
const Stack = createStackNavigator()
const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
        <Stack.Screen name='DashBoard' component={DashBoard} />
        <Stack.Screen name='AdminDashBoard' component={AdminDashBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation