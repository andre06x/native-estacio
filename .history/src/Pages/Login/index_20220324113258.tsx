import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./logo.png')} />
      <Text>Login</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 100
  }
});

export { Login }