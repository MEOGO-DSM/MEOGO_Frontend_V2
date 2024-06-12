/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
<<<<<<< Updated upstream
=======
import React from 'react';
import Login from './src/app/login/page';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/app/main/page';
import IdAndPassword from './src/app/signup/IdAndPassword';
import Name from './src/app/signup/Name';
import School from './src/app/signup/School';
import FindSchool from './src/app/signup/FindSchool';
import School2 from './src/app/signup/School2';
>>>>>>> Stashed changes

import React from 'react';
import Signup from './src/app/signup/page';
import Login from './src/app/login/page';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/app/main/page';
import IdAndPassword from './src/app/signup/IdAndPassword';
import Name from './src/app/signup/Name';
import School from './src/app/signup/School';
import FindSchool from './src/app/signup/FindSchool';
import School2 from './src/app/signup/School2';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="IdAndPassword"
          component={IdAndPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Name"
          component={Name}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="School"
          component={School}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FindSchool"
          component={FindSchool}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="School2"
          component={School2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
