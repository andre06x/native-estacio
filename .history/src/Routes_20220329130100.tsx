import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { Carteirinha } from "./Pages/Carteirinha";


const Stack = createStackNavigator();


const Routes = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          presentation: "modal",
          cardOverlayEnabled: true,
          
        }}
      >
        <Stack.Screen name="Login" options={{gestureEnabled: false, cardOverlayEnabled: false,}} component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen options={{ ...TransitionPresets.SlideFromRightIOS, headerShown: true,  title: "", headerTintColor: "#24BCCA",  headerShadowVisible: false, headerStyle: {backgroundColor: "#F8F8F8"}}} name="Carteirinha" component={Carteirinha} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export { Routes }
