import * as React from 'react';

import { NavigationContainer, TransitionPresets } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { Carteirinha } from "./Pages/Carteirinha";

import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};


const Routes = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{}}>
          <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
          <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
          
          <Stack.Screen 
            name="Carteirinha" 
            options={
              {
                headerShown: true,
                title: "", 
                headerTintColor: "#24BCCA", 
                headerShadowVisible: false, 
                headerStyle: {backgroundColor: "#F8F8F8"},
                gestureEnabled: true,
                
              }
            }  component={Carteirinha} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export { Routes }