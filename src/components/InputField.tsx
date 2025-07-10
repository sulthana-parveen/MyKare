import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, } from 'react-native-paper';
import type { KeyboardTypeOptions } from 'react-native';
import { globalStyles } from '../styles/styles';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
}) => {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      mode="outlined"
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={globalStyles.input}
    />
  );
};

export default InputField;

