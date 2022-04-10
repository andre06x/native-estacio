import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./logo.png')} />
      <Text style={styles.titulo}>Conecte-se com sua vida acadêmica</Text>
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
    width: 250,
    height: 70    
  },
  titulo: {
    fontSize: 20,
    fontWeight: "600",
  }
});

export { Login }