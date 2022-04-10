import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { Carteirinha } from "./Pages/Carteirinha";

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Carteirinha" options={{headerShown: true, title: "", headerTintColor: "#24BCCA",  headerShadowVisible: false, headerStyle: {backgroundColor: "#F8F8F8"}}}  component={Carteirinha} />
          <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
          <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export { Routes }