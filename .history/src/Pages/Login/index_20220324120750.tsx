import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>

      <Image 
        style={styles.logo} 
        source={require('./logo.png')} 
      />

      <Text style={styles.titulo}>Conecte-se com sua vida acadêmica</Text>
      <Text style={styles.email}>Seu email de acesso é:</Text>
      <Text style={styles.email}>suamatricula@alunos.estacio.br</Text>

      <TouchableOpacity style={styles.botao_entrar}>
        <Text style={{color: "#fff"}}>Entrar</Text>
      </TouchableOpacity>

      <Text style={{color: "#24BCCA"}}>Esqueci minha senha</Text>

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
    marginBottom: 24
  },
  email: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    color: "#999",

  },
  botao_entrar: {
    marginVertical: 34,
    width: 300,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#24BCCA",
    justifyContent: "center",
    alignItems: "center"
  },
  botao_ajuda: {
    position: "absolute",
    width: 300,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#24BCCA",
    justifyContent: "center",
    alignItems: "center"
  },



});

export { Login }