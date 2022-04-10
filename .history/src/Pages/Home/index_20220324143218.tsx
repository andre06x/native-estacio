import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from '@expo/vector-icons';

import Accordion from 'react-native-collapsible/Accordion';
import { useState } from "react";

const SECTIONS = [
  {
    title: 'Acadêmico',
    content: 'a',
  },
  {
    title: 'Admnistrativo',
    content: 'b',
  },
  {
    title: 'Espaço Pessoal',
    content: 'c',
  },
];

const Home = () => {
  const [activeSections, setActiveSections] = useState([]);

  const renderSectionTitle = (section: any) => {
    return (
      <View >
        <Text>{section.content}</Text>
      </View>
    );
  };

  const renderHeader = (section: any) => {
    return (
      <View >
        <Text >{section.title}</Text>
      </View>
    );
  };

  const renderContent = (section: any) => {
    return (
      <View >
        <Text>{section.content}</Text>
      </View>
    );
  };

  const updateSections = (activeSections: any) => {
    setActiveSections(activeSections);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#0F3469" />
      <ScrollView>

        <View style={styles.profile}>
          <View style={styles.profile_text_image}>
            <Text style={styles.profile_text}>AS</Text>
            {/* <Image style={styles.profile_image} source={require('./teste.jpg')} /> */}

            <View style={styles.profile_container_icon}>
              <FontAwesome5 name="plus" size={10} color="white" />
            </View>
          </View>

          <View style={styles.profile_container_info}>
            <Text style={styles.profile_container_info_text}>Andre Silva</Text>

            <Text style={styles.profile_container_info_mini_text}>Estácio</Text>
            <Text style={styles.profile_container_info_mini_text}>Sistemas de informação</Text>
            <Text style={styles.profile_container_info_mini_text}>201908274417</Text>
          </View>


        </View>

        <Text>AI</Text>

        <Accordion
          sections={SECTIONS}
          activeSections={activeSections}
          renderHeader={renderHeader}
          renderContent={renderContent}
          onChange={updateSections}
        />
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

});

export { Home }