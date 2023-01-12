import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const TabBar = ({ navigation }) => {
  const tabOptions = [
    { nome: "Ínicio", icon: "home", press: "Home" },
    { nome: "Boletos", icon: "dollar-sign" },
    { nome: "Solicitações", icon: "message-square" },
    { nome: "Perfil", icon: "user", press: "Perfil" },
  ];
  return (
    <View horizontal style={styles.tabs}>
      {tabOptions.map((item) => (
        <TouchableOpacity
          style={styles.view_tabs}
          onPress={() => navigation.navigate(item.press)}
        >
          <Feather
            name={item?.icon}
            size={25}
            color={item.nome === "Ínicio" ? "#2C52A4" : "#ddd"}
          />
          <Text
            style={{
              marginTop: 8,
              color: item.nome === "Ínicio" ? "#2C52A4" : "#ddd",
            }}
          >
            {item.nome}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    backgroundColor: "#fff",
    height: 80,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  view_tabs: {
    paddingTop: 5,
    alignItems: "center",
    flex: 1,
  },

  text_tab: {},
});
export { TabBar };
