import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TitleTextProps {
  text: string;
}

const TitleText: React.FC<TitleTextProps> = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

export default TitleText;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
});
