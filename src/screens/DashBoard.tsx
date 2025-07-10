import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import TitleText from '../components/TitleText';
import { globalStyles } from '../styles/styles';
import AppButton from '../components/AppButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type RootStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  DashBoard: { username: string; isAdmin: boolean };
};

const DashBoard: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'DashBoard'>>();

  const { username } = route.params;
  const [ipAddress, setIpAddress] = useState('');
  const [country, setCountry] = useState('');


  useEffect(() => {
    fetchIPAndCountry();
  }, []);

  const fetchIPAndCountry = async () => {
    try {
      const ipRes = await axios.get('https://api.ipify.org?format=json');
      setIpAddress(ipRes.data.ip);

      const locationRes = await axios.get(`http://ip-api.com/json/${ipRes.data.ip}`);
      setCountry(locationRes.data.country);
    } catch (error) {
      console.error('Error fetching IP or location:', error);
      Alert.alert('Network Error', 'Could not fetch IP and country.');
    }
  };



  const handleLogOut = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'LoginScreen' }],
    });
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
        <TitleText text="DashBoard" />
        <View style={{ alignSelf: 'center' }}>
          <Text style={globalStyles.welcomeText}>Welcome, {username}!</Text>
          <Text style={globalStyles.subText}>IP: {ipAddress}</Text>
          <Text style={globalStyles.subText}>Country: {country}</Text>
        </View>
        <AppButton title="Log Out" onPress={handleLogOut} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DashBoard;
