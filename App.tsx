import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <AppNavigation />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
