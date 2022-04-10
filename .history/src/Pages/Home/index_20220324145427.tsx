import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from '@expo/vector-icons';

import Accordion from 'react-native-collapsible/Accordion';
import { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons'; 

const SECTIONS = [
  {
    title: 'Acadêmico',
    content: 'a',
    icon: "computer"
  },
  {
    title: 'Admnistrativo',
    content: 'b',
    icon: "insert-chart-outlined"
  },
  {
    title: 'Espaço Pessoal',
    content: 'c',
    icon: "people-outline"
  },
];

const Home = () => {
  const [activeSections, setActiveSections] = useState([]);

  const renderHeader = (section: any) => {
    return (
      <View style={styles.accordion_header_container}>
        <MaterialIcons name={section.icon} size={20} color="white" />
        <Text style={styles.accordion_header_text}>{section.title}</Text>
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

        <Accordion
          sections={SECTIONS}
          activeSections={activeSections}
          renderHeader={renderHeader}
          renderContent={renderContent}
          underlayColor=""
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

  accordion_header_container: {
    flexDirection: "row",
    backgroundColor: "#24BCCA",
    paddingHorizontal: 20,
    paddingVertical:30,
  },

  accordion_header_text: {
    color: "#fff",
    marginLeft: 17
  }

});

export { Home }