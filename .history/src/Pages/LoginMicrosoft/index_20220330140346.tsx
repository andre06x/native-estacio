import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const LoginMicrosoft = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={require('./microsoft_logo.png')} />
        <Text>Login Microsoft</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    bottom: 30,
    width: 300,
    height: 40,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#24BCCA",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",

  },



});

export { LoginMicrosoft }