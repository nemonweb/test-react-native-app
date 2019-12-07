import {HomeScreen} from './screens/HomeScreen/HomeScreen';
import {NavigationNativeContainer} from '@react-navigation/native';
import React from 'react';
import {Test2Screen} from './screens/Test2Screen';
import {TestScreen} from './screens/TestScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="Test"
          component={TestScreen}
          options={{title: 'Test'}}
        />
        <Stack.Screen
          name="Test2"
          component={Test2Screen}
          options={{title: 'Test2'}}
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
};
