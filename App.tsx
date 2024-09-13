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
import IdAndPassword from './src/app/signup/IdAndPassword';
import Community from './src/app/community/page';
import Post from './src/app/community/Post';
import EditPost from './src/app/community/EditPost';
import AddTag from './src/app/community/AddTag';
import Review from './src/app/review/page';
import ReviewWrite from './src/app/review/ReviewWrite';
import KeywordReview from './src/app/review/KeywordReview';
import Search from './src/app/search/page';
import NavBar from './src/components/NavBar';
import Signup from './src/app/signup/page';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Review">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="NavBar" component={NavBar} />
        <Stack.Screen name="Community" component={Community} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="EditPost" component={EditPost} />
        <Stack.Screen name="AddTag" component={AddTag} />
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="ReviewWrite" component={ReviewWrite} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="KeywordReview" component={KeywordReview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
