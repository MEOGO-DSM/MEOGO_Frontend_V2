/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Login from './src/app/login/page';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/app/main/page';
import IdAndPassword from './src/app/signup/IdAndPassword';
import Community from './src/app/community/page';
import Name from './src/app/signup/Name';
import School from './src/app/signup/School';
import FindSchool from './src/app/signup/FindSchool';
import School2 from './src/app/signup/School2';
import Post from './src/app/community/Post';
import EditPost from './src/app/community/EditPost';
import AddTag from './src/app/community/AddTag';
import Review from "./src/app/review/page"
import ReviewWrite from "./src/app/review/ReviewWrite"
import Search from "./src/app/search/page"


function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IdAndPassword"
          component={IdAndPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Name"
          component={Name}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="School"
          component={School}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FindSchool"
          component={FindSchool}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="School2"
          component={School2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Community"
          component={Community}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Post"
          component={Post}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditPost"
          component={EditPost}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddTag"
          component={AddTag}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Review"
          component={Review}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReviewWrite"
          component={ReviewWrite}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
