import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputField from '../components/InputField';
import AppButton from '../components/AppButton';
import TitleText from '../components/TitleText';
import { globalStyles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type RootStackParamList = {
  LoginScreen: undefined;
};

const USERS_KEY = '@users';

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    const insertAdminUser = async () => {
      const usersData = await AsyncStorage.getItem(USERS_KEY);
      let users = usersData ? JSON.parse(usersData) : [];
      const adminExists = users.some((u: any) => u.username === 'admin');
      if (!adminExists) {
        users.push({ username: 'admin', email: 'admin@example.com', password: 'admin' });
        await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
      }
    };
    insertAdminUser();
  }, []);

  const handleRegister = async () => {
    if (!username || !email || !password) {
      Alert.alert('Validation Error', 'All fields are required.');
      return;
    }

    try {
      const storedUsers = await AsyncStorage.getItem(USERS_KEY);
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      const userExists = users.some((u: any) => u.username === username || u.email === email);

      if (userExists) {
        Alert.alert('Duplicate User', 'Username or Email already exists.');
        return;
      }

      const newUser = { username, email, password };
      const updatedUsers = [...users, newUser];
      await AsyncStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));

      Alert.alert('Success', 'Registered successfully. Please log in.');
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Error', 'Failed to register user.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={globalStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={globalStyles.formWrapper} keyboardShouldPersistTaps="handled">
        <TitleText text="Register" />
        <InputField label="Username" value={username} onChangeText={setUsername} />
        <InputField label="Email Address" value={email} onChangeText={setEmail} keyboardType='email-address' />
        <InputField label="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <AppButton title="Register" onPress={handleRegister} />
        <View style={globalStyles.bottomTextView}>
          <Text style={globalStyles.bottomText}>
            Already have an account?{' '}
            <TouchableOpacity style={globalStyles.touchComponent} onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={globalStyles.bottomText}>Log In</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
