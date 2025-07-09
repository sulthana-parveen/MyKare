import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView ,Text, TouchableOpacity} from 'react-native';
import InputField from '../components/InputField';
import AppButton from '../components/AppButton';
import TitleText from '../components/TitleText';
import { globalStyles } from '../styles/styles';
const RegisterScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const handleRegister = () => {
    console.log('Register:', { username, email });
  };

  return (
    <KeyboardAvoidingView
      style={globalStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={globalStyles.formWrapper} keyboardShouldPersistTaps="handled">
        <TitleText text="Register" />
        <InputField label="Username" value={username} onChangeText={setUsername} />
        <InputField label="Email Address" value={email} onChangeText={setEmail} />
        <InputField label='Password' value={password} onChangeText={setPassword}/>
        <AppButton title="Register" onPress={handleRegister} />
        <View style={globalStyles.bottomTextView}>
            <Text style={globalStyles.bottomText}>Already have an account? {''}
                <TouchableOpacity style={globalStyles.touchComponent}>
                    <Text style={globalStyles.bottomText}>Log In</Text>
                </TouchableOpacity>
            </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
