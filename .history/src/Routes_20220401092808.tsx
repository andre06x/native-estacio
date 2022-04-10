import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { Carteirinha } from "./Pages/Carteirinha";
import { LoginMicrosoft } from "./Pages/LoginMicrosoft";
import { SenhaMicrosoft } from "./Pages/SenhaMicrosoft";


const Stack = createStackNavigator();


const Routes = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginMicrosoft"
        screenOptions={{
          headerShown: false,
        }}
      >

    <Stack.Screen
          name="LoginMicrosoft"
          options={{ headerShown: false, gestureEnabled: false, cardOverlayEnabled: false, ...TransitionPresets.SlideFromRightIOS }}
          component={LoginMicrosoft}
        />

        <Stack.Screen
          name="SenhaMicrosoft"
          options={{ headerShown: false, gestureEnabled: false, cardOverlayEnabled: false, ...TransitionPresets.SlideFromRightIOS }}
          component={SenhaMicrosoft}
        />





        <Stack.Screen
          name="Login"
          options={{ gestureEnabled: false, cardOverlayEnabled: false }}
          component={Login}
        />






        <Stack.Screen
          name="Home"
          options={{ ...TransitionPresets.SlideFromRightIOS }}
          component={Home}
        />
        <Stack.Screen
          options={{
            gestureEnabled: true,
            cardOverlayEnabled: true,
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: true, title: "",
            headerTintColor: "#24BCCA",
            headerShadowVisible: false, headerStyle: { backgroundColor: "#F8F8F8" }
          }}
          name="Carteirinha"
          component={Carteirinha} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export { Routes }
