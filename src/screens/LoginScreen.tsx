import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import InputField from '../components/InputField';
import AppButton from '../components/AppButton';
import TitleText from '../components/TitleText';
import { globalStyles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type RootStackParamList = {
  RegisterScreen: undefined;
  DashBoard: { username: string; isAdmin: boolean };
  AdminDashBoard: { username: string };
};

const USERS_KEY = '@users';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Validation Error', 'Email and password are required.');
      return;
    }

    
    if (email === 'admin' && password === 'admin') {
      navigation.navigate('AdminDashBoard', { username: 'admin' });
      return;
    }

   
    try {
      const storedUsers = await AsyncStorage.getItem(USERS_KEY);
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      const user = users.find((u: any) => u.email === email && u.password === password);

      if (!user) {
        Alert.alert('Login Failed', 'Invalid email or password.');
        return;
      }

      navigation.navigate('DashBoard', {
        username: user.username,
        isAdmin: false,
      });
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Something went wrong.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={globalStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={globalStyles.formWrapper}
        keyboardShouldPersistTaps="handled"
      >
        <TitleText text="Login" />
        <InputField
          label="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
        />
        <InputField
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          keyboardType='default' />
        <AppButton title="Login" onPress={handleLogin} />

        <View style={globalStyles.bottomTextView}>
          <Text style={globalStyles.bottomText}>
            Don't have an account?{' '}
            <TouchableOpacity
              style={globalStyles.touchComponent}
              onPress={() => navigation.navigate('RegisterScreen')}
            >
              <Text style={globalStyles.bottomText}>Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
