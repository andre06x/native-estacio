import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Homee} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export { Routes }