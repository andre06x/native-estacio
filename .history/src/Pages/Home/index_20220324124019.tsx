import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#0F3469" />
      <ScrollView>

        <View>
          <View style={styles.profile}>
          <Text>AS</Text>
          <Text>AS</Text>
            <Text>AS</Text>
            <Text>AS</Text>
            <Text>AS</Text>
            <Text>AS</Text>
            <Text>AS</Text>
            <Text>AS</Text>
            <Text>AS</Text>
            <Text>AS</Text>
            <Text>AS</Text>
            <Text>AS</Text>
            <Text>AS</Text>
            <Text>AS</Text>
            <Text>AS</Text>
            <Text>AS</Text>
            <Text>AS</Text>
          </View>

          <View>

          </View>


        </View>

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
    backgroundColor: "#0F3469"

  }
});

export { Home }