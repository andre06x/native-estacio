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
        initialRouteName="Home"
        screenOptions={{
          // headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          presentation: "modal",
          cardOverlayEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen options={{headerShown: true, title: "", headerTintColor: "#24BCCA",  headerShadowVisible: false, headerStyle: {backgroundColor: "#F8F8F8"}}} name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Carteirinha" component={Carteirinha} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export { Routes }
