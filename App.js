import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HeaderApp from './components/HeaderApp';
import WeatherWidget from './components/WeatherWidget';
import InputBar from './components/InputBar';

export default function App() {
  const [city, setCity] = useState('paris');
  const submitHandler = (value) => {
    setCity(value)
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View>
          <StatusBar barStyle="light-content" />
        </View>
        <View>
          <HeaderApp />
          <InputBar submitHandler={submitHandler} />
        </View>
        <View>
          <WeatherWidget city={city} />
        </View>
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
