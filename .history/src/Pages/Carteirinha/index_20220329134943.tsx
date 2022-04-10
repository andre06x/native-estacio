import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, useColorScheme, TouchableOpacity, TouchableWithoutFeedback, Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Poppins_700Bold, Poppins_600SemiBold, useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import { Inter_700Bold, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';
import * as ImagePicker from 'expo-image-picker';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { Appearance } from "react-native-appearance";

const Carteirinha = ({ navigation }: { navigation: any }) => {


  const [imageUri, setImageUri] = useState('');
  const colorScheme = useColorScheme();

  console.log(Appearance.getColorScheme())

  useEffect(() => {

    const getImage = async () => {
      const uri = await AsyncStorage.getItem('@avatar_link');

      if (uri !== null) {
        setImageUri(uri);
      };
    };

    getImage();
  }, []);

  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_500Medium,
    Inter_600SemiBold,
    Inter_500Medium,
  });


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

  const matricula = "201908274417";

  const showAlert = () => {
    Alert.alert(
      "Adicionar",
      "",
      [
        {
          text: "Escolher foto",
          onPress: () => Alert.alert("Cancel Pressed"),
          style: "default",
        },

        {
          text: "Apagar Foto",
          onPress: () => Alert.alert("Cancel Pressed"),
          style: "default",
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {}
      }
    );
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  else return (
    <>
      <StatusBar style="dark" />

      <View style={styles.container}>

        <TouchableOpacity style={{ alignItems: "center" }} onPress={showAlert}>
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

        <View style={styles.view_profile}>

          <Text style={styles.nome}>Andre Victor da Costa Silva</Text>

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 32, marginBottom: 20 }}>
            <View>
              <Text
                style={styles.label_info_text}
              >
                CPF
              </Text>
              <Text
                style={styles.value_info_text}
              >
                168.555.807-00
              </Text>
            </View>

            <View>
              <Text
                style={styles.label_info_text}
              >
                Nascimento
              </Text>
              <Text
                style={styles.value_info_text}
              >
                26 Jun 2000
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
            <View>
              <Text
                style={styles.label_info_text}
              >
                Matrícula
              </Text>
              <Text
                style={styles.value_info_text}
              >
                {
                  `${matricula.substring(0, 4)} ${matricula.substring(4, 8)} ${matricula.substring(8)}`
                }
              </Text>
            </View>

            <View>
              <Text
                style={styles.label_info_text}
              >
                Validade
              </Text>
              <Text
                style={styles.value_info_text}
              >
                7 Jul 2022
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginBottom: 10 }}>
            <View>
              <Text
                style={styles.label_info_text}
              >
                Graduação (Ativo)
              </Text>
              <Text
                style={styles.value_info_text}
              >
                Sistemas de informação
              </Text>
            </View>

          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginBottom: 10 }}>
            <View>
              <Text
                style={styles.label_info_text}
              >
                Campus
              </Text>
              <Text
                style={styles.value_info_text}
              >
                NITERÓI
              </Text>
            </View>

          </View>

          <View style={{ alignItems: "center", marginTop: 33 }}>
            <Image
              style={{ width: 125, height: 34 }}
              source={require('../Login/logo.png')}
            />
          </View>
        </View>


        <Text style={styles.label_valido}>
          Válida mediante apresentação de documento com foto.
        </Text>
      </View>

    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0,
    backgroundColor: '#F8F8F8',

  },

  view_profile: {
    paddingHorizontal: 40,
  },

  profile_text_image: {
    width: 80,
    position: "relative",
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.4,
    borderColor: "#B2B2B2"
  },
  profile_text: {
    fontSize: 30,
    fontWeight: "600",

  },
  profile_image: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#B2B2B2"
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

  nome: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,

    color: "#1E1E1E"
  },

  label_info_text: {
    fontWeight: "500",
    marginVertical: 5,
    fontFamily: "Inter_500Medium",
    fontSize: 12,
    color: "#B2B2B2"
  },

  value_info_text: {
    fontFamily: "Inter_600SemiBold",
    color: "#1E1E1E"
  },

  label_valido: {
    marginVertical: 5,
    fontSize: 12,
    marginTop: 20,
    color: "#B2B2B2",
    textAlign: "center",
    fontFamily: "Inter_500Medium",

    // paddingHorizontal: 20
  }
});

export { Carteirinha }