import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./logo.png')} />
      <Text style={styles.titulo}>Conecte-se com sua vida acadêmica</Text>
      <Text style={styles.email}>Seu email de acesso é:</Text>
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
    padding: 20
  },
  logo: {
    width: 220,
    height: 60,
    marginBottom: 20    
  },
  titulo: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20
  },
  email: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    color: "#EBEBEB",
  }

});

export { Login }