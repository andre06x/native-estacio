import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';

const Carteirinha = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text>Carteirinha</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },



});

export { Carteirinha }