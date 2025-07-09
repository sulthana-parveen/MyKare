import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { globalStyles } from '../styles/styles';

interface AppButtonProps {
  title: string;
  onPress: () => void;
}

const AppButton: React.FC<AppButtonProps> = ({ title, onPress }) => {
  return (
    <Button mode="contained" onPress={onPress} style={globalStyles.button} labelStyle={globalStyles.buttonText}>
      {title}
    </Button>
  );
};

export default AppButton;

