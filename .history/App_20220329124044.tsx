import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import { Routes } from "./src/Routes";
import { AppearanceProvider } from 'react-native-appearance';

export default function App() {
  return (
    <AppearanceProvider>
      <Routes />
    </AppearanceProvider>
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
