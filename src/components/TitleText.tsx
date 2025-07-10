import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/styles';

interface TitleTextProps {
  text: string;
}

const TitleText: React.FC<TitleTextProps> = ({ text }) => {
  return <Text
    style={globalStyles.title} >
    {text}
  </Text>
}
export default TitleText;

