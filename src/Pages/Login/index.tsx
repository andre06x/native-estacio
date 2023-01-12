import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Login = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 100, alignItems: "center" }}>
        <Image style={styles.logo} source={require("./logo.png")} />
        <Text style={styles.titulo}>Conecte-se com sua vida acadêmica</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.botao_entrar}
          onPress={() => navigation.navigate("LoginMicrosoft")}
        >
          <Text style={{ color: "#fff", fontSize: 17 }}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao_esqueci}
          onPress={() => navigation.navigate("LoginMicrosoft")}
        >
          <Text style={styles.text}>Esqueci meu e-mail de acesso</Text>
        </TouchableOpacity>

        <Text style={styles.text_ajuda}>Precisa de ajuda?</Text>

        <StatusBar style="dark" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  logo: {
    width: 220,
    height: 60,
    marginBottom: 50,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 24,
  },
  email: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    color: "#999",
  },
  botao_entrar: {
    marginBottom: 15,
    width: 300,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#144BC9",
    justifyContent: "center",
    alignItems: "center",
  },

  botao_esqueci: {
    width: 300,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#144BC9",
  },

  text: {
    fontSize: 17,
    color: "#144BC9",
    fontWeight: "700",
  },

  text_ajuda: {
    fontSize: 17,
    color: "#144BC9",
    fontWeight: "700",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 40,
  },
});

export { Login };
