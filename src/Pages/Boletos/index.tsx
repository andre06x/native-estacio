import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabBar } from "../Components/Tab";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { TouchableOpacity } from "react-native-gesture-handler";

const meses = [
  {
    mes: "Out",
    tipo: "Mensalidade",
    vencido: false,
    valor: "R$ 1.578,32",
    vencimento: "5 Out",
  },
  {
    mes: "Nov",
    tipo: "Mensalidade",
    vencido: false,
    valor: "R$ 1.048,32",
    vencimento: "5 Nov",
  },
  {
    mes: "Dez",
    tipo: "Mensalidade",
    vencido: false,
    valor: "R$ 2.848,32",
    vencimento: "5 Dez",
  },
  {
    mes: "Jan",
    tipo: "Renovação / Reabertura",
    vencido: true,
    valor: "R$ 2.048,32",
    vencimento: "5 Jan",
  },
];

const Boletos = ({ navigation }: { navigation: any }) => {
  const [mesSelecionado, setMesSelecionado] = useState(meses[meses.length - 1]);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#fff" />
      <View style={styles.container_boleto_botoes}>
        <View>
          <View style={styles.container_ano_mes}>
            <Text style={styles.text_ano}>2023</Text>

            <ScrollView horizontal style={styles.container_meses}>
              {meses.map((item, indexMes) => (
                <TouchableOpacity
                  onPress={() => {
                    setMesSelecionado(meses[indexMes]);
                  }}
                  key={String(indexMes)}
                  style={{
                    marginRight: 20,
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    backgroundColor:
                      item.mes === mesSelecionado.mes ? "#24BCCA" : "#fff",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: item.mes === mesSelecionado.mes ? "#fff" : "#000",
                    }}
                  >
                    {item.mes}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              margin: 35,
              padding: 15,
              borderRadius: 5,
              borderWidth: 1,
              backgroundColor: "#fff",
              borderLeftWidth: 5,

              borderLeftColor: mesSelecionado.vencido ? "#D2015D" : "#16AA03",
              borderRightColor: "#ddd",
              borderTopColor: "#ddd",
              borderBottomColor: "#ddd",
            }}
          >
            <View style={styles.container_flex_between}>
              <View>
                <Text>Renovação/ Reabertura</Text>
                <View style={styles.container_vencido}>
                  <View
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: mesSelecionado.vencido
                        ? "#D2015D"
                        : "#16AA03",
                      marginRight: 10,
                    }}
                  ></View>
                  <Text
                    style={{
                      color: mesSelecionado.vencido ? "#D2015D" : "#16AA03",
                      fontWeight: "bold",
                      fontSize: 14,
                    }}
                  >
                    {mesSelecionado.vencido ? "Vencido" : "Pago"}
                  </Text>
                </View>
              </View>
              {mesSelecionado.vencido ? (
                <Feather name="alert-circle" size={25} color="#D2015D" />
              ) : (
                <MaterialCommunityIcons
                  name="check-circle-outline"
                  size={25}
                  color="#16AA03"
                />
              )}
            </View>

            <View style={styles.container_flex_between_center}>
              <View>
                <Text style={styles.text_white}>Vencimento</Text>
                <Text style={styles.text_white}>
                  {mesSelecionado.vencimento}
                </Text>
              </View>

              <Text style={styles.text_valor_boleto}>
                {mesSelecionado.valor}
              </Text>
            </View>
          </View>

          <Text style={styles.text_codigo_boleto}>
            {" "}
            0333182903128312903821390123812903218312903123901238213908
          </Text>
        </View>
      </View>

      <View style={styles.view_padding_20}>
        <TouchableOpacity style={styles.button_copiar_codigo}>
          <Text style={styles.text_botao_copiar}>Copiar código de barras</Text>
        </TouchableOpacity>

        <Text style={styles.text_botao_enviar}>Enviar boleto por e-mail</Text>
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
  container_vencido: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },

  container_flex_between: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  container_flex_between_center: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },

  text_white: {
    color: "#ddd",
  },

  text_codigo_boleto: {
    color: "#909090",
    textAlign: "center",
    paddingHorizontal: 50,
    fontSize: 18,
  },

  button_copiar_codigo: {
    backgroundColor: "#24BCCA",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },

  text_valor_boleto: { fontSize: 23, fontWeight: "bold" },
  view_padding_20: {
    padding: 20,
  },

  text_botao_copiar: {
    color: "#fff",
    fontWeight: "bold",
  },

  text_botao_enviar: {
    color: "#24BCCA",
    padding: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export { Boletos };
