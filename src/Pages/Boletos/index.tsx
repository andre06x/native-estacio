import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabBar } from "../Components/Tab";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Boletos = ({ navigation }: { navigation: any }) => {
  const [mesSelecionado, setMesSelecionado] = useState("Jan");

  const meses = [
    { mes: "Out" },
    { mes: "Nov" },
    { mes: "Dez" },
    { mes: "Jan" },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#fff" />
      <View style={styles.container_boleto_botoes}>
        <View>
          <View style={styles.container_ano_mes}>
            <Text style={styles.text_ano}>2023</Text>

            <ScrollView horizontal style={styles.container_meses}>
              {meses.map((item) => (
                <View
                  style={{
                    marginRight: 20,
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    backgroundColor:
                      item.mes === mesSelecionado ? "#24BCCA" : "#fff",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: item.mes === mesSelecionado ? "#fff" : "#000",
                    }}
                  >
                    {item.mes}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={styles.container_boleto}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text>Renovação/ Reabertura</Text>
                <View style={styles.container_vencido}>
                  <View
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: "#D2015D",
                      marginRight: 10,
                    }}
                  ></View>
                  <Text
                    style={{
                      color: "#D2015D",
                      fontWeight: "bold",
                      fontSize: 14,
                    }}
                  >
                    Vencido
                  </Text>
                </View>
              </View>

              <Feather
                name="alert-circle"
                size={25}
                color={mesSelecionado === "Jan" ? "#D2015D" : "green"}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 40,
              }}
            >
              <View>
                <Text style={{ color: "#ddd" }}>Vencimento</Text>
                <Text style={{ color: "#ddd" }}>5 Jan</Text>
              </View>

              <Text style={{ fontSize: 23, fontWeight: "bold" }}>
                R$ 2.048,32
              </Text>
            </View>
          </View>

          <Text
            style={{
              color: "#909090",
              textAlign: "center",
              paddingHorizontal: 50,
              fontSize: 18,
            }}
          >
            {" "}
            0333182903128312903821390123812903218312903123901238213908
          </Text>
        </View>
      </View>

      <View style={{ padding: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#24BCCA",
            padding: 15,
            borderRadius: 25,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Copiar código de barras
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            color: "#24BCCA",
            padding: 15,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Enviar boleto por e-mail
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    margin: 0,
    justifyContent: "space-between",
  },
  container_boleto_botoes: {},
  container_ano_mes: {
    backgroundColor: "#fff",
  },
  text_ano: {
    textAlign: "center",
    paddingVertical: 20,
    fontSize: 20,
  },
  container_meses: {
    flexDirection: "row",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  container_boleto: {
    margin: 35,
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  container_vencido: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
});

export { Boletos };
