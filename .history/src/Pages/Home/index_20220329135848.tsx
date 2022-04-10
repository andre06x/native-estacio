import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from '@expo/vector-icons';

import Accordion from 'react-native-collapsible/Accordion';
import { useEffect, useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { SimpleLineIcons } from '@expo/vector-icons';

const rotasHorizontal = [
  { id: "1", nome: "Sala de aula virtual", rota: "", icon: "insert-chart-outlined" },
  { id: "2", nome: "Renovação de matricula", rota: "", icon: "insert-chart-outlined" },
  { id: "3", nome: "Montar grade", rota: "", icon: "insert-chart-outlined" },
  { id: "4", nome: "Disciplinas", rota: "", icon: "insert-chart-outlined" },
  { id: "5", nome: "Boletos", rota: "", icon: "insert-chart-outlined" },
  { id: "6", nome: "Solicitações", rota: "", icon: "insert-chart-outlined" },
]
const SECTIONS = [
  {
    icon: "computer",
    id: 0,
    title: 'Acadêmico',
    content: [
      { nome: "Sala de aula virtual", rota: "", icon: "" },
      { nome: "Disciplinas", rota: "", icon: "" },
      { nome: "Histórico escolar", rota: "", icon: "" },
      { nome: "Calendário acadêmico", rota: "", icon: "" },
      { nome: "Manual do aluno", rota: "", icon: "" },
      { nome: "Biblioteca virtual", rota: "", icon: "" },

    ],
  },
  {
    id: 1,
    title: 'Administrativo',
    icon: "insert-chart-outlined",
    content: [
      { nome: "Boletos", rota: "", icon: "" },
      { nome: "Solicitações", rota: "", icon: "" },
      { nome: "Renovação de matricula", rota: "", icon: "" },
      { nome: "Montar grade", rota: "", icon: "" },
      { nome: "Portal de negociação", rota: "", icon: "" },
    ],
  },
  {
    id: 2,
    title: 'Espaço Pessoal',
    icon: "people-outline",
    content: [
      { nome: "Carteirinha", rota: "Carteirinha", icon: "" },
      { nome: "Dados pessoais", rota: "", icon: "" },
      { nome: "Privacidade", rota: "", icon: "" },
    ],
  },
];
import * as ImagePicker from 'expo-image-picker';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }: { navigation: any }) => {
  const [activeSections, setActiveSections] = useState([]);
  const [imageUri, setImageUri] = useState('');



  const renderHeader = (section: any) => {
    return (
      <View style={styles.accordion_header_container}>

        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name={section.icon} size={20} color="white" />
          <Text style={styles.accordion_header_text}>{section.title}</Text>
        </View>

        {
          activeSections.find(a => a === section.id) ? (
            <MaterialIcons name="keyboard-arrow-up" size={24} color="white" />
          ) : (

            <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
          )
        }

      </View>
    );
  };

  const renderContent = (section: any) => {
    return section.content.map(c => (
      <TouchableOpacity onPress={() => navigation.navigate(c.rota)} style={styles.accordion_content_container} key={c.nome}>
        <Text style={styles.accordion_content_text}>{c.nome}</Text>
      </TouchableOpacity>
    ))
  };

  const updateSections = (activeSection: any) => {
    setActiveSections(activeSection)
  };

  useEffect(() => {
    const getImage = async () => {
      const uri = await AsyncStorage.getItem('@avatar_link');

      if(uri !== null){
        setImageUri(uri);
      };
    };

    getImage();
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.cancelled) {
      setImageUri(result.uri);

      try {
        await AsyncStorage.setItem('@avatar_link', result.uri);
        
      } catch (e) {
        // saving error
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#0F3469" />
      <ScrollView style={{ backgroundColor: "#F8F8F8" }}>

        <View style={styles.profile}>
        <TouchableOpacity style={{ alignItems: "center" }} onPress={pickImage}>
          <View style={styles.profile_text_image}>
            {imageUri !== '' ? (
              <Image style={styles.profile_image} source={{ uri: imageUri }} />
            ) : (
              <Text style={styles.profile_text}>AS</Text>
            )}
            {/* <Image style={styles.profile_image} source={{ uri: imageUri }} /> */}

            <View style={styles.profile_container_icon}>
              <FontAwesome5 name="plus" size={10} color="white" />
            </View>
          </View>
        </TouchableOpacity>

          <View style={styles.profile_container_info}>
            <Text style={styles.profile_container_info_text}>Andre Silva</Text>

            <Text style={styles.profile_container_info_mini_text}>Estácio</Text>
            <Text style={styles.profile_container_info_mini_text}>Sistemas de informação</Text>
            <Text style={styles.profile_container_info_mini_text}>201908274417</Text>
          </View>


        </View>

        <Accordion
          sections={SECTIONS}
          activeSections={activeSections}
          renderHeader={renderHeader}
          renderContent={renderContent}
          underlayColor=""
          expandMultiple={true}
          onChange={updateSections}
        />

        <View style={styles.container_acesso}>
          <Text style={styles.acesso}>
            Acesso rápido
          </Text>

          <TouchableOpacity style={styles.container_discplina}>

            <View>
              <Text
                style={styles.text_disciplina}
                numberOfLines={1}
              >
                Implementação de banco de dados
              </Text>
              <Text style={styles.aula}>Aula 1 - conteúdo</Text>
            </View>

            <AntDesign name="arrowright" size={20} color="white" />

          </TouchableOpacity>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {rotasHorizontal.map(r => (
              <TouchableOpacity key={r.id} style={styles.container_rota}>
                <MaterialIcons style={{ marginBottom: 3 }} name={r.icon} size={25} color="#1FBFC6" />
                <Text style={styles.text_rota}>{r.nome}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity  style={styles.botao_sair}>
            <Text style={styles.botao_text}>Sair do app</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
      <View style={{position: "absolute", right: 5, top: 20}}>
        <MaterialIcons name="notifications" size={24} color="white" />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  profile: {
    backgroundColor: "#0F3469",
    flexDirection: "row",
    paddingBottom: 28,
    paddingTop: 25,
    paddingHorizontal: 9
  },
  profile_text_image: {
    width: 60,
    position: "relative",
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  profile_text: {
    fontSize: 20,
    fontWeight: "700"
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
    alignItems: "center"
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
    marginBottom: 2
  },

  accordion_header_container: {
    flexDirection: "row",
    backgroundColor: "#24BCCA",
    paddingHorizontal: 25,
    paddingVertical: 30,
    justifyContent: "space-between",
    borderBottomWidth: 0.2,
    borderBottomColor: "white"
  },

  accordion_header_text: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 24,
    fontWeight: "700"
  },

  accordion_content_container: {
    backgroundColor: "#1E91AC",
    padding: 25,
    borderTopWidth: 0.2,
    borderTopColor: "#eeee"
  },

  accordion_content_text: {
    color: "white"
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
    flexDirection: "row"
  },
  text_disciplina: {
    color: "#fff",
    fontSize: 17,
    marginRight: 10
  },
  aula: {
    color: "#fff",
    marginVertical: 5
  },
  container_rota: {
    padding: 9,
    backgroundColor: "#fff",
    marginVertical: 20,
    marginHorizontal: 10,
    alignItems: "center",
    width: 105,
    borderRadius: 10
  },

  text_rota: {
    color: "#8a8888",
    fontWeight: "700",
    fontSize: 13,
    textAlign: "center",
    margin: 4
  },
  
  botao_sair: {

  },

  botao_text: {
    color: "#24BCCA"
  }
});

export { Home }