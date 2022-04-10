import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#0F3469" />
      <ScrollView>

        <View style={styles.profile}>
          <View style={styles.profile_text_image}>
            {/* <Text style={styles.profile_text}>AS</Text> */}
            <Image style={styles.profile_image} source={require('./teste.jpg')} />

            <View style={styles.profile_container_icon}>
              <AntDesign name="pluscircle" size={24} color="#24BCCA" />
            </View>
          </View>

          <View>

          </View>


        </View>

        <Text>AI</Text>
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
    paddingVertical: 20,
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
    right: 1,
    bottom: -10,
  }
});

export { Home }