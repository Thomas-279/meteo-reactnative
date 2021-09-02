import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HeaderApp from './components/HeaderApp';
import WeatherWidget from './components/WeatherWidget';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <HeaderApp />
        <WeatherWidget city="Paris" zipcode={75000} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
