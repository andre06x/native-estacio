import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { FlatList, RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { TabBar } from "../Components/Tab";

const opcoes = [
  { nome: "Editar dados pessoais", icon: "grid" },
  { nome: "Privacidade", icon: "list" },
  { nome: "Envio de documentos", icon: "bookmark" },
];

const Perfil = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={{ flex: 1, paddingBottom: 80 }}>
      <View>
        <FlatList
          columnWrapperStyle={styles.container_opcoes}
          data={opcoes}
          renderItem={({ item }) => (
            <View style={styles.view_opcao}>
              <Feather name={item.icon} size={24} color="black" />
              <Text style={styles.text_opcao}>{item.nome}</Text>
            </View>
          )}
          numColumns={2}
          ListHeaderComponent={<ListHeaderComponent navigation={navigation} />}
          ListFooterComponent={ListFooterComponent}
          keyExtractor={(item, index) => String(index)}
        />
      </View>

      <TabBar navigation={navigation} tela="Perfil" />
    </SafeAreaView>
  );
};

const ListHeaderComponent = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.view_info}>
          <View style={styles.view_info_dados}>
            <RectButton style={styles.avatar_container}>
              <Text style={styles.avatar_text}>A</Text>

              <RectButton style={styles.avatar_foto}>
                <Feather name="camera" color="#000" size={20} />
              </RectButton>
            </RectButton>

            <Text style={styles.text_info_dados_primario}>Andre Silva</Text>
            <Text style={styles.text_info_dados_secundario}>
              andre06x@gmail.com
            </Text>
            <Text style={styles.text_info_dados_telefone}>(21) 96627-0362</Text>
          </View>
          <Text style={styles.text_info_dados_secundario}>
            Sistemas de informação
          </Text>
        </View>
      </View>
      <View style={styles.dados}>
        <View style={styles.container_logo}>
          <Image style={styles.logo} source={require("./logo.png")} />
        </View>
        <View style={styles.container_dados}>
          <View style={{ marginRight: 40 }}>
            <Text>Matrícula</Text>
            <Text>2019 0827 4417</Text>
          </View>

          <View>
            <Text>Validade</Text>
            <Text>31 Jul 2023</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.view_acessar_carteirinha}
        onPress={() => navigation.navigate("Carteirinha")}
      >
        <Feather
          name="maximize-2"
          color="#003"
          size={20}
          style={{ marginRight: 10 }}
        />
        <Text>Acessar carteirinha</Text>
      </TouchableOpacity>
      <Text style={styles.text_curso}>Menu perfil</Text>
    </View>
  );
};

const ListFooterComponent = () => {
  return (
    <View style={{ height: 300 }}>
      <Text style={styles.text_versao}>Versão do app 5.13.0</Text>

      <TouchableOpacity>
        <Text style={styles.text_ajuda}>Sair do APP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#144BC9",
    height: 450,
  },

  view_info: {
    padding: 20,
  },

  avatar_container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,

    position: "relative",
  },

  avatar_foto: {
    position: "absolute",
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    borderRadius: 20,
    right: -20,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  avatar_text: {
    fontWeight: "700",
    color: "#fff",
    fontSize: 19,
  },

  view_info_dados: {
    alignItems: "center",
  },

  text_info_dados_primario: {
    color: "#fff",
    marginVertical: 10,
    fontSize: 24,
  },

  text_info_dados_secundario: {
    color: "#fff",
    marginVertical: 5,
    fontSize: 18,
  },

  text_info_dados_telefone: {
    color: "#fff",
    marginTop: 5,
    marginBottom: 30,
    fontSize: 18,
  },

  logo: {
    width: 180,
    height: 50,
    marginLeft: 10,
    marginBottom: 50,
    marginTop: 2,
  },

  dados: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: -120,
    margin: 20,
  },

  container_logo: {
    backgroundColor: "#87A3E4",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 8,
  },

  container_dados: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 50,
    paddingVertical: 30,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  view_acessar_carteirinha: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  container_opcoes: {
    backgroundColor: "#F2F2F2",
    padding: 20,
  },

  text_curso: {
    paddingHorizontal: 20,
    paddingTop: 30,
    color: "#000",
    fontSize: 20,
  },

  view_opcao: {
    flex: 1,
    marginVertical: 0,
    marginHorizontal: 5,
    backgroundColor: "#fff",
    borderRadius: 4,
    height: 150,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "space-between",
  },

  text_opcao: {
    fontSize: 19,
  },

  text_versao: {
    marginVertical: 20,
    textAlign: "center",
    color: "#444",
  },

  text_ajuda: {
    fontSize: 17,
    color: "#144BC9",
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 20,
  },
});

export { Perfil };
