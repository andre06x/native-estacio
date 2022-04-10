import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Inter_700Bold, Inter_500Medium, Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

const LoginMicrosoft = ({ navigation }: { navigation: any }) => {

  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  else return (
      <SafeAreaView style={styles.container}>
        <Image source={require('./microsoft_logo.png')} />
        <Text style={styles.titulo}>Entrar</Text>
        <TextInput style={styles.input} placeholder="Login"/>
        
        <StatusBar style="auto" />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30
  },
  logo: {
    width: 220,
    height: 60,
    marginBottom: 20
  },
  titulo: {
    fontSize: 28,
    fontFamily: "Inter_700Bold",
    marginVertical: 20,
    color: "#1B1B1B"
  },

  input: {
    width: "100%",
    height: 36,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingVertical: 6,
    paddingHorizontal: 2
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