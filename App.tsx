/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Login from './src/app/Login/page';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Community from './src/app/community/page';
import Post from './src/app/community/Post';
import EditPost from './src/app/community/EditPost';
import AddTag from './src/app/community/AddTag';
import Review from './src/app/review/page';
import Write from './src/app/review/Write';
import KeywordReview from './src/app/review/KeywordReview';
import Search from './src/app/search/page';
import NavBar from './src/components/NavBar';
import Signup from './src/app/Signup/page';
import QandADetail from './src/app/review/QandADetail';
import Question from './src/app/review/Question';
import QueryProvider from './src/utils/query/Provider';
import ReduxProvider from './src/utils/store/Provider';
import MyPage from './src/app/mypage/page';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <QueryProvider>
      <ReduxProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="MyPage">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="NavBar" component={NavBar} />
            <Stack.Screen name="Community" component={Community} />
            <Stack.Screen name="Post" component={Post} />
            <Stack.Screen name="EditPost" component={EditPost} />
            <Stack.Screen name="AddTag" component={AddTag} />
            <Stack.Screen name="Review" component={Review} />
            <Stack.Screen name="ReviewWrite" component={Write} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="KeywordReview" component={KeywordReview} />
            <Stack.Screen name="QandADetail" component={QandADetail} />
            <Stack.Screen name="MyPage" component={MyPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </ReduxProvider>
    </QueryProvider>
  );
}

export default App;
