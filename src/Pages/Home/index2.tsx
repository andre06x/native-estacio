import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";

import { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { SimpleLineIcons } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";

import AsyncStorage from "@react-native-async-storage/async-storage";

import AppLoading from "expo-app-loading";
import { RectButton } from "react-native-gesture-handler";

import { Feather } from "@expo/vector-icons";
import { TabBar } from "../Components/Tab";

const opcoes = [
  { nome: "Avaliações", icon: "check-circle" },
  { nome: "Notas e Informaçôes", icon: "grid" },
  { nome: "Calendário acadêmico", icon: "calendar" },
  { nome: "Histórico escolar", icon: "list" },
  { nome: "Biblioteca", icon: "bookmark" },
  { nome: "Renova", icon: "file-text" },
  { nome: "Portal de negociação", icon: "credit-card" },
  { nome: "Manual do aluno", icon: "clipboard" },
];

const Home2 = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#144BC9" />
      <FlatList
        data={opcoes}
        style={styles.container_opcoes}
        columnWrapperStyle={{ paddingHorizontal: 20 }}
        horizontal={false}
        renderItem={({ item }) => (
          <View style={styles.view_opcao}>
            <Feather name={item.icon} size={24} color="black" />

            <Text style={styles.text_opcao}>{item.nome}</Text>
          </View>
        )}
        numColumns={2}
        keyExtractor={(item, index) => String(index)}
        ListHeaderComponent={<ListHeaderComponent navigation={navigation} />}
        ListFooterComponent={<View style={{ height: 30 }} />}
      />
      <TabBar navigation={navigation} tela="Ínicio" />
    </SafeAreaView>
  );
};

const ListHeaderComponent = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ backgroundColor: "#F8F8F8" }}>
      <View style={styles.profile}>
        <View style={styles.info}>
          <View>
            <Text style={styles.text_info}>Estácio</Text>
            <Text style={styles.text_info}>Sistemas de informação</Text>
            <Text style={styles.text_info}>2019 0827 4417</Text>
          </View>

          <RectButton
            style={styles.avatar_container}
            onPress={() => navigation.navigate("Perfil")}
          >
            <Text style={styles.avatar_text}>A</Text>
          </RectButton>
        </View>
        <Text style={styles.text_info}>Sala de aula virtual</Text>
        <ScrollView
          horizontal
          style={styles.scrollview_disciplinas}
          showsHorizontalScrollIndicator={false}
        >
          <RectButton style={styles.view_disciplina}>
            <Text>Bases matemáticas</Text>
          </RectButton>

          <RectButton style={styles.view_disciplina}>
            <Text>Probabilidade e estatística</Text>
          </RectButton>

          <RectButton style={styles.view_disciplina}>
            <Text>Algoritimos III</Text>
          </RectButton>
        </ScrollView>
      </View>
      <View style={{ backgroundColor: "#F2F2F2" }}>
        <Text style={styles.text_curso}>Meu curso</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingBottom: 80,
  },
  profile: {
    padding: 20,
    backgroundColor: "#144BC9",
  },
  container_info: {},

  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
  },

  text_info: {
    color: "#fff",
    fontSize: 19,
  },

  avatar_container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },

  avatar_text: {
    fontWeight: "700",
    color: "#fff",
    fontSize: 19,
  },

  scrollview_disciplinas: {
    marginTop: 10,
    marginBottom: 2,
  },

  view_disciplina: {
    backgroundColor: "#fff",
    height: 70,
    width: 250,
    padding: 12,
    borderRadius: 8,
    marginRight: 45,
  },

  container_opcoes: {
    backgroundColor: "#F2F2F2",
    paddingBottom: 50,
  },

  text_curso: {
    color: "#000",
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  view_opcao: {
    flex: 1,
    marginVertical: 10,
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

  tabs: {
    backgroundColor: "#fff",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
  },

  view_tabs: {
    paddingTop: 5,
    alignItems: "center",
    flex: 1,
  },

  text_tab: {},
  profile_text_image: {
    width: 60,
    position: "relative",
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
  },
  profile_text: {
    fontSize: 20,
    fontWeight: "700",
  },
  profile_image: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  profile_container_icon: {
    position: "absolute",
    right: 3,
    bottom: -5,
    backgroundColor: "#1FBFC6",
    width: 19,
    height: 19,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  profile_container_info: {
    marginLeft: 17,
  },
  profile_container_info_text: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 5,
  },

  profile_container_info_mini_text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 2,
  },

  accordion_header_container: {
    flexDirection: "row",
    backgroundColor: "#24BCCA",
    paddingHorizontal: 25,
    paddingVertical: 30,
    justifyContent: "space-between",
    borderBottomWidth: 0.2,
    borderBottomColor: "white",
  },

  accordion_header_text: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 24,
    fontWeight: "700",
  },

  accordion_content_container: {
    backgroundColor: "#1E91AC",
    padding: 25,
    borderTopWidth: 0.2,
    borderTopColor: "#eeee",
  },

  accordion_content_text: {
    color: "white",
  },

  container_acesso: {
    paddingHorizontal: 25,
    paddingVertical: 28,
  },

  acesso: {
    fontWeight: "700",
    fontSize: 17,
    marginBottom: 18,
  },

  container_discplina: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: "#24BCCA",
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
  },

  text_disciplina: {
    color: "#fff",
    fontSize: 17,
    marginRight: 10,
  },

  aula: {
    color: "#fff",
    marginVertical: 5,
  },
  container_rota: {
    padding: 9,
    backgroundColor: "#fff",
    marginVertical: 20,
    marginHorizontal: 10,
    alignItems: "center",
    width: 105,
    borderRadius: 10,
  },

  text_rota: {
    color: "#8a8888",
    fontWeight: "700",
    fontSize: 13,
    textAlign: "center",
    margin: 4,
  },

  botao_sair: {},

  botao_text: {
    color: "#24BCCA",
  },
});

export { Home2 };
