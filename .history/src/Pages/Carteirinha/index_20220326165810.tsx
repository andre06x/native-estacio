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
    padding: 20,
    backgroundColor: '#F8F8F8',
  },



});

export { Carteirinha }