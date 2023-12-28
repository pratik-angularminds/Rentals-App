import React from 'react';
import Login from './Auth/Login/LoginView';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartView from './Auth/Start/StartView';

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};
export const AppBinder = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: '',
          headerShadowVisible: false,
        }}>
        <Stack.Screen
          name="Home"
          component={StartView}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
